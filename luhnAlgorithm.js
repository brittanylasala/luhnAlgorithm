let check = function(num) {
  num = num.toString();
  toSum = 0;
  for (i = 0; i < num.length ; i++) {
    if ((num.length - Number(i)) % 2 !== 0) {
      toSum += Number(num[i]);
    } else {
      if (Number(num[i]) * 2 > 9) {
        numString = (Number(num[i]) * 2).toString();
        toSum += Number(numString[0]) + Number(numString[1]);
      } else {
        toSum += Number(num[i]) * 2;
      };
    };
  };
  return toSum % 10 === 0;
};

module.exports = check;