from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.indexpage),
    url(r'^login',views.login),

    url(r'^initial',views.initial),
]