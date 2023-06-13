// let user = {
//   name: "",
//   email: "",
//   password: ""
// };

const { response } = require("express");

// document.getElementById("registrationForm").addEventListener("submit", function (event) {
//   event.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   // Validate and store user data
//   if (name && email && password) {
//     user.name = name;
//     user.email = email;
//     user.password = password;
//     document.getElementById("username").textContent = user.name;
//     document.getElementById("registrationForm").reset();
//   }
// });

// // Task creation
// document.getElementById("createButton").addEventListener("click", function () {
//   const taskInput = document.getElementById("taskInput");
//   const task = taskInput.value;

//   if (task) {
//     const taskItem = document.createElement("li");
//     taskItem.textContent = task;
//     document.getElementById("tasks").appendChild(taskItem);
//     taskInput.value = "";
//   }
// });

// document.getElementById("tasks").addEventListener("click", function (event) {
//   if (event.target.tagName === "li") {
//     event.target.remove();
//   }
// });

// document.getElementById("tasks").addEventListener("dblclick", function (event) {
//   if (event.target.tagName === "li") {
//     const newText = prompt("Edit task", event.target.textContent);
//     if (newText) {
//       event.target.textContent = newText;
//     }
//   }
// });





document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

})
const newUser = ({
    name, email, password
})

axios.get("https://crudcrud.com/api/40a51690b1814e21b4f2af358b953fbc/user", newUser)
    .then((res) => {
        console.log(res)
        for (var i = 0; i < response.data.length; i++) {
            getUser(response.data[i])
        }
    })
    .catch((error) => {

    })

function getUser() {
    axios.get("https://crudcrud.com/api/40a51690b1814e21b4f2af358b953fbc/user")
        .then((res) => {
            // const user = document.createElement("li")
            const userArr = res.data
            userArr.map((user) => {
                const li = document.createElement("li")
                li.innerText = user.name
                document.getElementById("user").appendChild(li)
            })
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

