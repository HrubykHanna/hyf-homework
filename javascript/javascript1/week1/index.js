// My freecodecamp profile
//https://www.freecodecamp.org/Hanna_Hrubyk

// Age-ify (A future age calculator

const yearOfBirth = 1981;
const yearFuture = 2050;
const age = yearFuture - yearOfBirth;

console.log('You will be ' + age + ' years old in ' + yearFuture);


// Goodboy-Oldboy (A dog age calculator) 

const dogYearOfBirth = 2020;
const dogYearFuture = 2050;
const dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log('Your dog will be ' + dogYear * 7 + ' dog years old in ' + dogYearFuture);
}
else {
    console.log('Your dog will be ' + dogYear + ' human years old in ' + dogYearFuture);
}

//Housey pricey (A house price estimator)


// Peter Hous

const petersWide = 8;
const petersDeep = 10;
const petersHigh = 10;
const peterGardenSizeInM2 = 100;

const volumeInMeters = petersWide * petersDeep * petersHigh;
const housePrice = volumeInMeters * 2.5 * 1000 + peterGardenSizeInM2 * 300;

const peterHousCost = 2500000;

if (housePrice < peterHousCost) {
    console.log('Peter will pay too little');
} else {
    console.log('Peter will pay too much');
}



// Julia Hous

const juliasWide = 5;
const juliasDeep = 11;
const juliasHigh = 8;
const juliasGardenSizeInM2 = 70;

const volumeInMeters2 = juliasWide * juliasDeep * juliasHigh;
const housePrice2 = volumeInMeters * 2.5 * 1000 + juliasGardenSizeInM2 * 300;

const juliasHousCost = 1000000;

if (housePrice < juliasHousCost)
    console.log('julia will pay too little');
else (housePrice > juliasHousCost)
console.log('Julia will pay too much');