const botonYes = document.getElementById("yes");
const mensaje = document.getElementById("mensaje");
const caos = document.getElementById("caos");
const pantallaNegra = document.getElementById("pantallaNegra");
const opciones = document.getElementById("opciones");

const frases = [
    "YES...",
    "NO...",
    "MAYBE...",
    "ARE YOU SURE?",
    "PERUANA?",
    "YES YES YES",
    "NO ESCAPE",
    "THINK AGAIN",
    "WHY?",
    "YES.",
    "NO.",
    "PERUANA",
    "ARE YOU...",
    "..."
];

botonYes.addEventListener("click", function() {

    botonYes.disabled = true;

    mensaje.textContent = "You are absolutely peruana";

    let contador = 0;

    const intervalo = setInterval(function() {

        const texto = document.createElement("span");

        texto.textContent = frases[Math.floor(Math.random() * frases.length)];

        texto.classList.add("textoCaos");

        texto.style.left = Math.random() * 90 + "%";
        texto.style.top = Math.random() * 90 + "%";

        texto.style.fontSize = Math.random() * 30 + 15 + "px";

        caos.appendChild(texto);

        contador++;

        if (contador >= 50) {
            clearInterval(intervalo);

            mensaje.textContent = "PERUANA....";

            setTimeout(function() {

                pantallaNegra.classList.add("activa");

                setTimeout(function() {

                    pantallaNegra.classList.remove("activa");

                    caos.innerHTML = "";
                    mensaje.textContent = "SYSTEM RECOVERED.";

                    mostrarOpciones();

                }, 10000);

            }, 1500);
        }

    }, 100);

});


function mostrarOpciones() {

    opciones.innerHTML = `
        <button onclick="respuesta('You have accepted your fate.')">
            ACCEPT YOUR FATE
        </button>

        <button onclick="respuesta('The system is questioning you again.')">
            TRY AGAIN
        </button>

        <button onclick="respuesta('You cannot escape being peruana.')">
            ESCAPE
        </button>
    `;

}


function respuesta(texto) {

    mensaje.textContent = texto;

}