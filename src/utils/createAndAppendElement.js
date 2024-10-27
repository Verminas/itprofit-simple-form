export function createAndAppendElement(tagName, parentNode, settings) {
    const element = document.createElement(tagName)
    if(settings.classNames) {
        Array.isArray(settings.classNames) ? settings.classNames.forEach(className => element.classList.add(className)) : element.classList.add(settings.classNames)
    }
    settings.id && (element.id = settings.id)
    settings.textContent && (element.textContent = settings.textContent)

    parentNode.append(element)
    return element
}