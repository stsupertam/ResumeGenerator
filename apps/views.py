from .api.models import Company
from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import get_template
from settings import STATIC_ROOT
import pdfkit
import os


def index(request):
    return render(request, 'index.html', {})


def add_company(request):
    return render(request, 'add.html', {})


def edit_company(request, slug):
    return render(request, 'edit.html', {"slug": slug})


def list_company(request):
    item_count = Company.objects.count()+1
    loop_times = range(1, item_count)
    return render(request, 'list.html', {"loop_times": loop_times})


def resume_view(request, slug):
    return render(request, 'resume/resume_view.html', {"slug": slug})


def resume_edit(request, slug):
    return render(request, 'resume/resume_edit.html', {"slug": slug})


def resume_create(request):
    return render(request, 'resume/resume_create.html', {})


def pdf_view(request):
    template = get_template("pdf.html")
    img_path = STATIC_ROOT + "/picture/girl.jpg"
    context = {"img": img_path}
    html = template.render(context)
    css = ['static/css/bootstrap.css', 'static/css/resume_view.css']
    pdfkit.from_string(html, 'out.pdf', css=css)
    pdf = open("out.pdf")
    response = HttpResponse(pdf.read(), content_type='application/pdf')
    response['Content-Disposition'] = 'filename=output.pdf'
    pdf.close()
    os.remove("out.pdf")
    return response


def pdf_view_test(request):
    return render(request, 'pdf.html', {})
