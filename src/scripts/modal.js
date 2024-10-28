import {createAndAppendElement} from "../utils/createAndAppendElement";

export function openModal() {
    const wrapper = createAndAppendElement('div', document.body, {classNames: 'wrapper-modal', id: 'wrapper-modal'})
    const modal = createAndAppendElement('div', wrapper, {classNames: 'modal', id: 'modal'})
    const title = createAndAppendElement('h3', modal, {classNames: 'modal-title', textContent: 'Modal'})
    const text = createAndAppendElement('p', modal, {classNames: 'modal-text', textContent: 'Close this modal'})
    const button = createAndAppendElement('button', modal, {
        classNames: ['button', 'modal-button'],
        id: 'modal-button',
        textContent: 'Close'
    })
    button.addEventListener('click', () => closeModal('wrapper-modal'))

    setTimeout(() => {
        wrapper.classList.add('wrapper-modal-open');
        document.body.classList.add('modal-is-open');
    }, 150);
}

function closeModal(wrapperModalId) {
    const wrapper = document.getElementById(wrapperModalId);
    document.body.classList.remove('modal-is-open')
    wrapper.remove()
}