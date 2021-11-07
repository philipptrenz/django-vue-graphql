# Django + Vue + Vuetify + GraphQL

A Django framework that integrates Vue with Vuetify and GraphQL with as little complexity as possible. 

Great for prototyping and to get started quickly! 🚀

![Screencast of this Django application framework](.github/screencast.gif)

## What is it about?

This is an opinionated framework that integrates Vue with Vuetify directly into Django. 
The Vue application is embedded using the Django template engine and GraphQL is preconfigured for backend communication. 
All requests are secured via Django's standard session-based authentication framework, CSRF cookies are also configured for GraphQL requests. 
For the login the standard view form `django.contrib.auth` is used, although the form is rendered by Vue.

## Get started

### Setup

```bash
# Install Python dependencies
pip -r requirements.txt

# Create sqlite3 database and apply migrations
./manage.py migrate

# Install Vue dependencies
cd frontend
yarn install
cd ..

# Create an admin account
./manage.py createsuperuser
```

### Run 

```bash
# Run development server
./manage.py runserver

# Run frontend in dev mode
cd frontend
yarn serve
```

### Build

```bash
# Build frontend
cd frontend 
yarn build

# Collect static files
cd ..
./manage.py collectstatic
```
