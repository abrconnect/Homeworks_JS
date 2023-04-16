// 1. Додати свій сервіс, аналогічно
// до нашого підходу (https://jsonplaceholder.typicode.com/todos)

// Код з уроку (рішення нижче)

class Service {
    static headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    constructor(url) {
        this.url = url;
    }

    async getRequest() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }

    async postRequest(data) {
        const response = await fetch(this.url, {
            headers: Service.headers,
            method: "POST",
            body: JSON.stringify(data),
        });

        const payload = await response.json();
        return payload;
    }

    async patchRequest(id, data) {
        const response = await fetch(`${this.url}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
        const payload = await response.json();
        return payload;
    }

    async deleteRequest(id) {
        const response = await fetch(`${this.url}/${id}`, {
            method: "DELETE",
        });

        const payload = await response.json();
        return payload;
    }
}

// ***** Рішення *****

class NewService extends Service {
    constructor(url) {
        super(url);
    }
}

const newService = new NewService("https://jsonplaceholder.typicode.com/todos");

newService.getRequest().then((data) => console.log(data));



// 2. Змініть метод patchRequest класу Service так *****
// щоб він міг робити як PATCH так і PUT запити *****

// async patchRequest(id, data) {
//         const response = await fetch(`${this.url}/${id}`, {
//             method: "PATCH",
//             body: JSON.stringify(data),
//         });
// const payload = await response.json();
// return payload;
//     }

// ***** Рішення *****

// class Service {
//     static headers = {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     };

//     constructor(url) {
//         this.url = url;
//     }

//     async patchRequest(id, data, method = "PATCH") {
//         const response = await fetch(`${this.url}/${id}`, {
//             method: method,
//             body: JSON.stringify(data),
//         });

//         const payload = await response.json();
//         return payload;
//     }
// }

// У разі необхідності використання PUT запиту, необхідно передати параметр method зі значенням
// "PUT" (приклад нижче), в інакшому випадку за замовчуванням вказано PATCH, то буде викорнуватись запит типу PATCH
// const putResponse = await service.patchRequest(111, { title: "title" }, "PUT");