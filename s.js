const container = document.querySelector(".container");
container.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye");
  [].forEach.call(eyes, function (eye) {
    let mouseX = eye.getBoundingClientRect().right;
    if (eye.classList.contains("eye-left")) {
      mouseX = eye.getBoundingClientRect().left;
    }
    let mouseY = eye.getBoundingClientRect().top;
    let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
    eye.style.transform = `rotate(${rotationDegrees}deg)`;
  });
});