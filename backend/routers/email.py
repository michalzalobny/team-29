"""Sending Emails"""
from fastapi import APIRouter, Security
from fastapi_mail import FastMail, MessageSchema

from db.schemas import TemplateEmailSchema
from dependencies import manager
from settings import email_conf

router = APIRouter(
    prefix="/email",
    responses={404: {"description": "Not found"}},
)


@router.post("/send_with_template", tags=["_admin"], dependencies=[Security(manager, scopes=["ADMIN"])])
async def send_with_template(email: TemplateEmailSchema) -> dict:
    """
    Send Email using `.html` Template (provided example in backend/email-templates)

    Args:

        email:
            email: List[EmailStr] - Array of Emails
            subject: str - Subject Title
            body: Dict[str, Any] - Variables
            template_name: str - Email template

    Returns:
        On Success - email recipients.
    """
    message = MessageSchema(
        subject=email.dict().get("subject"),
        recipients=email.dict().get("email"),
        template_body=email.dict().get("body"),
    )

    fastmail = FastMail(email_conf)
    await fastmail.send_message(message, template_name=email.dict().get("template_name"))
    return {"message": "email has been sent"}
