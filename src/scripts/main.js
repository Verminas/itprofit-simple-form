import {addFormContent} from "../utils/addFormContent";
import {formData} from "../data/formData";

const container = document.createElement('div');
container.classList.add('container');

// header
const header = document.createElement('header');
header.classList.add('header');

const buttonOpenModal = document.createElement('button');
buttonOpenModal.classList.add('button', 'open-modal');
buttonOpenModal.id = 'open-modal'
buttonOpenModal.textContent = 'Open modal'

header.append(buttonOpenModal)

// main
const main = document.createElement('main');
main.classList.add('main');

//login form
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper-form');

const title = document.createElement('h2');
title.classList.add('form-title');
title.textContent = 'Sign Up'
wrapper.append(title)

const form = document.createElement('form');
form.classList.add('form');
formData.forEach((item) => addFormContent(item, form))

const buttonSubmit = document.createElement('button');
buttonSubmit.classList.add('button', 'submit');
buttonSubmit.id = 'submit'
buttonSubmit.textContent = 'Submit'
form.append(buttonSubmit)

wrapper.append(form)
main.append(wrapper)


//footer
const footer = document.createElement('footer');
footer.classList.add('footer');

const gitHubInfo = document.createElement('p');
gitHubInfo.classList.add('info');
gitHubInfo.innerHTML = `2024 | <a href="https://github.com/Verminas" target="_blank" class="link">GitHub</a>`;

footer.append(gitHubInfo)

// DOM
document.body.append(container);
container.append(header);
container.append(main);
container.append(footer);