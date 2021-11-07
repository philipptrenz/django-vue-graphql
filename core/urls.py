from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

from graphene_file_upload.django import FileUploadGraphQLView

from .schema import schema
from frontend.views import VueView


urlpatterns = [
    # Standard Django Admin interface
    path('admin/', admin.site.urls),

    # GraphQL endpoint with graphiql served in debug mode
    path('graphql/', FileUploadGraphQLView.as_view(schema=schema, graphiql=settings.DEBUG)),

    # Standard Django authentication system, templates modified in frontend/templates/registration
    path('', include('django.contrib.auth.urls')),

    # The frontend view serving Vue
    path('', VueView.as_view()),
]

if settings.DEBUG:
    # Django only serves static files in debug mode
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
