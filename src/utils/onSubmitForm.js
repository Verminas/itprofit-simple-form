import {validateItem} from "../scripts/validate";
import {submitFormData} from "../scripts/submitFormData";

/**
 * Handles form submission by preventing the default event behavior, validating form items, and submitting form data if all items are valid.
 *
 * @param {Event} e - The event object associated with the form submission.
 * @returns {Promise<void>} A Promise that resolves when form data submission is successful.
 */

export async function onSubmitForm(e) {
    e.preventDefault()
    const form = e.currentTarget
    const formLabels = Array.from(form.querySelectorAll('.form-label'))
    const resultValidation = formLabels.map(label => validateItem(label))
    if (resultValidation.every(item => item)) {
        await submitFormData(form)
    }
}