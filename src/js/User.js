export class User {
    constructor({ id, name, username, email, phone, website, address, company }) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = `${address.street}, ${address.city}, ${address.zipcode}`;
        this.company = company.name;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('user-card');

        card.innerHTML = `
      <h3>${this.name} (${this.username})</h3>
      <p><strong>Email:</strong> ${this.email}</p>
      <p><strong>Phone:</strong> ${this.phone}</p>
      <p><strong>Website:</strong> ${this.website}</p>
      <p><strong>Address:</strong> ${this.address}</p>
      <p><strong>Company:</strong> ${this.company}</p>
    `;

        return card;
    }
}
