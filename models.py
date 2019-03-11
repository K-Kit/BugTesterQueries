# flask_graphene_mongo/models.py
from datetime import datetime
from mongoengine import Document
from mongoengine.fields import (
    DateTimeField, ReferenceField, StringField, IntField, ObjectId, EmbeddedDocumentListField,
    ListField)


# ----
class Devices(Document):
    # "deviceId","description"
    meta = {'collection': 'devices'}

    deviceid = IntField(unique=True)
    # description could probably be unique as well but I'll leave it as is for now
    description = StringField()


# ----
class TesterDevices(Document):
    # "testerId","deviceId"
    meta = {'collection': 'tester_devices'}
    tester = ReferenceField('Tester', unique=True)
    device = ReferenceField(Devices, unique=True)


# ----
class Tester(Document):
    # "testerId","firstName","lastName","country","lastLogin"
    meta = {'collection': 'tester'}
    uid = IntField(unique=True)
    first_name = StringField()
    last_name = StringField()
    country = StringField()
    last_login = DateTimeField(default=datetime.now)
    bugs = ListField(ReferenceField('Bugs'))
    devices = ListField(ReferenceField(Devices))


# ----
class Bugs(Document):
    # "bugId","deviceId","testerId"
    meta = {'collection': 'bugs'}
    bugid = IntField(unique=True)
    device = ReferenceField(Devices)
    tester = ReferenceField(Tester)

