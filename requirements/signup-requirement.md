# SignUp Participante

## Cenário: Cadastro bem-sucedido de um novo participante no evento

- **Dado** Evento "Tech Summit 2024" está com inscrições abertas
	- **E** o participante ainda não possui cadastro para o evento
- **Quando** ele acessa a página de inscrição do "Tech Summit 2024"
	- **E** insere todas as informações obrigatórias, como nome, e-mail, e telefone
	- **E** confirma o cadastro clicando no botão de inscrição
- **Então** o sistema deve salvar o cadastro do participante para o evento "Tech Summit 2024"
- **E** retorna status 200 e mensagem de sucesso confirmando a inscrição
- **E** enviar um e-mail de confirmação para o participante.
____

## Cenário: Tentativa de cadastro duplicado

- **Dado** que o participante já se inscreveu para o evento "Tech Summit 2024"
- **Quando** ele tenta acessar a página de inscrição do evento novamente e insere suas informações
- **Então** o sistema deve verificar o e-mail inserido e identificar que o participante já está inscrito
	- **E** return status 400 e mensagem informando que ele já possui um cadastro ativo para o evento.
____

## Cenário: Cadastro falha por falta de informações obrigatórias

- **Dado** que o evento "Tech Summit 2024" está com inscrições abertas
- **Quando** o participante tenta se cadastrar, mas deixa campos obrigatórios em branco (como e-mail ou nome completo)
	- **E** Enviar inscrição
- **Então** o sistema deve retornar status 400 e uma mensagem de erro especificando quais campos precisam ser preenchidos
	- **E** deve impedir a finalização do cadastro até que todas as informações obrigatórias sejam preenchidas corretamente.
____

## Cenário: Cadastro falha devido ao limite de vagas atingido

- **Dado** que o evento "Tech Summit 2024" tem um limite de 100 vagas
	- **E** todas as vagas já foram preenchidas
- **Quando** o participante tenta se cadastrar para o evento
- **Então** o sistema deve exibir uma mensagem informando que as inscrições estão encerradas por atingirem o limite de vagas
	- **E** deve oferecer a opção de entrar em uma lista de espera para o evento, caso haja desistências.
____

## Cenário: Cadastro com confirmação via e-mail

- **Dado** que o evento "Tech Summit 2024" requer confirmação de inscrição via e-mail
- **Quando** o participante se cadastra para o evento inserindo suas informações corretamente
	- **E** clica no botão de inscrição
- **Então** o sistema deve enviar um e-mail de confirmação com um link para confirmar o cadastro
	- **E** exibir uma mensagem informando que a inscrição será confirmada apenas após a verificação do e-mail
	- **E** aguardar a confirmação do participante para completar o processo de inscrição.