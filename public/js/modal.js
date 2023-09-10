const numeroAgente = document.getElementById('CIF')
const butaoGerarCertificado = document.getElementById('gerador')
const forms = document.querySelectorAll('.needs-validation')
const alertMensagem = document.getElementById('alertMensagem')

const inserirLoading = () => {
    butaoGerarCertificado.innerHTML = `
        <div class="spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `
}

const adicionarAlertMensagem = (message, type) => {
    if(alertMensagem?.children.length === 1){
        alertMensagem.innerHTML = ''
    }

    const divWrapper = document.createElement('div')
    divWrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertMensagem.append(divWrapper)
  }

const gerarCertificado = () => {

    inserirLoading()

    const resposta = fetch(`http://localhost:3333/certificado/${numeroAgente.value}`, {
        method: 'GET',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => {
            if(data?.error){
              adicionarAlertMensagem(data.error, 'danger') 
            }else{
              adicionarAlertMensagem(data.mensagem, 'success')
            }
        })
        .catch(error => error.mensagem)
        .finally(()=> {
            butaoGerarCertificado.innerHTML = `Gerar Certificado`
        })
    return resposta
}


Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault()
    
    if (!form.checkValidity()) {
      event.stopPropagation()
    }

    form.classList.add('was-validated')

    gerarCertificado()
  
  })
})