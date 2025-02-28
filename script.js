document.getElementById("acomp-sim").addEventListener("change", function() {
    document.getElementById("acompanhante-info").style.display = "block";
    document.getElementById("add-acompanhante").style.display = "block";
});
document.getElementById("acomp-nao").addEventListener("change", function() {
    document.getElementById("acompanhante-info").style.display = "none";
    document.getElementById("extra-acompanhante").style.display = "none";
    document.getElementById("add-acompanhante").style.display = "block";
});

document.getElementById("add-acompanhante").addEventListener("click", function() {
    document.getElementById("extra-acompanhante").style.display = "block";
    this.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const sobrenome = document.getElementById("sobrenome").value;
        const acompanhantes = document.querySelector("input[name='acompanhantes']:checked").value;
        let nomeAcompanhante1 = document.getElementById("nome-acompanhante1").value;
        let nomeAcompanhante2 = document.getElementById("nome-acompanhante2").value;

        const templateParams = {
            nome: nome,
            sobrenome: sobrenome,
            acompanhantes: acompanhantes,
            nome_acompanhante1: nomeAcompanhante1 || "Nenhum",
            nome_acompanhante2: nomeAcompanhante2 || "Nenhum"
        };

        emailjs.send("m248ucs", "5ve7qlc", templateParams)
            .then(function (response) {
                alert("Formulário enviado com sucesso!");
                document.getElementById("contact-form").reset();
            }, function (error) {
                alert("Erro ao enviar o formulário. Tente novamente.");
            });
    });
});
