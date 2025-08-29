

let userName = "Keith";
let userAge = 20;

if (userAge < 18) {
  console.log("You are under 18.");
} else {
  console.log("You are 18 or older.");
}

function sayHello(name) {
  console.log("Hello, " + name + "!");
}

function multiply(a, b) {
  console.log("Result is:", a * b);
}

sayHello(userName);
multiply(3, 5);

for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count = count - 1;
}

let output = document.getElementById("output");
output.textContent = "Welcome, " + userName + "!";

let button = document.getElementById("toggleBtn");
button.addEventListener("click", function () {
  output.textContent = "You clicked the button!";
});

let listButton = document.getElementById("generateListBtn");
listButton.addEventListener("click", function () {
  let items = ["Apples", "Oranges", "Bananas"];
  let listHTML = "<ul>";
  for (let i = 0; i < items.length; i++) {
    listHTML += "<li>" + items[i] + "</li>";
  }
  listHTML += "</ul>";
  output.innerHTML = listHTML;
});
