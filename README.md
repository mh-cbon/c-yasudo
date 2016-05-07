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
var yasudo = require('@mh-cbon/c-yasudo');
var spawn = yasudo.spawn;
// but you can configure it
yasudo.setVariable('THE_VARIABLE')
// password will now be looked into process.env['THE_VARIABLE']
```
