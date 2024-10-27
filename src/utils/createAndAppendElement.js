/**
 * Creates an element based on the provided tag name, applies specified settings (e.g., classNames, id, textContent),
 * appends the element to the specified parent node, and returns the created element.
 *
 * @param {string} tagName - The tag name for the element to be created (e.g., 'div', 'span', 'input').
 * @param {HTMLElement} parentNode - The parent node to which the created element will be appended.
 * @param {Object} settings - The settings object containing optional properties for the element:
 * @param {string|string[]} settings.classNames - The class name(s) to be applied to the element.
 * @param {string} settings.id - The id to be assigned to the element.
 * @param {string} settings.textContent - The text content to be set for the element.
 * @returns {HTMLElement} - The created element, appended to the parent node.
 */

export function createAndAppendElement(tagName, parentNode, settings) {
    const element = document.createElement(tagName)
    if (settings.classNames) {
        Array.isArray(settings.classNames)
            ? settings.classNames.forEach(className => element.classList.add(className))
            : element.classList.add(settings.classNames)
    }
    settings.id && (element.id = settings.id)
    settings.textContent && (element.textContent = settings.textContent)

    parentNode.append(element)
    return element
}