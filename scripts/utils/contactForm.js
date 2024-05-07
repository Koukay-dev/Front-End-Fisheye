//affiche la modale de contact 
function displayModal() {
    const modal = document.getElementById("contact_modal")
	modal.style.display = "block"
    const firstInput = modal.querySelector('input[name="firstname"]')
    firstInput.focus()
    document.addEventListener('keydown', (event) => {
        if(event.key === 'Escape' && modal.style.display === 'block'){
            closeModal()
        }
    })
}
//modale de contact au clavier
function displayModalKey(event){
    if(event.key === 'Enter'){
        displayModal()
    }
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