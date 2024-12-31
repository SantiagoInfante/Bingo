const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const num9 = document.getElementById("num9")
const num10 = document.getElementById("num10")
const num11 = document.getElementById("num11")
const num12 = document.getElementById("num12")
const num13 = document.getElementById("num13")
const num14 = document.getElementById("num14")
const num15 = document.getElementById("num15")
const num16 = document.getElementById("num16")
const num17 = document.getElementById("num17")
const num18 = document.getElementById("num18")
const num19 = document.getElementById("num19")
const num20 = document.getElementById("num20")
const num21 = document.getElementById("num21")
const num22 = document.getElementById("num22")
const num23 = document.getElementById("num23")
const num24 = document.getElementById("num24")
const num25 = document.getElementById("num25")
const btnjugar = document.getElementById("btnjugar")
const carton = document.getElementById("carton")
const resultado = document.getElementById("resultado")

var currentIndex = 0;
var salidos = [];
var arraydefinitivo = []




document.getElementById("configuracion")
document.getElementById("bingueroseccion").style.display = "none"
document.getElementById("seleccionrol").style.display = "none"
document.getElementById("jugando").style.display = "none"

document.addEventListener('DOMContentLoaded', () => {

    function seleccion() {
        document.getElementById("configuracion").style.display = "none";
        document.getElementById("seleccionrol").style.display = "block";
        document.getElementById("jugando").style.display = "none";
        document.getElementById("bingueroseccion").style.display = "none";
    }



    function jugar() {
        document.getElementById("jugando").style.display = "block";
        document.getElementById("bingueroseccion").style.display = "none";
        document.getElementById("configuracion").style.display = "none";
        document.getElementById("seleccionrol").style.display = "none";
        document.getElementById("bingoganaste").style.display = "none";


        let numerosb = [];
        function generarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (let i = 1; i < 15; i++) {
            const numeroAleatorio = generarNumeroAleatorio(1, 15);
            numerosb.push(numeroAleatorio);
        }

        let arregloSinRepetidosb = numerosb.reduce((acumulador, elemento) => {
            if (!acumulador.includes(elemento)) {
                acumulador.push(elemento);
            }
            return acumulador;
        }, []);

        while (arregloSinRepetidosb.length < 15) {
            const numeroAleatorio = generarNumeroAleatorio(1, 15);
            if (!arregloSinRepetidosb.includes(numeroAleatorio)) {
                arregloSinRepetidosb.push(numeroAleatorio);
            }
        }

        // Asigna los valores a los elementos num1, num2, num3, num4 y num5

        document.getElementById("num1").innerHTML = arregloSinRepetidosb[0];
        document.getElementById("num6").innerHTML = arregloSinRepetidosb[1];
        document.getElementById("num11").innerHTML = arregloSinRepetidosb[2];
        document.getElementById("num16").innerHTML = arregloSinRepetidosb[3];
        document.getElementById("num21").innerHTML = arregloSinRepetidosb[4];
        console.log(arregloSinRepetidosb);



        //////////////////////////////////////////////////////
        let numerosi = [];
        function generarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (let i = 16; i < 30; i++) {
            const numeroAleatorio = generarNumeroAleatorio(16, 30);
            numerosi.push(numeroAleatorio);
        }

        let arregloSinRepetidosi = numerosi.reduce((acumulador, elemento) => {
            if (!acumulador.includes(elemento)) {
                acumulador.push(elemento);
            }
            return acumulador;
        }, []);

        while (arregloSinRepetidosi.length < 15) {
            const numeroAleatorio = generarNumeroAleatorio(16, 30);
            if (!arregloSinRepetidosi.includes(numeroAleatorio)) {
                arregloSinRepetidosi.push(numeroAleatorio);
            }
        }

        document.getElementById("num2").innerHTML = arregloSinRepetidosi[0];
        document.getElementById("num7").innerHTML = arregloSinRepetidosi[1];
        document.getElementById("num12").innerHTML = arregloSinRepetidosi[2];
        document.getElementById("num17").innerHTML = arregloSinRepetidosi[3];
        document.getElementById("num22").innerHTML = arregloSinRepetidosi[4];
        //////////////////////////////////////////////////////////////
        let numerosn = [];
        function generarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (let i = 31; i < 45; i++) {
            const numeroAleatorio = generarNumeroAleatorio(31, 45);
            numerosn.push(numeroAleatorio);
        }

        let arregloSinRepetidosn = numerosn.reduce((acumulador, elemento) => {
            if (!acumulador.includes(elemento)) {
                acumulador.push(elemento);
            }
            return acumulador;
        }, []);

        while (arregloSinRepetidosn.length < 15) {
            const numeroAleatorio = generarNumeroAleatorio(31, 45);
            if (!arregloSinRepetidosn.includes(numeroAleatorio)) {
                arregloSinRepetidosn.push(numeroAleatorio);
            }
        }

        document.getElementById("num3").innerHTML = arregloSinRepetidosn[0];
        document.getElementById("num8").innerHTML = arregloSinRepetidosn[1];
        document.getElementById("num13").innerHTML = "★"
        document.getElementById("num18").innerHTML = arregloSinRepetidosn[3];
        document.getElementById("num23").innerHTML = arregloSinRepetidosn[4];
        ////////////////////////////////////////////////////////////////////////
        let numerosg = [];
        function generarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (let i = 46; i < 60; i++) {
            const numeroAleatorio = generarNumeroAleatorio(46, 60);
            numerosg.push(numeroAleatorio);
        }

        let arregloSinRepetidosg = numerosg.reduce((acumulador, elemento) => {
            if (!acumulador.includes(elemento)) {
                acumulador.push(elemento);
            }
            return acumulador;
        }, []);

        while (arregloSinRepetidosg.length < 15) {
            const numeroAleatorio = generarNumeroAleatorio(46, 60);
            if (!arregloSinRepetidosg.includes(numeroAleatorio)) {
                arregloSinRepetidosg.push(numeroAleatorio);
            }
        }

        document.getElementById("num4").innerHTML = arregloSinRepetidosg[0];
        document.getElementById("num9").innerHTML = arregloSinRepetidosg[1];
        document.getElementById("num14").innerHTML = arregloSinRepetidosg[2];
        document.getElementById("num19").innerHTML = arregloSinRepetidosg[3];
        document.getElementById("num24").innerHTML = arregloSinRepetidosg[4];
        console.log(arregloSinRepetidosg);
        ////////////////////////////////////////////////////////////////////////////////////
        let numeroso = [];
        function generarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (let i = 61; i < 75; i++) {
            const numeroAleatorio = generarNumeroAleatorio(61, 75);
            numeroso.push(numeroAleatorio);
        }

        let arregloSinRepetidoso = numeroso.reduce((acumulador, elemento) => {
            if (!acumulador.includes(elemento)) {
                acumulador.push(elemento);
            }
            return acumulador;
        }, []);

        while (arregloSinRepetidoso.length < 15) {
            const numeroAleatorio = generarNumeroAleatorio(61, 75);
            if (!arregloSinRepetidoso.includes(numeroAleatorio)) {
                arregloSinRepetidoso.push(numeroAleatorio);
            }
        }

        document.getElementById("num5").innerHTML = arregloSinRepetidoso[0];
        document.getElementById("num10").innerHTML = arregloSinRepetidoso[1];
        document.getElementById("num15").innerHTML = arregloSinRepetidoso[2];
        document.getElementById("num20").innerHTML = arregloSinRepetidoso[3];
        document.getElementById("num25").innerHTML = arregloSinRepetidoso[4];


        //Botones del carton





        const buttons = document.querySelectorAll('[id^="num"]');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.classList.contains('black')) {
                    const audioUncheck = new Audio('click1.wav'); // Reemplaza con la ruta de tu archivo de sonido para desmarcar
                    audioUncheck.play();
                } else {
                    const audioCheck = new Audio('click2.wav'); // Reemplaza con la ruta de tu archivo de sonido para marcar
                    audioCheck.play();
                }
                button.classList.toggle("black");

            });
        });
    }

    //Botones del binguero

    const buttons = document.querySelectorAll('[class^="binguero"]');
    buttons.forEach(buttonC => {

        buttonC.addEventListener('click', () => {
            buttonC.classList.toggle('black');
        });
    });









    window.seleccion = seleccion;
    window.jugar = jugar;
});

function binguero() {
    document.getElementById("bingueroseccion").style.display = "block";
    document.getElementById("jugando").style.display = "none";
    document.getElementById("configuracion").style.display = "none";
    document.getElementById("seleccionrol").style.display = "none";
}



function nuevocarton() {
    let numerosb = [];
    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 1; i < 15; i++) {
        const numeroAleatorio = generarNumeroAleatorio(1, 15);
        numerosb.push(numeroAleatorio);
    }

    let arregloSinRepetidosb = numerosb.reduce((acumulador, elemento) => {
        if (!acumulador.includes(elemento)) {
            acumulador.push(elemento);
        }
        return acumulador;
    }, []);

    while (arregloSinRepetidosb.length < 15) {
        const numeroAleatorio = generarNumeroAleatorio(1, 15);
        if (!arregloSinRepetidosb.includes(numeroAleatorio)) {
            arregloSinRepetidosb.push(numeroAleatorio);
        }
    }

    // Asigna los valores a los elementos num1, num2, num3, num4 y num5
    document.getElementById("num1").innerHTML = arregloSinRepetidosb[0];
    document.getElementById("num6").innerHTML = arregloSinRepetidosb[1];
    document.getElementById("num11").innerHTML = arregloSinRepetidosb[2];
    document.getElementById("num16").innerHTML = arregloSinRepetidosb[3];
    document.getElementById("num21").innerHTML = arregloSinRepetidosb[4];
    console.log(arregloSinRepetidosb);



    //////////////////////////////////////////////////////
    let numerosi = [];
    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 16; i < 30; i++) {
        const numeroAleatorio = generarNumeroAleatorio(16, 30);
        numerosi.push(numeroAleatorio);
    }

    let arregloSinRepetidosi = numerosi.reduce((acumulador, elemento) => {
        if (!acumulador.includes(elemento)) {
            acumulador.push(elemento);
        }
        return acumulador;
    }, []);

    while (arregloSinRepetidosi.length < 15) {
        const numeroAleatorio = generarNumeroAleatorio(16, 30);
        if (!arregloSinRepetidosi.includes(numeroAleatorio)) {
            arregloSinRepetidosi.push(numeroAleatorio);
        }
    }

    document.getElementById("num2").innerHTML = arregloSinRepetidosi[0];
    document.getElementById("num7").innerHTML = arregloSinRepetidosi[1];
    document.getElementById("num12").innerHTML = arregloSinRepetidosi[2];
    document.getElementById("num17").innerHTML = arregloSinRepetidosi[3];
    document.getElementById("num22").innerHTML = arregloSinRepetidosi[4];
    //////////////////////////////////////////////////////////////
    let numerosn = [];
    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 31; i < 45; i++) {
        const numeroAleatorio = generarNumeroAleatorio(31, 45);
        numerosn.push(numeroAleatorio);
    }

    let arregloSinRepetidosn = numerosn.reduce((acumulador, elemento) => {
        if (!acumulador.includes(elemento)) {
            acumulador.push(elemento);
        }
        return acumulador;
    }, []);

    while (arregloSinRepetidosn.length < 15) {
        const numeroAleatorio = generarNumeroAleatorio(31, 45);
        if (!arregloSinRepetidosn.includes(numeroAleatorio)) {
            arregloSinRepetidosn.push(numeroAleatorio);
        }
    }

    document.getElementById("num3").innerHTML = arregloSinRepetidosn[0];
    document.getElementById("num8").innerHTML = arregloSinRepetidosn[1];
    document.getElementById("num13").innerHTML = "★"
    document.getElementById("num18").innerHTML = arregloSinRepetidosn[3];
    document.getElementById("num23").innerHTML = arregloSinRepetidosn[4];
    ////////////////////////////////////////////////////////////////////////
    let numerosg = [];
    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 46; i < 60; i++) {
        const numeroAleatorio = generarNumeroAleatorio(46, 60);
        numerosg.push(numeroAleatorio);
    }

    let arregloSinRepetidosg = numerosg.reduce((acumulador, elemento) => {
        if (!acumulador.includes(elemento)) {
            acumulador.push(elemento);
        }
        return acumulador;
    }, []);

    while (arregloSinRepetidosg.length < 15) {
        const numeroAleatorio = generarNumeroAleatorio(46, 60);
        if (!arregloSinRepetidosg.includes(numeroAleatorio)) {
            arregloSinRepetidosg.push(numeroAleatorio);
        }
    }

    document.getElementById("num4").innerHTML = arregloSinRepetidosg[0];
    document.getElementById("num9").innerHTML = arregloSinRepetidosg[1];
    document.getElementById("num14").innerHTML = arregloSinRepetidosg[2];
    document.getElementById("num19").innerHTML = arregloSinRepetidosg[3];
    document.getElementById("num24").innerHTML = arregloSinRepetidosg[4];
    ////////////////////////////////////////////////////////////////////////////////////
    let numeroso = [];
    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 61; i < 75; i++) {
        const numeroAleatorio = generarNumeroAleatorio(61, 75);
        numeroso.push(numeroAleatorio);
    }

    let arregloSinRepetidoso = numeroso.reduce((acumulador, elemento) => {
        if (!acumulador.includes(elemento)) {
            acumulador.push(elemento);
        }
        return acumulador;
    }, []);

    while (arregloSinRepetidoso.length < 15) {
        const numeroAleatorio = generarNumeroAleatorio(61, 75);
        if (!arregloSinRepetidoso.includes(numeroAleatorio)) {
            arregloSinRepetidoso.push(numeroAleatorio);
        }
    }

    document.getElementById("num5").innerHTML = arregloSinRepetidoso[0];
    document.getElementById("num10").innerHTML = arregloSinRepetidoso[1];
    document.getElementById("num20").innerHTML = arregloSinRepetidoso[3];
    document.getElementById("num25").innerHTML = arregloSinRepetidoso[4];
}

function generarjuego() {
    document.getElementById("generar-juego").style.display = "none";
    let numeros = [];
    for (let i = 1; i <= 75; i++) {
        let letra;
        if (i <= 15) letra = 'B';
        else if (i <= 30) letra = 'I';
        else if (i <= 45) letra = 'N';
        else if (i <= 60) letra = 'G';
        else letra = 'O';
        numeros.push(letra + i);
    }

    for (let i = numeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }

    arraydefinitivo.push(numeros);
}
function mostrarNumero() {
    if (currentIndex < arraydefinitivo[0].length) {
        resultado.innerHTML = arraydefinitivo[0][currentIndex];
        salidos.push(arraydefinitivo[0][currentIndex]);
        currentIndex++;
    } else {
        resultado.innerHTML = "No hay más números";
    }
}

function mostrarSalidos() {
    resultado.innerHTML = salidos.join(", ");
}

document.getElementById("nuevo-numero").addEventListener("click", mostrarNumero);
document.getElementById("numeros-salidos").addEventListener("click", mostrarSalidos);


function quedarsecarton() {
    document.getElementById("Siquedarse").style.display = "none";
    document.getElementById("Pregunta").style.display = "none";
    document.getElementById("Noquedarse").style.display = "none";
}





//comprar varios cartones extra
//que suene bingo
//hacer efecto de click al boton


