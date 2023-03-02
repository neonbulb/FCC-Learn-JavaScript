function convertToRoman(num) {
 
  let romanNumeral = "";
  const romanArabic = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];

  romanArabic.forEach(pair => {
    romanNumeral += pair[0].repeat(Math.floor(num / pair[1]));
    num = num % pair[1];
  });
  
 return romanNumeral;
}

console.log(convertToRoman(891));