# c-yasudo

Cached yasudo

# Install

```sh
npm @mh-cbon/c-yasudo --save
```

# Usage

Set sudo password given a pre defined env variable.

```js
// by default it will use process.env['yasudo']
var spawn = require('@mh-cbon/c-yasudo');
// but you can configure it
spawn.setVariable('THE_VARIABLE')
// password will now be looked into process.env['THE_VARIABLE']
```
