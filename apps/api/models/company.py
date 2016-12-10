from mongoengine import *


class Company(Document):
    name = StringField(required=True, max_length=50)
    jobtype = StringField(required=True, max_length=50)
    description = StringField(required=True, max_length=200)
    income = IntField()
    rating = FloatField()
    startDate = StringField()
    endDate = StringField()
    slug = StringField(max_length=50, unique=True)
