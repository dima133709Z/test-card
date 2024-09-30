import { User } from './User';

export class UserList {
    constructor(users) {
        this.users = users.map(userData => new User(userData));
    }

    filterUsers(filterValue) {
        return this.users.filter(user => {
            return (
                user.name.toLowerCase().includes(filterValue) ||
                user.username.toLowerCase().includes(filterValue) ||
                user.email.toLowerCase().includes(filterValue) ||
                user.phone.toLowerCase().includes(filterValue) ||
                user.website.toLowerCase().includes(filterValue) ||
                user.address.toLowerCase().includes(filterValue) ||
                user.company.toLowerCase().includes(filterValue)
            );
        });
    }

    render(container, filter = '') {
        container.innerHTML = ''; // Clear the container
        const filteredUsers = filter ? this.filterUsers(filter.toLowerCase()) : this.users;

        filteredUsers.forEach(user => {
            const card = user.createCard();
            container.appendChild(card);
        });
    }
}
