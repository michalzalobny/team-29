"""Utility enums for database models and schemas"""
from enum import Enum


class Category(str, Enum):
    """Category for an animal's population status"""
    LEAST_CONCERN = "LEAST_CONCERN"
    NEAR_THREATENED = "NEAR_THREATENED"
    VULNERABLE = "VULNERABLE"
    ENDANGERED = "ENDANGERED"
    CRITICALLY_ENDANGERED = "CRITICALLY_ENDANGERED"
    EXTINCT_IN_WILD = "EXTINCT_IN_WILD"
    EXTINCT = "EXTINCT"


class Role(str, Enum):
    """Roles for users"""
    ADMIN = "ADMIN"
    USER = "USER"
