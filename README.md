# next-route-to-express-route

Converts Next.js routes to Express.js routes.

```
npm i next-route-to-express-route
```

```js
const { fromNextToExpressRoute } = require('next-route-to-express-route')

console.log(fromNextToExpressRoute('/users/[id]/profile'))
// => '/users/:id/profile'
```

It works with catch-all routes too:

```js
const { fromNextToExpressRoute } = require('next-route-to-express-route')

console.log(fromNextToExpressRoute('/users/[...]'))
// => '/users/*'
```

That's it! It's just a simple utility package :ok_hand:

## Author

Fran Mendez &bullet; [Twitter](https://twitter.com/fmvilas)

## License

Apache 2.0