# About

Simple Express configuration to reproduce a error when run with Phusion Passenger receiving POST data.
Specifically: RangeError: Maximum call stack size exceeded 
Looks similar to this issue, except only shows up when run with passenger: https://github.com/newrelic/node-newrelic/issues/50

# Install

```
$ cd newrelic-express-passenger-post-error && npm install
```

Install and install Phusion Passenger standalone:
(Error was originally produced on OS X, node v0.10.23)

https://www.phusionpassenger.com/download#open_source

# Reproduce:

(With Passenger)
```
$ cd newrelic-express-passenger-post-error
$ passenger start
```
```
$ curl http://0.0.0.0:3000/
OK
$ curl http://0.0.0.0:3000/post -X POST
OK
$ curl http://0.0.0.0:3000/post -X POST -d "{}"
RangeError: Maximum call stack size exceeded
```

(Works without Passenger)
```
$ node app.js
```
```
$ curl http://0.0.0.0:3000/post -X POST -d "{}"
OK
```