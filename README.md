# Bug Tester Queries

To make things a little bit interesting I decided to try out a few technologies I've been wanting to for quite some time.
- GraphQL
- Apollo
- MongoDB

As well as my usual flask-react stack.

## Setup
1) Clone the repository
2) docker-compose build
3) docker-compose up

## Usage

- Visit localhost:5000/ to view a very simple web interface to query bug testers by country and devices.

- Visit localhost:/graphql for view GraphiQl


Notes: web interface was somewhat of an afterthought and is not get included in the docker, I have included a built version of the react app to simplify things


Possible improvements:
- http://docs.mongoengine.org/guide/querying.html#advanced-queries

- batch writes

- accept raw query dict
