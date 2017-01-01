from django.conf.urls import url, include
from django.contrib import admin
from rest_framework_mongoengine import routers
from . import views

router = routers.DefaultRouter()
router.register(r'company', views.CompanyViewSet, r"company")
router.register(r'resume', views.ResumeViewSet, r"resume")

urlpatterns = [
    url(r'', include(router.urls, namespace='api')),
]
