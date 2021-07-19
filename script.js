const button = document.querySelector('button');
button.addEventListener('click', function() {

    const resultadoTela = document.getElementById("resultadoTela");
    resultadoTela.innerHTML = "";
    const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (i = 0; i <= 1000; i++) {
        let a = Math.floor(Math.random() * 13 + 2);
        if (a === 2)
            count[0] = count[0] + 1;
        else if (a === 3)
            count[1] = count[1] + 1;
        else if (a === 4)
            count[2] = count[2] + 1;
        else if (a === 5)
            count[3] = count[3] + 1;
        else if (a === 6)
            count[4] = count[4] + 1;
        else if (a === 7)
            count[5] = count[5] + 1;
        else if (a === 8)
            count[6] = count[6] + 1;
        else if (a === 9)
            count[7] = count[7] + 1;
        else if (a === 10)
            count[8] = count[8] + 1;
        else if (a === 11)
            count[9] = count[9] + 1;
        else if (a === 12)
            count[10] = count[10] + 1;

        console.log(a)
    }
    console.log(count);
    let c = 0;
    let resultadoFinal = "";

    for (let i = 0; i < count.length; i++) {
        c = i + 2;
        resultadoFinal = c + " : " + count[i];

        const resultadoTela = document.getElementById("resultadoTela");
        const resultado = document.createElement("p");
        resultado.innerHTML = resultadoFinal;
        resultadoTela.appendChild(resultado);

        const minhaBarra = document.createElement("p");
        minhaBarra.style.width = `${count[i]}px`;
        minhaBarra.style.height = 30 + "px";
        minhaBarra.style.backgroundColor = "rgb(0, 81, 128)";
        resultadoTela.appendChild(minhaBarra);

    }



});