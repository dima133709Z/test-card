import { UserList } from './UserList';

export class App {
    constructor() {
        this.userList = null;
        this.userContainer = document.getElementById('user-container');
        this.searchInput = document.getElementById('search-input');
        this.init();
    }

    async fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        this.userList = new UserList(users);
    }

    addEventListeners() {
        this.searchInput.addEventListener('input', (e) => {
            const searchValue = e.target.value;
            this.userList.render(this.userContainer, searchValue);
        });
    }

    async init() {
        await this.fetchUsers();
        this.userList.render(this.userContainer);
        this.addEventListeners();
    }
}

const app = new App();
