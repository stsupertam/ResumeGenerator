from rest_framework.serializers import *
from rest_framework_mongoengine.serializers import *
from .company import Company
import json


class CompanySerializer(DocumentSerializer):
    name = CharField(max_length=50)
    jobtype = CharField(max_length=50)
    description = CharField(max_length=200, allow_blank=True)
    income = IntegerField(min_value=0)
    rating = IntegerField(min_value=0, max_value=5)

    class Meta:
        model = Company
        fields = ('name', 'jobtype', 'description', 'income',
                  'rating', 'startDate', 'endDate', 'slug')
