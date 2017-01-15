from mongoengine import *


class Company(Document):
    name = StringField(required=True)
    jobtype = StringField(required=True)
    description = StringField()
    income = IntField(required=True)
    rating = FloatField(required=True)
    startDate = StringField(required=True)
    endDate = StringField(required=True)
    slug = StringField(unique=True)


class Education(EmbeddedDocument):
    university_name = StringField(required=True)
    major = StringField(required=True)
    degree = StringField(required=True)
    grade = FloatField(required=True)
    startDate = StringField(required=True)
    endDate = StringField(required=True)


class Experience(EmbeddedDocument):
    company_name = StringField(required=True)
    jobtype = StringField(required=True)
    joblist = ListField()
    startDate = StringField(required=True)
    endDate = StringField(required=True)


class Resume(Document):
    firstname = StringField(required=True)
    lastname = StringField(required=True)
    city = StringField(required=True)
    street = StringField(required=True)
    district = StringField(required=True)
    sub_district = StringField(required=True)
    zipcode = IntField(required=True)
    web = StringField(required=True)
    phone = StringField(required=True)
    email = StringField(required=True)
    skill = ListField(required=True)
    objective = StringField(required=True)
    education = ListField(EmbeddedDocumentField(Education))
    experience = ListField(EmbeddedDocumentField(Experience))
    qualification = ListField(required=True)
    reference = StringField(required=True)
    slug = StringField(required=True, unique=True)
