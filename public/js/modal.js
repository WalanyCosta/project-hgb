const numeroAgente = document.getElementById('CIF')
const butaoGerarCertificado = document.getElementById('gerador')

butaoGerarCertificado.addEventListener('click', (evento)=>{
     fetch(`http://localhost:3333/certificado/${numeroAgente.value}`, {
        method: 'GET',
        mode: 'cors'
    })
        .then(response => response.json())
        .then(data => {
            
            if(data?.messagem) alert(`Ocorreu um erro no servidor. Por favor tente novamente`)

            alert('Feito com successo!')
        })
        .catch(error => {console.log(error.mensagem)})

})