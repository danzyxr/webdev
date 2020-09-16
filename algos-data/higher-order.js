const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2003
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// For loop

for (let i = 0; i < companies.length; i++) {
  console.log(companies[i].name);
}

// Looping w/ forEach()

companies.forEach(function (i) {
  console.log(i.name);
});

let under_18 = [];

// Fill an array with minors w/ for...of

for (const age of ages) {
  if (age < 18) under_18.push(age);
}

console.log(`\nAges under 18: ${under_18}`);

// Filter drinking/smoking ages w/ filter()

const canDrink = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

console.log(`\nThese ages can drink: ${canDrink}`);

const canSmoke = ages.filter((age) => age >= 18); // ES6
console.log(`\nThese ages can smoke: ${canSmoke}`);

// Filter company objects by certain properties or bounds

const retailCompanies = companies.filter(function (co) {
  if (co.category === "Retail") {
    return true;
  }
});

console.log("\nFiltered by retail:\n", retailCompanies);

const financeCompanies = companies.filter((co) => co.category === "Finance");
console.log("\nFiltered by finance:\n", financeCompanies);

const eightiesCompanies = companies.filter((co) => co.start >= 1980 && co.end <= 1989);
console.log("\nFiltered by 1980-89:\n", eightiesCompanies);

const lastedTenYears = companies.filter((co) => co.end - co.start >= 10);
console.log("\nLasted >= 10 years:\n", lastedTenYears);

// M A P S !!

// Create array of company names, dates, etc.

const companyDates = companies.map(function (co) {
  return `${co.name}: ${co.start} - ${co.end}`;
});

console.log("\nMapped by dates:\n", companyDates);

const companyTypes = companies.map((co) => `${co.name}: ${co.category}`);
console.log("\nMapped by types:\n", companyTypes);

const ageMap = ages.map((age) => Math.pow(age, 2)).map((age) => Math.sqrt(age));
console.log("\nCustom age map:\n", ageMap);

// S O R T !!

const agesAsc = ages.sort((a, b) => a - b);
// const agesAsc = ages.sort((a, b) => (a > b ? 1 : -1));
console.log("\nAges sorted ascending:\n", agesAsc);

const agesDesc = ages.sort((a, b) => b - a);
// const agesDesc = ages.sort((a, b) => (a < b ? 1 : -1));
console.log("\nAges sorted descending:\n", agesDesc);

const sortCompanies = companies.sort(function (co_1, co_2) {
  if (co_1.start > co_2.start) return 1;
  else return -1;
});

console.log("\nSorted by start date:\n", sortCompanies);

// R E D U C E ?!

// Sum array elements

let agesSum = 0;
ages.forEach((age) => {
  agesSum += age;
});

console.log(`\nSum of ages: ${agesSum}`);

// Sum array elements w/ reduce()

const agesTotal = ages.reduce(function (total, age) {
  return total + age;
}, 0);

console.log(`\nNow w/ reduce(): ${agesTotal}`);

const agesES6 = ages.reduce((total, age) => total + age, 0);
console.log(`\nNow w/ ES6: ${agesES6}`);

const totalYears = companies.reduce(function (total, co) {
  return total + (co.end - co.start);
}, 0);

console.log(`\nTotal company years: ${totalYears}`);

const totalYearsES6 = companies.reduce((total, co) => total + (co.end - co.start), 0);
console.log(`\nTotal company years w/ ES6: ${totalYearsES6}`);

// C O M B I N E D !?!?

const combined = ages
  .sort((a, b) => a - b)
  .filter((age) => age >= 18)
  .map((age) => age + 50)
  .reduce((total, age) => total + age, 0);

console.log(`\nPutting it all together: ${combined}`);
