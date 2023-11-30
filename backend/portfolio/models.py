from django.utils.html import format_html
from django.db import models


class Gallery_image(models.Model):
    image_name = models.CharField(max_length=250,blank=True,null=True)
    image = models.ImageField(upload_to='Gallery')
    created_date = models.DateField(auto_now_add=True)
    def image_tag(self):
        return format_html('<img src="/media/{}" style="width:40px;height:40px;border-radius:10%"/>'.format(self.image))
    def __str__(self) -> str:
        return self.image_name






