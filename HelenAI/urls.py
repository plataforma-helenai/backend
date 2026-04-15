import os
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.views.static import serve


def prototipo_view(request, path='compartilhado/login.html'):
    prototipos_dir = os.path.join(settings.BASE_DIR, 'HelenAI', 'prototipos')
    return serve(request, path, document_root=prototipos_dir)


def pdf_view(request, path):
    pdfs_dir = os.path.join(settings.BASE_DIR, 'HelenAI', 'pdfs')
    return serve(request, path, document_root=pdfs_dir)


urlpatterns = [
    path('django-admin/', admin.site.urls),
    path('', prototipo_view, name='home'),
    path('pdfs/<path:path>', pdf_view, name='pdfs'),
    path('<path:path>', prototipo_view, name='prototipo'),
]
