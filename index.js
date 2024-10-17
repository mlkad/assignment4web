//1
document.querySelector(".btn-bg").onclick = function () {
  const color = document.querySelector("body").style.background;
  if (color === "#ff9dc1" || color === "rgb(255, 157, 193)") {
    document.querySelector("body").style.background = "#5bb0e8";
  } else {
    document.querySelector("body").style.background = "#ff9dc1";
  }
};
//2
document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim(); 

  if (taskText === '') {
      alert('You must type something');
      return;
  }

  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');

  listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete">Delete</button>
  `;


  listItem.querySelector('span').addEventListener('click', function() {
      listItem.classList.toggle('completed');
  });


  listItem.querySelector('.delete').addEventListener('click', function() {
      taskList.removeChild(listItem);
  });

  taskList.appendChild(listItem);
  taskInput.value = ''; 
});

//3
document.querySelector("#sortAsceding").onclick = () => {
  let data = document.querySelector("#inputData").value.split(",").map(Number);
  document.querySelector("#sortedInput").textContent = data
    .sort((a, b) => a - b)
    .join(" ");
};

document.querySelector("#sortDescending").onclick = () => {
  let data = document.querySelector("#inputData").value.split(",").map(Number);
  document.querySelector("#sortedInput").textContent = data
    .sort((a, b) => b - a)
    .join(" ");
};
//4
function calculate(operations) {
  const num1 = +document.getElementById("num1").value;
  const num2 = +document.getElementById("num2").value;
  let result;

  switch (operations) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    case "**":
      result = num1 ** num2;
      break;
    case "%":
      result = num1 % num2;
      break;
  }

  document.getElementById("res").innerText = result;
}

//5
function calculateTax() {
  let price = +document.querySelector("#inputTax").value;
  let tax;
  if (price >= 10000) {
    tax = "25%";
  } if (price < 10000 && price >= 5000) {
    tax = "20%";
  } if ( price < 5000) {
    tax = '15%';
  }
  document.getElementById("tax").textContent = tax;
}
