from mongoengine import *


class Company(Document):
    name = StringField(required=True, max_length=50)
    jobtype = StringField(required=True, max_length=50)
    description = StringField(max_length=200)
    income = IntField(required=True)
    rating = FloatField(required=True)
    startDate = StringField(required=True)
    endDate = StringField(required=True)
    slug = StringField(max_length=50, unique=True)
