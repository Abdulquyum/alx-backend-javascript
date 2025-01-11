import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeinDollars(fullBudget.income));
console.log(fullBudget.getIncomeinEuros(fullBudget.income));
