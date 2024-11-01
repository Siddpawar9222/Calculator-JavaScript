window.onload = () => {
  const input = document.getElementById("input");
  const buttons = document.querySelectorAll(".button");

  let string = "";
  let arr = Array.from(buttons);
  console.log(arr);

  arr.forEach((buttons) => {
    buttons.addEventListener("click", (event) => {
      if (event.target.innerHTML == "=") {
        string = eval(string);
        console.log(string);
        input.value = string;
      } else if (event.target.innerHTML == "AC") {
        string = "";
        input.value = string;
      } else if (event.target.innerHTML == "DEL") {
        string = string.substring(0, string.length - 1);
        input.value = string;
      } else {
        string += event.target.innerHTML;
        input.value = string;
      }
    });
  });
};
