from apps.api.models import CompanySerializer
from apps.api.models import Company
from apps.api.include.slug import to_slug
from rest_framework import status
from rest_framework.response import Response
from rest_framework_mongoengine import viewsets

class CompanyViewSet(viewsets.ModelViewSet):
    lookup_field = 'slug'
    serializer_class = CompanySerializer

    def create(self, request):
        data = request.data
        data['slug'] = to_slug(data['name'])
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def get_queryset(self):
        return Company.objects.all()
