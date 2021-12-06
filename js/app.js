function getDigits(number) {
  const secondDigit = number % 10;
  const firstDigit = (number - secondDigit) / 10;
  return [firstDigit, secondDigit];
}

function updateTime (type, digits) {
  const [clockDigitOne, clockDigitTwo] = document.getElementsByClassName(type);
  clockDigitOne.src = `./images/img_${digits[0]}.png`;
  clockDigitTwo.src = `./images/img_${digits[1]}.png`;
}

function timer (hour, min, sec) {
  setInterval(() => {
    
  }
  , 1000)
}

function currentTime () {
  let date = new Date ();
  let hour = date.getHours();
  hour = getDigits(hour);
  let min = date.getMinutes();
  min = getDigits(min);
  let sec = date.getSeconds();
  sec = getDigits(sec);

  updateTime('hour', hour);
  updateTime('min', min);
  updateTime('sec', sec);
}
currentTime();

