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

    async patchRequest(id, data, method = "PATCH") {
        console.log(method, "METHOD");
        const response = await fetch(`${this.url}/${id}`, {
            headers: Service.headers,
            method,
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

// Рішення 

class NewService extends Service {
    constructor(url) {
        super(url);
    }
}

const newService = new NewService("https://jsonplaceholder.typicode.com/todos");

newService.getRequest().then((data) => console.log(data));

