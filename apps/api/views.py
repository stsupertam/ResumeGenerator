from apps.api.models import CompanySerializer
from apps.api.models import Company
from apps.api.include.slug import to_slug
from rest_framework import status
from rest_framework.response import Response
from rest_framework_mongoengine import viewsets
from rest_framework.exceptions import ValidationError


class CompanyViewSet(viewsets.ModelViewSet):
    lookup_field = 'slug'
    serializer_class = CompanySerializer

    def create(self, request, *args, **kwargs):
        request.data['slug'] = to_slug(request.data.get('name'))
        return super(CompanyViewSet, self).create(request, *args, **kwargs)


    def update(self, request, *args, **kwargs):
        request.data['slug'] = to_slug(request.data.get('name'))
        return super(CompanyViewSet, self).update(request, *args, **kwargs)

    def get_queryset(self):
        return Company.objects.all()
