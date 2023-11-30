from django.http import JsonResponse
from rest_framework import generics
from .models import Gallery_image
from .serializers import GalleryImageSerializer
from rest_framework.generics import ListAPIView

class GalleryImageView(ListAPIView):
    def get_queryset(self):
        return Gallery_image.objects.all()  # Replace with your actual model
    def get(self, request):
        queryset = self.get_queryset()
        serializer = GalleryImageSerializer(queryset, many=True)
        data = serializer.data
        return JsonResponse(data, safe=False)