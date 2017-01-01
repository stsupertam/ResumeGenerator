from rest_framework.serializers import *
from rest_framework_mongoengine.serializers import *
from .model import Company
from .model import Resume
import json


class CompanySerializer(DocumentSerializer):
    description = CharField(allow_blank=True)
    income = IntegerField(min_value=0)
    rating = IntegerField(min_value=0, max_value=5)

    class Meta:
        model = Company
        fields = ('name', 'jobtype', 'description', 'income',
                  'rating', 'startDate', 'endDate', 'slug')


class ResumeSerializer(DocumentSerializer):
    class Meta:
        model = Resume
        fields = ('firstname', 'lastname', 'city', 'street',
                  'district', 'sub_district', 'zipcode', 'web',
                  'phone', 'email', 'skill', 'objective',
                  'qualification', 'education', 'experience',
                  'reference', 'slug')
        depth = 2

