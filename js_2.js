const contacts = [
  { name: "John", phone: "050-1111111", email: "john@example.com", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Sarah", phone: "052-2222222", email: "sarah@example.com", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Michael", phone: "053-3333333", email: "michael@example.com", image: "https://randomuser.me/api/portraits/men/3.jpg" }
];

function displayContacts() {
  const container = document.getElementById("contacts-list");
  container.innerHTML = "";

  contacts.forEach((contact, index) => {
    const card = document.createElement("div");
    card.className = "contact-card";
    card.innerHTML = `
      <img src="${contact.image}" alt="${contact.name}" class="contact-img" />
      <h3>${contact.name}</h3>
      <p>Phone: ${contact.phone}</p>
      <p>Email: ${contact.email}</p>
      <button class="edit-btn" onclick="editContact(${index})">Edit</button>
      <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
    `;
    container.appendChild(card);
  });
}

function editContact(index) {
  const newName = prompt("Enter new name:", contacts[index].name);
  const newPhone = prompt("Enter new phone:", contacts[index].phone);
  const newEmail = prompt("Enter new email:", contacts[index].email);

  if (newName && newPhone && newEmail) {
    contacts[index].name = newName;
    contacts[index].phone = newPhone;
    contacts[index].email = newEmail;
    displayContacts();
  }
}

function deleteContact(index) {
  if (confirm("Are you sure you want to delete " + contacts[index].name + "?")) {
    contacts.splice(index, 1);
    displayContacts();
  }
}

function clearContacts() {
  if (confirm("Are you sure you want to clear all contacts?")) {
    contacts.length = 0;
    displayContacts();
  }
}

function showAnimation() {
  alert("Animation button clicked! (يمكنك لاحقًا إضافة حركة حقيقية)");
}

displayContacts();
