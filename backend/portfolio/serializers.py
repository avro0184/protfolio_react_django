# serializers.py
from rest_framework import serializers
from .models import Gallery_image

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery_image
        fields = '__all__'
