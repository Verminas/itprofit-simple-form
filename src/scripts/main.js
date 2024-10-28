import {addFormContent} from "../utils/addFormContent";
import {formData} from "../data/formData";
import {createAndAppendElement} from "../utils/createAndAppendElement";
import {onSubmitForm} from "../utils/onSubmitForm";

const container = createAndAppendElement('div', document.body, {classNames: 'container'});
const header = createAndAppendElement('header', container, {classNames: 'header'});

const buttonOpenModal = createAndAppendElement('button', header, {
    classNames: ['button', 'open-modal'],
    id: 'open-modal',
    textContent: 'Open modal'
});

const main = createAndAppendElement('main', container, {classNames: 'main'});
const wrapper = createAndAppendElement('div', main, {classNames: 'wrapper-form'});

const title = createAndAppendElement('h2', wrapper, {classNames: 'form-title', textContent: 'Sign Up'});
const form = createAndAppendElement('form', wrapper, {classNames: 'form', id: 'form'});
form.onsubmit = onSubmitForm
formData.forEach((item) => addFormContent(item, form))

const buttonSubmit = createAndAppendElement('button', form, {
    classNames: ['button', 'submit'],
    id: 'submit',
    textContent: 'Submit'
});

const footer = createAndAppendElement('footer', container, {classNames: 'footer'});
const gitHubInfo = createAndAppendElement('p', footer, {classNames: 'info'});
gitHubInfo.innerHTML = `2024 | <a href="https://github.com/Verminas" target="_blank" class="link">GitHub</a>`;
