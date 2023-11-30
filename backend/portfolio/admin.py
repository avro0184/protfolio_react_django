from django.contrib import admin
from .models import Gallery_image

# Register your models here.
class Gallery_imageAdmin(admin.ModelAdmin):
    list_display = ('image_tag','image_name','created_date')
    search_fields=('image_name','created_date')
admin.site.register(Gallery_image,Gallery_imageAdmin)