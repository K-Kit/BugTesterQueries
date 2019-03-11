from mongoengine import connect, connection
import datetime
import os

from models import Devices, TesterDevices, Bugs, Tester
import csv

DATA_DIR = './data'
TESTER_PATH = DATA_DIR + '/testers.csv'
BUG_PATH = DATA_DIR + '/bugs.csv'
TESTER_DEVICE_PATH = DATA_DIR + '/tester_device.csv'
DEVICES_PATH = DATA_DIR + '/devices.csv'
#
# # You can connect to a real mongo server instance by your own.
connect('db', host=os.environ['DB_PORT_27017_TCP_ADDR'], port=27017)
# connect('gs')
#

# ----
def create_tester(id, first_name, last_name, country, last_login, devices=None, bugs=None):
    return Tester( uid= int(id), first_name=first_name,
                  last_name=last_name, country=country, last_login=last_login)


# ----
def create_bug(id, deviceid, uid):
    # fetch tester ID via query, feel like there has to be a better way of doing this but i'll revisit this later
    tester = Tester.objects(uid=int(uid)).first()
    bug = Bugs(
                bugid=int(id),
                device=Devices.objects(deviceid=deviceid).first().id,
                tester=tester.id
             )
    bug.save()
    tester.update(push__bugs=bug)
    tester.save()
    return bug


# ----
def create_device(id, description):
    return Devices(deviceid=int(id),description=description)


# ----
def create_tester_device(uid, deviceid):
    tester = Tester.objects(uid=int(uid)).first()
    device = Devices.objects(deviceid=int(deviceid)).first()
    if device in tester.devices:
        print('tester already has device')
    else:
        try:
            tester.update(push__devices=device)
            # tester.update(add)
            tester.save()
        except Exception as ex:
            print(ex)
    return TesterDevices(device=device.id, tester=tester.id)


# ----
def populate_datas(path, createfunc):
    with open(path, 'r') as f:
        csvreader = csv.reader(f)
        i=0
        for row in csvreader:
            if i == 0:
                i += 1
                continue
            try:
                createfunc(*row).save()
            except Exception as ex:
                if 'duplicate' in str(ex):
                    pass
                else:
                    print(f"An error has occurred: {ex}")



def init_db():
    # initialize tables
    populate_datas(TESTER_PATH, create_tester)
    populate_datas(DEVICES_PATH, create_device)

    # Testers and devices need to exist before bugs and tester devices
    populate_datas(TESTER_DEVICE_PATH, create_tester_device)
    populate_datas(BUG_PATH, create_bug)

if __name__ == '__main__':
    init_db()