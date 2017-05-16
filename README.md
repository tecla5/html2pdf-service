# Html2Pdf

Hemera Web service on top of [Hemera Micro Services](https://hemerajs.github.io/hemera/)

## Docker up

`docker up`

## Web server

Use [hemera-web](https://github.com/hemerajs/hemera/blob/master/examples/web.js)

```js
const Hemera = require('nats-hemera')
const nats = require('nats').connect()
const hemeraWeb = require('hemera-web')

const hemera = new Hemera(nats)
hemera.use(hemeraWeb, {
  port: 3000,
  host: '127.0.0.1',
  pattern: {} // default pattern
})

hemera.ready(() => {
  hemera.add({
    topic: 'math',
    cmd: 'add'
  }, (req, cb) => {
    cb(null, req.a + req.b)
  })
})
```

## Storage

Use [hemera-mongo](https://www.npmjs.com/package/hemera-mongo-store)

See [mongo-store](https://github.com/hemerajs/hemera/blob/master/examples/mongo-store.js) example

For docs, see [store API](https://github.com/hemerajs/hemera/tree/master/packages/hemera-store)

## Authentication

Use [hemera-jwt-auth](https://www.npmjs.com/package/hemera-jwt-auth)

See [jwt-auth](https://github.com/hemerajs/hemera/blob/master/examples/jwt-auth.js) example

## Redis cache

Use [hemera-redis-cache](https://www.npmjs.com/package/hemera-redis-cache)

See [hemera-redis-cache](https://github.com/hemerajs/hemera/blob/master/examples/redis-cache.js) example

## Test

TODO: missing

Use `ava`