from django.shortcuts import render
from .api.models import Company


def index(request):
    return render(request, 'index.html', {})


def add_company(request):
    return render(request, 'add.html', {})


def edit_company(request, slug):
    return render(request, 'edit.html', {"slug": slug})


def list_company(request):
    item_count = Company.objects.count()+1
    loop_times = range(1,item_count)
    return render(request, 'list.html', {"loop_times": loop_times})

