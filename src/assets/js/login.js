// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    // Crie um elemento div
    var div = document.createElement('div');
    div.innerHTML = `
    <!DOCTYPE html>
    <html lang="pt-br">
    
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="./src/assets/css/lgs.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="icon" type="image" sizes="50x50" href="./src/assets/img/nav/icon.png">
        <link href="./src/assets/css/bootstrap.min.css" rel="stylesheet" alt="versão (5.2.3)">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tela de Login</title>
    </head>
    
    <body>
        <div class="login-box">
            <form>
                <div class="form-group">
                    <img src="./src/assets/img/nav/logotipo-etec.svg" alt="Logo" class="img-fluid">
                    <div class="dropdown">
                        <button style="background-color: rgb(172, 0, 0);" class="btn btn-secondary dropdown-toggle"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Entrar Como:
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Administração</a></li>
                            <li><a class="dropdown-item" href="./src/pages/hme.html">Aluno</a></li>
                            <li><a class="dropdown-item" href="./src/pages/hme.html">Visitante</a></li>
                        </ul>
                    </div>
                    <br>
                    <input type="text" class="form-control form-group-rm" id="rm" required placeholder="RM">
                </div>
                <div class="form-group">
                    <label for="senha"></label>
                    <input type="password" class="form-control" id="senha" required placeholder="Senha">
                </div>
                <div class="form-group">
                    <br>
                    <button class="bts" data-text="Bem-Vindo">
                        <span href="./src/pages./src/pages/hme.html" class="hover">Entrar</span>
                    </button>
                </div>
            </form>
            <a href="./src/pages/hme.html"><button href="./src/pages/hme.html" class="button">
                </button>
            </a>
        </div>
        <script src="./src/assets/js/main.js"></script>
        <script src="./src/assets/js/./src/pages/lgs.js"></script>
        <script src="./src/assets/js/bootstrap.bundle.min.js" alt="versão (5.2.3)"></script>
    </body>
    
    </html>
    `;
    
    // Adicione o elemento div ao final do corpo do documento
    document.body.appendChild(div);
}

// Chame a função para adicionar o login ao DOM
adicionarLoginAoDOM();
