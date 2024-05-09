document.querySelector("#backspace").addEventListener("click", function () {
  document.getElementById("display").value = document
    .getElementById("display")
    .value.slice(0, -1);
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.value !== "=" && this.value !== "C" && this.value !== "D") {
      document.getElementById("display").value += this.value;
    }
  });
});
