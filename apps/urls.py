"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add/', views.add_company, name='add'),
    url(r'^edit/(?P<slug>.+?)/?$', views.edit_company, name='edit'),
    url(r'^list/', views.list_company, name='list'),
    url(r'^resume/view/(?P<slug>.+?)/?$', views.resume_view, name='resume_view'),
    url(r'^resume/create/?$', views.resume_create, name='resume_create'),
    url(r'^resume/pdf/(?P<slug>.+?)/?$', views.pdf, name='pdf'),
    url(r'^resume/edit/(?P<slug>.+?)/?$', views.resume_edit, name='resume_edit'),
    url(r'^api/', include('apps.api.urls')),
]
