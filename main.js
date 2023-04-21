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

}

class ProjectsService extends Service {
    constructor(url) {
        super(url);
    }
}

const projectsService = new ProjectsService("https://learning-server.onrender.com/projects");

projectsService.getRequest().then((data) => console.log(data, "get projects"));
projectsService.postRequest({
    name: "new project",
    duration: "365",
    users: ["6436d11379dd2d6c7835e6a0"],
}).then((data) => console.log(data, "created project"));
