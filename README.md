# Django + Vue + Vuetify + GraphQL

A Django application that integrates Vue with Vuetify and GraphQL

## What is it about?

This is an opinionated framework that integrates Vue with Vuetify directly into Django. 
The Vue application is embedded using the Django template engine and GraphQL is preconfigured for backend communication. 
All requests are secured via Django's standard session-based authentication framework, CSRF cookies are also configured for GraphQL requests. 
For the login the standard view form `django.contrib.auth` is used, although the form is rendered by Vue.

