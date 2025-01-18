export default function cleanSet(set, startString) {
    const result = Array.from(set)
    .filter(x => x.startsWith(startString))
    .map(x => x.slice(startString.length))
    .join('-')

    return result;
}
