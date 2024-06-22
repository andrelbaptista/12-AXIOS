"use strict";

// 
// instalação
// 
console.log(axios);

// primeiro request
const getData = async () => {
    try {
        const response = await postFetch.get("/users",
            // definindo header json, no caso de Axios o default e json
            {
                headers: {
                    "Content-Type": "application/json",
                    custom: "header",
                },
            }
        );
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
    }
};
getData()

// imprimindo os dados na tela

// elements
const container = document.querySelector("#users-container");

// functions
const printData = async () => {
    const data = await getData();
    console.log(data)
    data.forEach((users) => {
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");
        nameElement.textContent = users.name;
        div.appendChild(nameElement);
        const userAddress = document.createElement("p");
        userAddress.textContent = users.address.city;
        div.appendChild(userAddress);
        container.appendChild(div);
    });
}

printData();


// post

// Elemets
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

//  Event
form.addEventListener("submit", (e) => {
    e.preventDefault();
    postFetch.post("/posts", {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1,
    });
});