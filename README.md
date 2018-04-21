# Named Curry
Build curry functions without worry with the naming order.

## Basic usage
```javascript
const namedCurry = require('named-curry')

const func = (a, b) => a + b

const curriedFunc = namedCurry(func)

const preparedFunc = curriedFunc( {a: 1} ) // function
preparedFunc( {b: 2 }) // 3

```

## Object functions
You can also use it with an object function. (The only problem is you need to specify what params the function will need).

```javascript
const namedCurry = require('named-curry')

const func = ({ a, b }) => a + b

const curriedFunc = namedCurry(['a','b'], func)

const preparedFunc = curriedFunc( {a: 1} ) // function
preparedFunc( {b: 2 }) // 3

```


### Disclaimer
This is a new lib. Feel free to help me build it. I would love hear some new ideas it.

Any pull requests are wellcome to, even if we didn't mapped it yet (for now hehe).


### Backlog
This backlog will change with your help:

- [ ] define lib name (there's already an `named-curry` with is not mantained)
- [ ] moar tests
- [ ] better organization (everything is in the index :see_no_evil: )
- [ ] CI
- [ ] did I already told about tests?
- [ ] ... ?!
- [ ] profit!1! (srly, will be free forever. hehe)
