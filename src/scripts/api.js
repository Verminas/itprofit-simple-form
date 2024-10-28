export const apiForm = {
    async sendForm(formData){
        const res = await fetch('http://localhost:9090/api/registration', {
            method: 'POST',
            body: formData,
        });

        const data = await res.json();

        if(!res.ok) {
            throw data;
        }

        return data
    }
}