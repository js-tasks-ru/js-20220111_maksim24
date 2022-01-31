/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path = "") {
  return (object) => {
    const propsArray = path.split('.');

    let result = object;

    for (let prop of propsArray) {
      if (typeof result === "object") {
        result = result[prop];
      } else {
        break;
      }
    }

    return result;
  };
}
