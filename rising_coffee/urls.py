from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name="rising_coffee/home.html"), name="home"),
    # path('accounts/', include('allauth.urls'), name="accounts"),
    path('admin/', admin.site.urls),
]
