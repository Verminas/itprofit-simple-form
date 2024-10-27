/**
 * Generates form content based on the provided object and appends it to the specified form element.
 *
 * @param {Object} obj - The object containing properties for the form element, such as label, placeholder,
 * type, element (as HTML element), name (as className and id)
 * @param {HTMLElement} form - The form element to which the generated content will be appended.
 */

export function addFormContent(obj, form) {
    const isCorrectType = obj.label && obj.placeholder && obj.type && obj.name && obj.element
    if (isCorrectType) {
        const label = document.createElement('label');
        label.classList.add('form-label')
        const span = document.createElement('span');
        span.classList.add('form-span')
        span.textContent = obj.label;
        label.append(span)

        const item = document.createElement(obj.element);
        obj.element === 'input' && (item.type = obj.type)
        item.placeholder = obj.placeholder;
        item.classList.add('form-item', obj.name)
        item.id = obj.name

        label.append(item)
        form.append(label)
    }
}