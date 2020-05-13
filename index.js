const singleLevelRegex = /\[([\w\d_-]+)\]/g;
const multiLevelNamedRegex = /\[\.\.\.([\w\d_-]+)\]$/g;
const multiLevelRegex = /\[\.\.\.\]$/g;

module.exports.fromNextToExpressRoute = (route) => {
  let result = route;
  let previousResult;

  do {
    previousResult = result;

    if (result.match(singleLevelRegex)) {
      result = result.replace(singleLevelRegex, ':$1');
    } else if (result.match(multiLevelNamedRegex)) {
      result = result.replace(multiLevelNamedRegex, '*');
    } else if (result.match(multiLevelRegex)) {
      result = result.replace(multiLevelRegex, '*');
    }
  } while (result !== previousResult);

  return result;
};
