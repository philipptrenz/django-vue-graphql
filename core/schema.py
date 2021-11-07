import graphene

from graphql_api import schema as main_schema


class Query(main_schema.Query, graphene.ObjectType):
    pass

class Mutation(main_schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(
  query=Query, 
  mutation=Mutation
)