const contacts = [
    { name: "John Smith", phone: "050-1111111", email: "john@example.com" },
    { name: "Sarah Williams", phone: "052-2222222", email: "sarah@example.com" },
    { name: "Michael Johnson", phone: "053-3333333", email: "michael@example.com" }
];

const list = document.getElementById("contactList");
const popup = document.getElementById("popup");
const popupName = document.getElementById("popup-name");
const popupPhone = document.getElementById("popup-phone");
const popupEmail = document.getElementById("popup-email");

contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.textContent = contact.name;
    li.dataset.index = index;
    list.appendChild(li);
});

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        const index = e.target.dataset.index;
        const contact = contacts[index];
        popupName.textContent = contact.name;
        popupPhone.textContent = contact.phone;
        popupEmail.textContent = contact.email;
        popup.style.display = "flex";
    }
});

function closePopup() {
    popup.style.display = "none";
}

popup.addEventListener("click", function (e) {
    if (e.target === popup) {
        closePopup();
    }
});
