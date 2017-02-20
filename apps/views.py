from .api.models import Company
from .api.models import Html
from django.http import HttpResponse
from django.shortcuts import render
from django.template.loader import get_template
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from settings import MEDIA_ROOT
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
    location = MEDIA_ROOT + "/picture"
    fs = FileSystemStorage(location=location)
    img_path = MEDIA_ROOT + "/picture/profile.png"
    myfile = slug + ".jpg"
    if(fs.exists(myfile)):
        img_path = MEDIA_ROOT + "/picture/" + myfile
    html = Html.objects(slug=slug)
    check_resume_data = "false"
    if(html):
        check_resume_data = "true"
    print(check_resume_data)
    return render(request, 'resume/resume_view.html', {"slug": slug, "img": img_path, "check": check_resume_data})


def resume_edit(request, slug):
    return render(request, 'resume/resume_edit.html', {"slug": slug})


def resume_create(request):
    return render(request, 'resume/resume_create.html', {})


def pdf(request, slug):
    template = get_template("pdf.html")
    img_path = MEDIA_ROOT + "/picture/profile.png"
    html = Html.objects(slug=slug).first().html
    context = {
        "img": img_path,
        "html": html
    }
    html = template.render(context)
    css = ['static/css/bootstrap.css', 'static/css/pdf.css']
    pdfkit.from_string(html, 'resume.pdf', css=css)
    pdf = open("resume.pdf")
    response = HttpResponse(pdf.read(), content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename=resume.pdf'
    pdf.close()
    os.remove("resume.pdf")
    return response


def upload(request, slug):
    if request.method == 'POST' and request.FILES['myfile']:
        myfile = request.FILES['myfile']
        myfile.name = slug + "." + "jpg"
        location = MEDIA_ROOT + "/picture"
        fs = FileSystemStorage(location=location)
        if(fs.exists(myfile.name)):
            fs.delete(myfile.name)
        fs.save(myfile.name, myfile)
        return render(request, 'upload.html')
    return render(request, 'upload.html')
