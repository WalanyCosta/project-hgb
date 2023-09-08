const numeroAgente = document.getElementById('CIF')
const forms = document.querySelectorAll('.needs-validation')

Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault()
    if (!form.checkValidity()) {
      event.stopPropagation()
    }

    form.classList.add('was-validated')

    fetch(`http://localhost:3333/certificado/${numeroAgente.value}`, {
        method: 'GET',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => {
            
            if(data?.messagemError) alert(data.messagemError)

            alert(data.mensagem)
        })
        .catch(error => {console.log(error.mensagem)})

  })
})