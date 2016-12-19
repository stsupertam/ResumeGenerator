from rest_framework_mongoengine.serializers import *
from .company import Company
import json


class CompanySerializer(DocumentSerializer):
    class Meta:
        model = Company
        fields = ('name', 'jobtype', 'description', 'income', 'rating',
                  'startDate', 'endDate', 'slug')
