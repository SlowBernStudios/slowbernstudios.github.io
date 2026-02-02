(() => {
  const targetUrl = "https://slowbern.dev/";
  const secondsTotal = 10;
  let secondsLeft = secondsTotal;
  const button = document.querySelector("[data-redirect]");
  const label = document.querySelector("[data-countdown]");

  if (label) {
    label.textContent = String(secondsLeft);
  }

  const timerId = window.setInterval(() => {
    secondsLeft -= 1;
    if (label) {
      label.textContent = String(secondsLeft);
    }
    if (secondsLeft <= 0) {
      window.clearInterval(timerId);
      window.location.replace(targetUrl);
    }
  }, 1000);

  if (button) {
    button.addEventListener("click", () => {
      window.clearInterval(timerId);
    });
  }
})();
