import logging
import graphene

from django.conf import settings
from django.contrib.auth.models import User


class Query(graphene.ObjectType):
  
  is_debug = graphene.Boolean()
  test = graphene.String()

  def resolve_is_debug(self, info, **kwargs):
    return settings.DEBUG

  def resolve_test(self, info, **kwargs):
    user: User = info.context.user
    return f"Hi { user if user.is_authenticated else 'unknown user' }, you successfully fetched data from Django via GraphQL."  


class Mutation(graphene.ObjectType):

  test = graphene.String(input=graphene.String(required=True))
  
  def resolve_test(self, info, input: str, **kwargs):
    user: User = info.context.user
    if user.is_authenticated:
      return f"Hi from Django! Your entered input value is '{ input }', right?"  
    else:
      return 'Unauthenticated users have no access to this mutation.'