function telephoneCheck(str) {
  
  const phonePatterns = [/\d{3}-\d{3}-\d{4}$/,
                         /[(]\d{3}[)]\d{3}-\d{4}$/,
                         /[(]\d{3}[)] \d{3}-\d{4}$/,
                         /\d{3} \d{3} \d{4}$/,
                         /\d{10}$/];
  const areaCodeUS = /^(1|1 )?$/;

  for (let i = 0; i < phonePatterns.length; i++) {
    const pattern = phonePatterns[i];
    if (str.match(pattern)) {
      str = str.replace(pattern, "");
      return areaCodeUS.test(str);
    }
  }

  return false;
}

console.log(telephoneCheck("333-333-3333"));