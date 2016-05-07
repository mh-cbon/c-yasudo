
var yasudo = require('@mh-cbon/yasudo');

var pwdVariable = 'yasudo';

var cYasudo = function (bin, args, opts) {
  opts = opts || {}
  if (!opts.password && (pwdVariable in process.env))
    opts.password = process.env[pwdVariable];
  return yasudo(bin, args, opts)
}
cYasudo.setVariable = function (variable) {
  pwdVariable = variable;
};

module.exports = cYasudo;
