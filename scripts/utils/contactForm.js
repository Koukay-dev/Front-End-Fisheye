function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


const contact_form = document.getElementById('contact-form')

contact_form.addEventListener('submit', event => {
    event.preventDefault()


})

contact_form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(contact_form)
    const values = {}
    for (const [key, value] of formData.entries()) {
        values[key] = value
    }
    console.log(values)
    closeModal()
    contact_form.reset()
    
})