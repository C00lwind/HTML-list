from django.contrib import admin
from django.conf.urls import url, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    url(r'^', include('communication.urls')),
    url(r'^admin/', admin.site.urls),
]

urlpatterns += staticfiles_urlpatterns()
