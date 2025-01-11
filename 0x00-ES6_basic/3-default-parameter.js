export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
    expansion1989 === undefined ? expansion1989 = 89 : expansion1989;
    expansion2019 === undefined ? expansion2019 = 19 : expansion2019;

    return initialNumber + expansion1989 + expansion2019;
}
