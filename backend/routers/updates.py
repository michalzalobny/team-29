"""Endpoints for game related resources"""
from datetime import datetime, timezone

from fastapi import APIRouter, Response, Depends
from feedgen.feed import FeedGenerator
from requests import Session

from db import crud
from db.enums import Channels
from dependencies import get_db

router = APIRouter(
    responses={404: {"description": "Not found"}},
)


@router.get("/rss")
def rss_feed(session: Session = Depends(get_db)):
    """RSS feed endpoint

    Returns:

        XML data
    """
    base_link = "https://fast-api-tanimals.herokuapp.com/animals"

    animals = crud.get_animals(session)

    feedgen = FeedGenerator()

    feedgen.link(href=base_link)
    feedgen.title("Team 29 - Save the Animals")
    feedgen.description("Save the animals")
    feedgen.language("en")

    last_build = crud.get_build(Channels.ANIMALS, session)
    if last_build.last_build_date:
        last_build_date = datetime.combine(
            last_build.last_build_date.date(),
            last_build.last_build_date.time(),
            tzinfo=timezone.utc
        )
        feedgen.lastBuildDate(last_build_date)

    for animal in animals:
        entry = feedgen.add_entry()
        entry.title(animal.name)
        entry.link(href=f"{base_link}/{animal.id}")
        entry.description(animal.description)

    response = Response(content=feedgen.rss_str(), media_type="application/rss+xml")

    return response
