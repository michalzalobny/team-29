"""Email Schemas"""
from typing import List, Dict, Any

from pydantic import BaseModel, EmailStr


class TemplateEmailSchema(BaseModel):
    """Schema for sending Emails using Template"""
    email: List[EmailStr]
    subject: str
    body: Dict[str, Any]
    template_name: str
