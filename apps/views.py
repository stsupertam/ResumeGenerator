from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {})


def add_company(request):
    return render(request, 'add.html', {})


def list_company(request):
    return render(request, 'list.html', {})
