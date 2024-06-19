function showTable() {
  startInput = document.getElementById("start");
  endInput = document.getElementById("end");
  displayNum = document.getElementById("show-multiples");
  displayNum.innerHTML = "";

  if (startInput.value != "" && endInput.value != "") {
    if (endInput.value >= startInput.value) {
      myHead = document.getElementById("head");
      myHead.style.display = "block";
      firstNum = document.getElementById("first-num");
      firstNum.innerHTML = startInput.value;
      secondNum = document.getElementById("second-num");
      secondNum.innerHTML = endInput.value;
      for (
        begin = Number(startInput.value);
        begin <= Number(endInput.value);
        begin++
      ) {
        numDiv = document.createElement("div");
        for (i = 1; i <= 12; i++) {
          numDiv.innerHTML += `<p>${begin} x ${i} = ${begin * i}</p>`;
        }
        displayNum.appendChild(numDiv);
      }
      startInput.value = "";
      endInput.value = "";
    } else {
      alert("The second value has to higher than the first value");
      myHead.style.display = "none";
    }
  } else {
    alert("Kindly check the input fields again");
    myHead.style.display = "none";
  }
}
