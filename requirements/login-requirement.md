# Login de participante

## Cenario: Sucesso 

- **Dado**: que o usuário possui uma conta ativa com um nome de usuário e senha válidos
	- **E** está na página de login
- **Quando** ele insere o nome de usuário e senha corretos
	- **E** clica no botão de login
- **Então** Deve retornar status 200 e participante
____

## Cenário2: Falha no login devido a senha incorreta

- **Dado**: usuário possui uma conta ativa com um nome de usuário válido
	- **E** está na página de login
- **Quando** ele insere o nome de usuário correto, mas uma senha incorreta
	- **E** clica no botão de login
- **Então** Deve retornar status 401 e uma mensagem de error
____

## Cenário3: Falha no login devido a nome de usuário inexistente
- **Dado** que o usuário está na página de login
- **Quando**: ele insere um nome de usuário que não existe no sistema
	- **E** insere uma senha qualquer
	- **E** Enviar esse dados
- **Então** Deve retornar status 401 e uma mensagem de error
____

## Cenário: Bloqueio da conta após múltiplas tentativas de login falhas
- **Dado** que o usuário possui uma conta ativa.
	- **E** está na página de login
- **Quando** ele insere credenciais incorretas três vezes consecutivas
- **Então** Deve retornar status 401 mensagem informando que sua conta foi temporariamente bloqueada
____

## Cenário: Login com autenticação multifator (MFA) habilitada

- **Dado** que o usuário possui uma conta ativa com autenticação multifator habilitada
	- **E** está na página de login
- **Quando** ele insere o nome de usuário e senha corretos
	- **E** Enviar dados 
- **Então** retornar status 200 e código de verificação enviado para autenticado
