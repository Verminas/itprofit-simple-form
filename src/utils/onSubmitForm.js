import {validateItem} from "../scripts/validate";
import {submitFormData} from "../scripts/submitFormData";

export async function onSubmitForm(e) {
    e.preventDefault()
    const form = e.currentTarget
    const formLabels = Array.from(e.currentTarget.querySelectorAll('.form-label'))
    const resultValidation = formLabels.map(label => validateItem(label))
    if (resultValidation.every(item => item)) {
        await submitFormData(form)
    }
}