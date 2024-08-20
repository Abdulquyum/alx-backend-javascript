export default function hasValuesFromArray(set, array) {
  const hasvalue = array.every((value) => set.has(value));
  return hasvalue;
}
