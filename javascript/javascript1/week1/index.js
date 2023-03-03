// My freecodecamp profile
https://www.freecodecamp.org/Hanna_Hrubyk

// Age-ify (A future age calculator

const yearOfBirth = 1981;
const yearFuture = 2050;
const age = yearFuture - yearOfBirth;

console.log('You will be ' + age + ' years old in ' + yearFuture);


// Goodboy-Oldboy (A dog age calculator) 

const dogYearOfBirth = 2020;
const dogYearFuture = 2050;
const dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true

if (shouldShowResultInDogYears) {
    console.log('Your dog will be ' + dogYear * 7 + ' dog years old in ' + dogYearFuture);
}
else {
    console.log('Your dog will be ' + dogYear + ' human years old in ' + dogYearFuture);
}
