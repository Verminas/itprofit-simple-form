import {validateItem} from "../scripts/validate";

export function onSubmitForm(e){
    e.preventDefault()
    const formLabels = Array.from(e.currentTarget.querySelectorAll('.form-label'))
    const resultValidation = formLabels.map(label => validateItem(label))
    if(resultValidation.every(item => item)) {
        console.log('form is valid')
    }
}