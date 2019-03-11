from database import init_db
from flask import Flask
from flask_graphql import GraphQLView
from schema import schema
import os
from pymongo import MongoClient
from flask_cors import CORS
import flask

app = Flask(__name__, static_folder='web/build/static', template_folder='web/build')
CORS(app)
app.debug = True

default_query = '''
{testers(countries: ["US"], devices: ["ALL"]) {
  uid
  country
  firstName
  experience
  devices{
    description
    deviceid
  }
  bugs{
    bugid
    device {
      deviceid
      description
    }
  }
}}'''.strip()

app.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True, default_query=default_query)
)
@app.route('/')
def get_index():
  return flask.render_template('index.html')


if __name__ == '__main__':
    print('getting ready')
    init_db()
    print('db initialized')
    app.run(host='0.0.0.0', debug=True)
    print('hello world!')