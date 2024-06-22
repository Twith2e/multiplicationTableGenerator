function showTable() {
  startInput = document.getElementById("start");
  endInput = document.getElementById("end");
  displayNum = document.getElementById("show-multiples");
  displayNum.innerHTML = "";
  myHead = document.getElementById("head");
  myHead.style.display = "none";
  document.getElementById("error-messages1").innerText = "";
  document.getElementById("error-messages2").innerText = "";

  if (startInput.value != "" && endInput.value != "") {
    if (endInput.value > startInput.value) {
      myHead = document.getElementById("head");
      myHead.style.display = "block";
      myHead.innerHTML = `${startInput.value} to ${endInput.value} multiples table`;
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
      startInput.style.borderColor = "green";
      endInput.style.borderColor = "green";
      document.querySelector(".error-msg").style.display = "none";
    } else if (endInput.value === startInput.value) {
      myHead = document.getElementById("head");
      myHead.style.display = "block";
      myHead.innerHTML = `${startInput.value} multiples table`;
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
      endInput.style.borderColor = "green";
      startInput.style.borderColor = "green";
      document.querySelector(".error-msg").style.display = "none";
    } else {
      document.querySelector(".error-msg").style.display = "block";
      startInput.style.borderColor = "green";
      endInput.style.borderColor = "red";
      myHead.style.display = "none";
    }
  } else {
    document.getElementById("error-messages1").innerText = "Fill the inputs!!!";
    document.getElementById("error-messages2").innerText = "Fill the inputs!!!";
    startInput.style.borderColor = "red";
    endInput.style.borderColor = "red";
    // alert("Input Fields are empty!!!");
    myHead.style.display = "none";
  }
}
