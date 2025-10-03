console.log("#".repeat(30));
console.log(
  "%cFunction_And_Scopes|Challenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

//  Assighnment_1

console.log("#".repeat(30));
console.log(
  "%cFunction_And_Scopes|Assighnment_1",
  "color: #9c27b0; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

function getDetails1(zName1, zAge1, zCountry1) {
  function namePattern(zName1) {
    // zName1 = zName1.split(" ");
    return `${zName1.split(" ")[0]} ${zName1
      .split(" ")[1][0]
      .toLocaleUpperCase()}.`;
    // console.log(`${zName1}.`);
  }
  namePattern(zName1);
  function ageWithMessage(zAge1) {
    return `Your Age Is ${zAge1.slice(0, 2)}`;
  }
  ageWithMessage(zAge1);
  function countryTwoLetters(zCountry1) {
    return `You Live In ${zCountry1.slice(0, 2).toLocaleUpperCase()}`;
  }
  countryTwoLetters(zCountry1);
  function fullDetails1() {
    return `Hello ${namePattern(zName1)}, ${ageWithMessage(
      zAge1
    )}, ${countryTwoLetters(zCountry1)}`;
  }
  return fullDetails1(); // Do Not Edit This
}

console.log(getDetails1("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails1("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//  Assighnment_2

console.log("#".repeat(30));
console.log(
  "%cFunction_And_Scopes|Assighnment_2",
  "color: #9c27b0; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let itsMe2 = () => `Iam A Normal Function`;

console.log(itsMe2()); // Iam A Normal Function

urlCreate2 = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate2("https", "elzero", "org")); // https://www.elzero.org

//  Assighnment_3

console.log("#".repeat(30));
console.log(
  "%cFunction_And_Scopes|Assighnment_3",
  "color: #9c27b0; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let checker3 = (zName3) => (status3) => (salary3) => {
  return status3 === "Available"
    ? `${zName3}, My Salary Is ${salary3}`
    : `Iam Not Avaialble`;
};

console.log(checker3("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker3("Ahmed")("Not Available")()); // Iam Not Avaialble

//  Assighnment_4

console.log("#".repeat(30));
console.log(
  "%cFunction_And_Scopes|Assighnment_4",
  "color: #9c27b0; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

function specialMix4(...data4) {
  let sum = 0;
  for (let i4 = 0; i4 < data4.length; i4++) {
    if (isNaN(parseInt(data4[i4])) === true) {
      continue;
    }
    sum += parseInt(data4[i4]);
  }
  if (sum === 0) {
    return `All Is Strings`;
  }
  return sum;
}

console.log(specialMix4(10, 20, 30)); // 60
console.log(specialMix4("10Test", "Testing", "20Cool")); // 30
console.log(specialMix4("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix4("Test", "Cool", "Test")); // All Is Strings

//  Challenge_1

console.log("#".repeat(30));
console.log(
  "%cFunction_And_Scopes|Challenge_1",
  "color: #03a9f4; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let names = function (...na) {
  let st = [];
  function x(...na) {
    for (let i = 0; i < na.length; i++) {
      st = st.concat(`[${na[i]}]`);
    }
    return st.join(", ");
  }
  x(...na);
  return `String ${st} => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ebrahim"));

//  Challenge_2

console.log("#".repeat(30));
console.log(
  "%cFunction_And_Scopes|Challenge_2",
  "color: #03a9f4; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + Number(nums);

// Regular Function

// function calc(one, two, ...nums) {
//   return one + two + Number(nums);
// }

console.log(calc(10, myNumbers[0], myNumbers[1]));
