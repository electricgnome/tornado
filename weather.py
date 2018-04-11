#!/usr/bin/env python3

import os

import tornado.ioloop
import tornado.web
import tornado.log

import queries
import json
import requests
import datetime

from jinja2 import \
  Environment, PackageLoader, select_autoescape

ENV = Environment(
  loader=PackageLoader('weather', 'templates'),
  autoescape=select_autoescape(['html', 'xml'])
)


class templateHandler(tornado.web.RequestHandler):
  def initialize(self):
    self.session = queries.Session(
      'postgresql://postgres@localhost:5432/test')

  def render_template(self, tpl, context):
    template = ENV.get_template(tpl)
    self.write(template.render(**context))


class MainHandler(templateHandler):
  def get(self, page='home'):
    page=page+'.html'
    city = self.get_query_argument('city', None)
    weather_data = None
    sql_weather = self.session.query('''SELECT * FROM weather''')
    print (sql_weather[0])

    if city:
      payload = {'q': city, 'APPID': '237b563c02352989cfe770a27c5515ed'}
      r = requests.get('https://api.openweathermap.org/data/2.5/weather', params=payload)
      weather_data = r.json()
      self.session.query('''INSERT INTO weather VALUES(DEFAULT, CURRENT_TIMESTAMP,  %(city)s, %(weather_data)s)''', {'city':city, 'weather_data': r.text})
    self.set_header(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, max-age=0')
    self.render_template(page, {'weather_data': weather_data})



def make_app():
  return tornado.web.Application([
    (r"/", MainHandler),
    (r"/static/(.*)",
      tornado.web.StaticFileHandler, {'path': 'static'}),
  ], autoreload=True)

if __name__ == "__main__":
  tornado.log.enable_pretty_logging()
  app=make_app()
  app.listen(int(os.environ.get('PORT', '8080')))
  tornado.ioloop.IOLoop.current().start()


