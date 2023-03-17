const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const cityInput = document.querySelector("#city");
const createButton = document.querySelector("#create");
const usersSection = document.querySelector("#users-section");
const searchInput = document.querySelector("#search");
const sortByAge = document.querySelector("#sort-by-age");


let users = [
    { name: "Igor", city: "Kyiv", age: 20 },
    { name: "Alex", city: "Kyiv", age: 50 },
    { name: "Oleg", city: "Kyiv", age: 10 },
    { name: "Alex", city: "Kyiv", age: 70 },
    { name: "Oleg", city: "Kyiv", age: 50 },
    { name: "Alex", city: "Kyiv", age: 50 },
    { name: "Oleg", city: "Kyiv", age: 10 },
];

renderUsers(users);

searchInput.oninput = (event) => {
    if (!event.target.value) return renderUsers();

    const usersToRender = users.filter(({ name, age, city }) =>
        [name, age.toString(), city].some((element) =>
            element.includes(event.target.value)
        )
    );

    renderUsers(usersToRender);
};

const deleteUser = (indexOfUser) => {
    users = users.filter((el, i) => i !== indexOfUser);
    renderUsers(users);
};

function renderUsers(usersToRender) {
    usersSection.innerHTML = "";

    const usersContent = usersToRender.map(
        (user) => `<div class="user-card">
        <p>${user.name}</p>
        <p>${user.city}</p>
        <span>${user.age}</span>
        <button class="delete-user-button">Delete</button>
    </div>`
    );

    usersContent.forEach((userLayout) => {
        usersSection.innerHTML += userLayout;
    });

    const deleteButtons = [...document.querySelectorAll(".delete-user-button")];

    deleteButtons.forEach((button, i) => {
        button.onclick = () => deleteUser(i);
    });
}

let startingOrder = [...users];


sortByAge.onclick = () => {
    if (sortByAge.checked) {
        users.sort((user1, user2) => user1.age - user2.age);
    }
    else {
        users = [...startingOrder]
    }
    renderUsers(users);
};


createButton.onclick = () => {
    const name = nameInput.value;
    const age = +ageInput.value;
    const city = cityInput.value;

    const user = { name: name, age: age, city: city };

    users.push(user);

    nameInput.value = "";
    ageInput.value = "";
    cityInput.value = "";

    renderUsers(users);
};



