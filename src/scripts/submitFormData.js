import {createResponseMessage} from "../utils/createResponseMessage";
import {apiForm} from "./api";

export async function submitFormData(form) {
    try {
        const data = await apiForm.sendForm(form)
        if (data.status === 'success') {
            console.log(data.message);
            createResponseMessage(data.message)
            form.reset()
        }

    } catch (err) {
        if (err.status === 'error') {
            if (err.message) {
                console.warn(err.message)
                createResponseMessage(err.message, true)
            }
            if (err?.fields) {
                for (const fieldName in err.fields) {
                    const errorMessage = err.fields[fieldName];
                    console.warn(`${fieldName}: ${errorMessage}`);
                    createResponseMessage(`${fieldName}: ${errorMessage}`, true)
                }
            }
        } else {
            console.error(err)
        }
    }
}