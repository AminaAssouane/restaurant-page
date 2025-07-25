const content = document.getElementById("content");

function createTitle1() {
  let title1 = document.createElement("div");
  title1.classList.add("title1");
  title1.innerText = "Contact";
  return title1;
}

function createLight() {
  let light = document.createElement("div");
  light.classList = "light";
  return light;
}

function createTitle3(name) {
  let title3 = document.createElement("div");
  title3.classList.add("title3");
  title3.innerText = name;
  return title3;
}

function createContactItem(name, profession, number, email) {
  let contactItem = createLight();

  let contactName = createTitle3(name);

  let contactProfession = document.createElement("p");
  contactProfession.innerText = profession;

  let contactNumber = document.createElement("p");
  contactNumber.innerText = number;

  let contactEmail = document.createElement("p");
  contactEmail.innerText = email;

  contactItem.appendChild(contactName);
  contactItem.appendChild(contactProfession);
  contactItem.appendChild(contactNumber);
  contactItem.appendChild(contactEmail);

  return contactItem;
}

function createContactsList() {
  const contacts = document.createElement("div");
  contacts.classList.add("contactsList");

  // Creating the contact items
  let contact1 = createContactItem(
    "The Elder",
    "Manager",
    "00 000 000",
    "theelder@fantasia.com"
  );

  let contact2 = createContactItem(
    "The Sorceress",
    "Chef",
    "13 133 133",
    "thesorceress@fantasia.com"
  );

  let contact3 = createContactItem(
    "The Pixie",
    "Waitress",
    "123 456 789",
    "thepixie@fantasia.com"
  );

  contacts.appendChild(contact1);
  contacts.appendChild(contact2);
  contacts.appendChild(contact3);
  return contacts;
}

function createContactPage() {
  const title1 = createTitle1();
  const contactsList = createContactsList();

  const section = document.createElement("section");
  section.classList.add("contacts");

  section.appendChild(title1);
  section.appendChild(contactsList);

  content.appendChild(section);
}

export default createContactPage;
