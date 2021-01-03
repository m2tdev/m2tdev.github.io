window.onload = () => {
  const hourHand = document.querySelector('.hour-hand');
  const minHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minDegrees = (minutes / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours() % 12;
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval(() => {
    setDate();
  }, 1000);
};
