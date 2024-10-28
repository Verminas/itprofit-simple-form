export const apiForm = {
    async sendForm(form){
        const res = await fetch('http://localhost:9090/api/registration', {
            method: 'POST',
            body: new FormData(form),
        });

        const data = await res.json();

        if(!res.ok) {
            throw data;
        }

        return data
    }
}