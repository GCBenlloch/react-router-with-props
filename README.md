# react-router-with-props

Extra routes for [react-router-dom](https://github.com/ReactTraining/react-router).

### Install

Install it
```
npm i -S react-router-with-props
```

and import it in your file
```
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
```

### Route types
* *PropsRoute* - Default route to which you can pass props.
* *PublicRoute* - It prevents the access to auth users and you can pass props to it.
* *PrivateRoute* - It prevents the access to unauth users and you can pass props to it.

### Props Route
It's the [basic route](https://reacttraining.com/react-router/web/example/basic), but you can pass props to it like to any other component.
**Any one can access it.**
```js
<PropsRoute exact path="/" component={Title} text="Hello world!" />
```

### Public Route

It requires two extra props.
| Prop | Type |  |
|---|---|---|
| authed | boolean | If the user is authed or not |
| redirectTo | string | route to redirect if necessary |

**Only unauthed users can access it.**

The next exemple will call the Title component and will pass to it the text prop.
```js
<PublicRoute exact path="/public" authed={false} redirectTo="/admin" component={Title} text="This route is for unauthed users"/>
```

And this one will call redirect them to '/admin' route.
```js
<PublicRoute exact path="/public" authed={true} redirectTo="/admin" component={Title} text="This route is for unauthed users"/>
```

### Private Route

It requires two extra props.
| Prop | Type |---|
| ------ | ------ | ------ |
| authed | boolean | If the user is authed or not |
| redirectTo | string | route to redirect if necessary |

**Only authed users can access it.**

The next exemple will call the Title component and will pass to it the text prop.
```js
<PrivateRoute exact path="/private" authed={true} redirectTo="/login" component={Title} text="This is a private route"/>
```

And this one will call redirect them to '/login' route.
```js
<PrivateRoute exact path="/private" authed={false} redirectTo="/login" component={Title} text="This is a private route"/>
```
