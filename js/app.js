function getDigits(number) {
  const secondDigit = number % 10;
  const firstDigit = (number - secondDigit) / 10;
  return [firstDigit, secondDigit];
}

function updateTime (type, number) {
  const digits = getDigits (number);
  const [clockDigitOne, clockDigitTwo] = document.getElementsByClassName(type);
  clockDigitOne.src = `./images/img_${digits[0]}.png`;
  clockDigitTwo.src = `./images/img_${digits[1]}.png`;
}

function timer (hour, min, sec) {
  setInterval(() => {
    ++sec;
    if (sec === 60) {
      ++min;
      sec = 0;
    }

    if (min === 60) {
      ++hour;
      min = 0;
    }

    if (hour === 24) {
      hour = 0;
    }

    updateTime('hour', hour);
    updateTime('min', min);
    updateTime('sec', sec);
  }, 1000);
}

function currentTime () {
  const date = new Date ();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  
  updateTime('hour', hour);
  updateTime('min', min);
  updateTime('sec', sec);
  timer(hour, min, sec);
}
currentTime();

