# urls.py
from django.urls import path
from .views import GalleryImageView

urlpatterns = [
    path('api/image/', GalleryImageView.as_view(), name='GalleryImageView'),  # Corrected line
]
