# Emitir Certificação

## Cenário: Emissão de certificado para participante elegível

- **Dado** que o participante concluiu todas as atividades obrigatórias no evento "Tech Summit 2024"
	- **E** atingiu a presença mínima exigida para emissão do certificado
- **Quando** ele acessa a área de certificados do evento
	- **E** solicita a emissão do certificado de participação
- **Então** o sistema deve gerar o certificado com o nome completo do participante e informações do evento
	- **E** exibir uma mensagem de confirmação de que o certificado foi emitido com sucesso
	- **E** disponibilizar uma opção para baixar o certificado em PDF.
____

## Cenário: Tentativa de emissão de certificado por participante não elegível

- **Dado:** que o participante está inscrito no evento "Tech Summit 2024"
	- **E:** não cumpriu a presença mínima exigida para emissão do certificado
- **Quando:** ele tenta acessar a área de emissão de certificados
- **Então:** o sistema deve verificar seu status de participação
	- **E:** exibir uma mensagem informando que ele não é elegível para o certificado de participação
	- **E:** indicar o requisito mínimo de presença necessário.

## Cenario: Emissão do certificado antes do evento acabar

- **Dado:** Participante está inscrito no evento
	**E:** Ainda não terminou o evento
- **Quando:**Tenta emitir o certficado antes da data de termino 
- **Então:** O sistema deve retornar status 400 e mensagem de erro
