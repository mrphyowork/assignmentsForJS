function calculateAns() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  let ans = 0;

  let optr = document.getElementById("optr").value;
  console.log(optr, typeof optr);

  switch (optr) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
  }
  console.log(num1, typeof num1);
  console.log(num2, typeof num2);
  console.log(ans, typeof ans);
  document.getElementById("result").value = ans;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  calculateAns();
});
