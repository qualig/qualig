// ======================================================
// QUALIG - SCRIPT PRINCIPAL
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const telaLogin = document.getElementById("telaLogin");
    const sistema = document.getElementById("sistema");
    const formLogin = document.getElementById("formLogin");
    const emailLogin = document.getElementById("emailLogin");
    const senhaLogin = document.getElementById("senhaLogin");
    const mensagemLogin = document.getElementById("mensagemLogin");
    const btnSair = document.getElementById("btnSair");

    // --------------------------------------------------
    // CREDENCIAIS TEMPORÁRIAS PARA DEMONSTRAÇÃO
    // --------------------------------------------------

    const EMAIL_DEMO = "admin@qualig.com";
    const SENHA_DEMO = "123456";

    // --------------------------------------------------
    // VERIFICA LOGIN SALVO
    // --------------------------------------------------

    function verificarSessao() {

        const logado = sessionStorage.getItem("qualig_logado");

        if (logado === "true") {
            mostrarSistema();
        } else {
            mostrarLogin();
        }
    }

    // --------------------------------------------------
    // MOSTRAR LOGIN
    // --------------------------------------------------

    function mostrarLogin() {

        if (telaLogin) {
            telaLogin.style.display = "flex";
        }

        if (sistema) {
            sistema.style.display = "none";
        }
    }

    // --------------------------------------------------
    // MOSTRAR SISTEMA
    // --------------------------------------------------

    function mostrarSistema() {

        if (telaLogin) {
            telaLogin.style.display = "none";
        }

        if (sistema) {
            sistema.style.display = "flex";
        }
    }

    // --------------------------------------------------
    // LOGIN
    // --------------------------------------------------

    if (formLogin) {

        formLogin.addEventListener("submit", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const email = emailLogin ? emailLogin.value.trim() : "";
            const senha = senhaLogin ? senhaLogin.value : "";

            if (mensagemLogin) {
                mensagemLogin.textContent = "";
                mensagemLogin.style.color = "";
            }

            if (!email || !senha) {

                if (mensagemLogin) {
                    mensagemLogin.textContent =
                        "Digite seu e-mail e sua senha.";
                    mensagemLogin.style.color = "#dc2626";
                }

                return;
            }

            if (
                email.toLowerCase() === EMAIL_DEMO &&
                senha === SENHA_DEMO
            ) {

                sessionStorage.setItem("qualig_logado", "true");

                mostrarSistema();

                return;
            }

            if (mensagemLogin) {
                mensagemLogin.textContent =
                    "E-mail ou senha incorretos.";
                mensagemLogin.style.color = "#dc2626";
            }

        }, false);
    }

    // --------------------------------------------------
    // SAIR
    // --------------------------------------------------

    if (btnSair) {

        btnSair.addEventListener("click", function (event) {

            event.preventDefault();

            sessionStorage.removeItem("qualig_logado");

            mostrarLogin();

            if (emailLogin) {
                emailLogin.value = "";
            }

            if (senhaLogin) {
                senhaLogin.value = "";
            }

        });
    }

    // --------------------------------------------------
    // ESQUECI MINHA SENHA
    // --------------------------------------------------

    const links = document.querySelectorAll("a");

    links.forEach(function (link) {

        const texto = link.textContent.trim().toLowerCase();

        if (texto.includes("esqueci minha senha")) {

            link.addEventListener("click", function (event) {

                event.preventDefault();

                if (mensagemLogin) {
                    mensagemLogin.textContent =
                        "Para esta demonstração, use: admin@qualig.com / 123456";
                    mensagemLogin.style.color = "#2563eb";
                }

            });

        }

    });

    // --------------------------------------------------
    // MENU DO QUALIG
    // --------------------------------------------------

    const itensMenu = document.querySelectorAll(
        ".menu-item, .item-menu, nav a, aside a"
    );

    itensMenu.forEach(function (item) {

        item.addEventListener("click", function () {

            itensMenu.forEach(function (outro) {
                outro.classList.remove("ativo", "active");
            });

            item.classList.add("ativo");

        });

    });

    // --------------------------------------------------
    // INICIAR
    // --------------------------------------------------

    verificarSessao();

});
