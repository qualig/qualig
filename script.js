```javascript
/* =========================================================
   QUALIG — SCRIPT PRINCIPAL
   ========================================================= */


/* =========================================================
   NAVEGAÇÃO
   ========================================================= */

const paginas = {
    dashboard: {
        titulo: "Dashboard",
        subtitulo: "Visão geral do sistema"
    },

    auditorias: {
        titulo: "Auditorias",
        subtitulo: "Gestão das auditorias da qualidade"
    },

    requisitos: {
        titulo: "Requisitos",
        subtitulo: "Requisitos e critérios de avaliação"
    },

    documentos: {
        titulo: "Documentos",
        subtitulo: "Gestão e controle de documentos"
    },

    evidencias: {
        titulo: "Evidências",
        subtitulo: "Evidências relacionadas aos processos"
    },

    "nao-conformidades": {
        titulo: "Não Conformidades",
        subtitulo: "Registro e acompanhamento de não conformidades"
    },

    planos: {
        titulo: "Planos de Ação",
        subtitulo: "Acompanhamento das ações corretivas e preventivas"
    },

    indicadores: {
        titulo: "Indicadores",
        subtitulo: "Indicadores e desempenho da qualidade"
    },

    usuarios: {
        titulo: "Usuários",
        subtitulo: "Gestão de usuários e permissões"
    },

    configuracoes: {
        titulo: "Configurações",
        subtitulo: "Configurações do sistema"
    }
};


/* =========================================================
   ELEMENTOS PRINCIPAIS
   ========================================================= */

const telaLogin = document.getElementById("telaLogin");
const sistema = document.getElementById("sistema");

const formLogin = document.getElementById("formLogin");

const emailLogin = document.getElementById("emailLogin");
const senhaLogin = document.getElementById("senhaLogin");

const mensagemLogin = document.getElementById("mensagemLogin");

const btnEsqueciSenha =
    document.getElementById("btnEsqueciSenha");

const btnSair =
    document.getElementById("btnSair");

const nomeUsuario =
    document.getElementById("nomeUsuario");

const perfilUsuario =
    document.getElementById("perfilUsuario");


/* =========================================================
   NAVEGAÇÃO DO SISTEMA
   ========================================================= */

function configurarNavegacao() {

    const botoesMenu =
        document.querySelectorAll(".menu-item");

    botoesMenu.forEach(function(botao) {

        botao.addEventListener("click", function() {

            const pagina =
                botao.dataset.page;

            abrirPagina(pagina);

        });

    });

}


/* =========================================================
   ABRIR PÁGINA
   ========================================================= */

function abrirPagina(pagina) {

    const configuracao =
        paginas[pagina];

    if (!configuracao) {
        return;
    }

    const tituloPagina =
        document.getElementById("tituloPagina");

    const subtituloPagina =
        document.getElementById("subtituloPagina");

    const conteudoPagina =
        document.getElementById("conteudoPagina");


    if (tituloPagina) {
        tituloPagina.textContent =
            configuracao.titulo;
    }


    if (subtituloPagina) {
        subtituloPagina.textContent =
            configuracao.subtitulo;
    }


    document
        .querySelectorAll(".menu-item")
        .forEach(function(item) {

            item.classList.remove("ativo");

        });


    const itemAtivo =
        document.querySelector(
            '.menu-item[data-page="' + pagina + '"]'
        );


    if (itemAtivo) {
        itemAtivo.classList.add("ativo");
    }


    if (pagina === "dashboard") {

        renderizarDashboard();

    } else {

        renderizarPaginaEmDesenvolvimento(
            configuracao.titulo
        );

    }

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderizarDashboard() {

    const conteudoPagina =
        document.getElementById("conteudoPagina");

    if (!conteudoPagina) {
        return;
    }


    conteudoPagina.innerHTML = `

        <div class="dashboard-cards">

            <div class="card azul">
                <h3>Auditorias</h3>
                <div class="numero">0</div>
            </div>

            <div class="card roxo">
                <h3>Requisitos</h3>
                <div class="numero">0</div>
            </div>

            <div class="card verde">
                <h3>Documentos Vigentes</h3>
                <div class="numero">0</div>
            </div>

            <div class="card vermelho">
                <h3>Não Conformidades</h3>
                <div class="numero">0</div>
            </div>

        </div>


        <div class="dashboard-cards">

            <div class="card laranja">
                <h3>Planos de Ação</h3>
                <div class="numero">0</div>
            </div>

            <div class="card amarelo">
                <h3>Pendências</h3>
                <div class="numero">0</div>
            </div>

            <div class="card teal">
                <h3>Indicadores</h3>
                <div class="numero">0</div>
            </div>

            <div class="card azul">
                <h3>Usuários</h3>
                <div class="numero">1</div>
            </div>

        </div>


        <div class="secao">

            <div class="secao-titulo">

                <div>
                    <h3>Bem-vindo ao Qualig</h3>

                    <p>
                        Sistema de Gestão da Qualidade
                    </p>
                </div>

            </div>


            <div class="empty-state">

                <div class="icone">📊</div>

                <h3>
                    Seu painel de qualidade está pronto
                </h3>

                <p>
                    Os dados das auditorias,
                    documentos, não conformidades,
                    planos de ação e indicadores
                    aparecerão aqui.
                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   PÁGINAS EM DESENVOLVIMENTO
   ========================================================= */

function renderizarPaginaEmDesenvolvimento(titulo) {

    const conteudoPagina =
        document.getElementById("conteudoPagina");

    if (!conteudoPagina) {
        return;
    }


    conteudoPagina.innerHTML = `

        <div class="secao">

            <div class="empty-state">

                <div class="icone">🚧</div>

                <h3>
                    ${titulo}
                </h3>

                <p>
                    Este módulo será desenvolvido
                    nas próximas etapas do Qualig.
                </p>

            </div>

        </div>

    `;

}


/* =========================================================
   MENSAGEM DE LOGIN
   ========================================================= */

function mostrarMensagemLogin(
    mensagem,
    tipo = ""
) {

    if (!mensagemLogin) {
        return;
    }

    mensagemLogin.textContent =
        mensagem;

    mensagemLogin.className =
        "mensagem-login";


    if (tipo) {
        mensagemLogin.classList.add(tipo);
    }

}


/* =========================================================
   LOGIN
   ========================================================= */

async function fazerLogin(
    email,
    senha
) {

    mostrarMensagemLogin(
        "Entrando..."
    );


    const {
        data,
        error
    } =
        await supabaseClient.auth.signInWithPassword({

            email: email,

            password: senha

        });


    if (error) {

        console.error(
            "Erro no login:",
            error
        );


        mostrarMensagemLogin(
            "E-mail ou senha incorretos.",
            "erro"
        );

        return false;
    }


    console.log(
        "Login realizado com sucesso:",
        data.user
    );


    mostrarMensagemLogin(
        ""
    );


    abrirSistema(
        data.user
    );


    return true;

}


/* =========================================================
   ABRIR SISTEMA
   ========================================================= */

function abrirSistema(user) {

    if (telaLogin) {
        telaLogin.style.display =
            "none";
    }


    if (sistema) {
        sistema.style.display =
            "flex";
    }


    if (nomeUsuario) {

        nomeUsuario.textContent =
            user?.email || "Usuário";

    }


    if (perfilUsuario) {

        perfilUsuario.textContent =
            "Usuário";

    }


    abrirPagina("dashboard");

}


/* =========================================================
   MOSTRAR LOGIN
   ========================================================= */

function mostrarLogin() {

    if (telaLogin) {

        telaLogin.style.display =
            "flex";

    }


    if (sistema) {

        sistema.style.display =
            "none";

    }


    if (emailLogin) {
        emailLogin.value = "";
    }


    if (senhaLogin) {
        senhaLogin.value = "";
    }


    mostrarMensagemLogin("");

}


/* =========================================================
   VERIFICAR SESSÃO
   ========================================================= */

async function verificarSessao() {

    const {
        data,
        error
    } =
        await supabaseClient.auth.getSession();


    if (error) {

        console.error(
            "Erro ao verificar sessão:",
            error
        );

        mostrarLogin();

        return;

    }


    const sessao =
        data.session;


    if (sessao && sessao.user) {

        console.log(
            "Sessão encontrada:",
            sessao.user.email
        );


        abrirSistema(
            sessao.user
        );

    } else {

        console.log(
            "Nenhuma sessão ativa. Exibindo login."
        );


        mostrarLogin();

    }

}


/* =========================================================
   RECUPERAÇÃO DE SENHA
   ========================================================= */

async function recuperarSenha() {

    const email =
        emailLogin
            ? emailLogin.value.trim()
            : "";


    if (!email) {

        mostrarMensagemLogin(
            "Digite seu e-mail para recuperar a senha.",
            "erro"
        );


        if (emailLogin) {
            emailLogin.focus();
        }


        return;
    }


    if (
        !email.includes("@") ||
        !email.includes(".")
    ) {

        mostrarMensagemLogin(
            "Digite um e-mail válido.",
            "erro"
        );


        if (emailLogin) {
            emailLogin.focus();
        }


        return;
    }


    mostrarMensagemLogin(
        "Enviando instruções..."
    );


    const {
        error
    } =
        await supabaseClient.auth.resetPasswordForEmail(
            email,
            {
                redirectTo:
                    window.location.origin +
                    window.location.pathname
            }
        );


    if (error) {

        console.error(
            "Erro ao solicitar recuperação:",
            error
        );


        mostrarMensagemLogin(
            "Não foi possível enviar o e-mail. Tente novamente.",
            "erro"
        );


        return;
    }


    mostrarMensagemLogin(
        "Se este e-mail estiver cadastrado, você receberá as instruções para criar uma nova senha.",
        "sucesso"
    );

}


/* =========================================================
   BOTÃO ESQUECI MINHA SENHA
   ========================================================= */

function configurarRecuperacaoSenha() {

    if (!btnEsqueciSenha) {
        return;
    }


    btnEsqueciSenha.addEventListener(
        "click",
        recuperarSenha
    );

}


/* =========================================================
   BOTÃO SAIR
   ========================================================= */

function configurarBotaoSair() {

    if (!btnSair) {
        return;
    }


    btnSair.addEventListener(
        "click",
        async function() {

            const {
                error
            } =
                await supabaseClient.auth.signOut();


            if (error) {

                console.error(
                    "Erro ao sair:",
                    error
                );

                return;
            }


            mostrarLogin();

        }
    );

}


/* =========================================================
   FORMULÁRIO DE LOGIN
   ========================================================= */

function configurarFormularioLogin() {

    if (!formLogin) {
        return;
    }


    formLogin.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const email =
                emailLogin.value.trim();


            const senha =
                senhaLogin.value;


            if (!email || !senha) {

                mostrarMensagemLogin(
                    "Preencha o e-mail e a senha.",
                    "erro"
                );

                return;
            }


            const btnLogin =
                document.getElementById(
                    "btnLogin"
                );


            if (btnLogin) {

                btnLogin.disabled =
                    true;

                btnLogin.textContent =
                    "Entrando...";

            }


            await fazerLogin(
                email,
                senha
            );


            if (btnLogin) {

                btnLogin.disabled =
                    false;

                btnLogin.textContent =
                    "Entrar";

            }

        }
    );

}


/* =========================================================
   MONITORAR ALTERAÇÕES DE AUTENTICAÇÃO
   ========================================================= */

function configurarMonitoramentoAuth() {

    supabaseClient.auth.onAuthStateChange(
        function(event, session) {

            console.log(
                "Evento de autenticação:",
                event
            );


            if (
                event === "SIGNED_IN" &&
                session?.user
            ) {

                abrirSistema(
                    session.user
                );

            }


            if (
                event === "SIGNED_OUT"
            ) {

                mostrarLogin();

            }

        }
    );

}


/* =========================================================
   TESTE SUPABASE
   ========================================================= */

async function testarSupabase() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("documentos")
                .select("*")
                .limit(10);


        if (error) {

            console.error(
                "Erro ao consultar documentos:",
                error
            );

            return;
        }


        console.log(
            "Supabase respondeu corretamente!"
        );


        console.log(
            "Documentos encontrados no banco:",
            data
        );


    } catch (erro) {

        console.error(
            "Erro inesperado no Supabase:",
            erro
        );

    }

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async function() {

        console.log(
            "Qualig iniciado."
        );


        configurarNavegacao();

        configurarFormularioLogin();

        configurarRecuperacaoSenha();

        configurarBotaoSair();

        configurarMonitoramentoAuth();


        await verificarSessao();


        testarSupabase();

    }
);
```
