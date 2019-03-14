import graphene
from graphene.relay import Node
from graphene_mongo import MongoengineConnectionField, MongoengineObjectType
import json
import models

# ----
class Devices(MongoengineObjectType):

    class Meta:
        model = models.Devices
        interfaces = (Node,)

    description=graphene.String()


# ----
class TesterDevices(MongoengineObjectType):

    class Meta:
        model = models.TesterDevices
        interfaces = (Node,)


# ----
class Bugs(MongoengineObjectType):

    class Meta:
        model = models.Bugs
        interfaces = (Node,)


class Tester(MongoengineObjectType):

    class Meta:
        model = models.Tester
        interfaces = (Node,)

    bugs = graphene.List(Bugs)
    devices = graphene.List(Devices)
    experience = graphene.Int()
    first_name = graphene.String()
    last_name = graphene.String()
    experience = graphene.Int()
    country = graphene.String()

    def resolve_experience(self, info):
        return len(self.bugs)




def not_none_or_all(field):
    return field is not None and field != ["ALL"]

class Query(graphene.ObjectType):
    node = Node.Field()
    all_testers = MongoengineConnectionField(Tester)
    all_bugs = MongoengineConnectionField(Bugs)
    tester = graphene.Field(Tester)
    bugs = graphene.Field(Bugs)
    tester_devices = graphene.Field(TesterDevices)
    devices = graphene.Field(Devices)

    testers = graphene.List(Tester,
                            uid=graphene.Int(),
                            countries= graphene.List(graphene.String),
                            country=graphene.String(),
                            devices=graphene.List(graphene.String),
                            rawquery=graphene.JSONString()
                            )


    """
    Method to resolve queries for testers by country and device
    I'm thinking there is an easier way of accomplishing this 
    """
    def resolve_testers(self, info,countries=["ALL"], uid=1, devices=["ALL"], rawquery=None):
        results = set()
        countries = list(map(lambda x: x.upper(), countries))
        print(rawquery, type(rawquery))
        # for this to work we will need to parse field types
        if rawquery is not None:
            return list(models.Tester.objects(__raw__=rawquery).all())

        if not_none_or_all(countries):
            query_result = models.Tester.objects(country__in=countries).all()
        elif countries == ["ALL"]:
            query_result = models.Tester.objects.all()

        if query_result is not None:
            if not_none_or_all(devices):
                device_ids = list(
                    map(
                        lambda d: models.Devices.objects(description__icontains=d).first().id, devices
                    )
                )

                for id in device_ids:
                    for item in query_result.filter(devices=id):
                        results.add(item)
                return list(results)

            elif devices == ["ALL"]:
                return list(query_result)

        return "error processing query"



schema = graphene.Schema(query=Query, types=[Query, Bugs, TesterDevices, Tester])