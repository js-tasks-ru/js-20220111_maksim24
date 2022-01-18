/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const compare = (a, b) => a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});

  if (param === "asc") {
    return [...arr].sort((a, b) => compare(a, b));
  } else if (param === "desc") {
    return [...arr].sort((a, b) => compare(b, a));
  }
}
