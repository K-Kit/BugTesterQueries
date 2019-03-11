import graphene
from graphene import Node


class Devices(graphene.Interface):
    id=graphene.ID()
    deviceid=graphene.Int()
    description=graphene.String()

class Tester(Node):
    id=graphene.ID(required=True)
    first_name = graphene.String()
    last_name = graphene.String()
    bugs = graphene.List(Node)
    experience = graphene.Int()