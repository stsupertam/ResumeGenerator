from apps.api.models import CompanySerializer
from apps.api.models import ResumeSerializer
from apps.api.models import HtmlSerializer
from apps.api.models import Company
from apps.api.models import Resume
from apps.api.models import Html
from apps.api.include.slug import to_slug
from rest_framework_mongoengine import viewsets
from rest_framework.response import Response
from rest_framework.decorators import list_route


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


class HtmlViewSet(viewsets.ModelViewSet):
    lookup_field = 'slug'
    serializer_class = HtmlSerializer

    def get_queryset(self):
        return Html.objects.all()


class ResumeViewSet(viewsets.ModelViewSet):
    lookup_field = 'slug'
    serializer_class = ResumeSerializer

    @list_route()
    def get_slug(self, request):
        slug = {}
        slug['list'] = []
        data = Resume.objects.values_list('slug')
        for item in data:
            slug['list'].append(item)
        return Response(slug)

    def create(self, request, *args, **kwargs):
        slug = request.data.get('firstname') + ' ' + request.data.get('lastname')
        request.data['slug'] = to_slug(slug)
        return super(ResumeViewSet, self).create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        slug = request.data.get('firstname') + ' ' + request.data.get('lastname')
        request.data['slug'] = to_slug(slug)
        return super(ResumeViewSet, self).update(request, *args, **kwargs)

    def get_queryset(self):
        return Resume.objects.all()
