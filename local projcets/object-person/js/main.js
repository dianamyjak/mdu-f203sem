"use strict"; // to enable strict mode and modern JavaScript functionality

function showAlert() {
  alert('Open your Developer Console!');
}

// declare yourself as an object
let person = {
  name: "Diana Riis Myjak ",
  initials: "DRM",
  age: 37,
  city: "Skanderborg",
  education: "EUX Business Event ",
  whyMDU: "Det er en udd. der giver mange muligheder",
  expectations: "At ",
  specialisation: "",
  dreamJob: "Frontend Developer at Apple Inc (or Senior Lecturer)",
  funFacts: "My socks often match color combinations in my clothes.",
  image: "https://avatars3.githubusercontent.com/u/6738394",
  web: "https://cederdorff.com",
  instagram: "https://instagram.com/cederdorff/",
  linkedIn: "https://www.linkedin.com/in/cederdorff/"
};

console.log(person);

// append the object to the DOM
document.querySelector("#content").innerHTML +=/*html*/ `
    <article>
      <img src='${person.image}'>
      <h3>${person.name}</h3>
      <a href='${person.web}'>${person.web}</a>
    </article>
`;