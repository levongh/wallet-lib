/**
 *
 * @param {object} obj
 * @param {string} methodName
 * @return {boolean}
 */
function hasMethod(obj, methodName) {
  return typeof obj[methodName] === 'function';
}
module.exports = hasMethod;
