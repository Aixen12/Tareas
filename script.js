function guardarNota() {
    let texto = document.getElementById("nota").value;
    
    if (texto.trim() !== "") {
        let notas = JSON.parse(localStorage.getItem("notas")) || [];
        notas.push(texto);
        localStorage.setItem("notas", JSON.stringify(notas));

        let mensaje = document.getElementById("mensaje");
        mensaje.innerText = "✅ Nota guardada!";
        mensaje.style.opacity = "1";

        // Desaparecer el mensaje después de 2 segundos
        setTimeout(() => {
            mensaje.style.opacity = "0";
        }, 2000);
    }
}

function borrarNota() {
    document.getElementById("nota").value = "";
}