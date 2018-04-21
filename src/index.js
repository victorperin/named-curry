const R = require('ramda');

const namedParametersFunctionCurry = (expected, namedParametersFunction, acc={}) => paramsObj => {
  const given = R.keys(paramsObj)
  const suited = R.intersection(given, expected)
  const $acc = R.merge(acc, R.pick(suited, paramsObj))

  return R.equals( suited.sort(), expected.sort() )
    ? namedParametersFunction($acc)
    : namedParametersFunctionCurry(R.difference(expected, given), namedParametersFunction, $acc)
}

const params = R.compose(
  R.match(/([^\s,]+)/g),
  s => s.slice(
    s.indexOf('(') + 1,
    s.indexOf(')')
  ),
  R.toString
)

const parametersToNamedFunction = ppf => nps => ppf.apply(null, params(ppf).map(p => nps[p]))

const parametersToNamedFunctionAndCurry = ppf => namedParametersFunctionCurry(params(ppf), parametersToNamedFunction(ppf))

module.exports = (head, ...tail) =>
  ( head instanceof Array ) ?
    namedParametersFunctionCurry(head, ...tail) :
    parametersToNamedFunctionAndCurry(head, ...tail)
