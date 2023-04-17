function calc() {

    //      calculo de bascara       // 

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = document.getElementById("num3").value;

    let delta = ((b * b) - 4 * a * c);
    let positivo = (-b + Math.sqrt(delta)) / 2 * a;
    let negativo = (-b - Math.sqrt(delta)) / 2 * a;


    if (!a || !b || !c) {
        alert("Insira os valores nas caixas de texto");
        return;
    } else if (delta < 0) {
        alert("a raiz não será real");
        return;
    } else if (positivo == NaN || negativo == NaN) {
        alert("Raiz indefinida");
        return;
    }

    
    //          Par ou Impar        //
    
    if (negativo % 2 == 0) {
        let parrr = `número é par`;
        document.getElementById("negativo").innerHTML = `O resultado usando as incognitas é: ${negativo} ${parrr}`;
        document.getElementById("positivo").innerHTML = `O resultado usando as incognitas é: ${positivo} ${parrr}`;
    }
    else {
        let parrr = `número é par`;
        document.getElementById("negativo").innerHTML = `O resultado usando as incognitas é: ${negativo} ${parrr}`;
        document.getElementById("positivo").innerHTML = `O resultado usando as incognitas é: ${positivo} ${parrr}`;
    }

    //      Maior X' Menor X"     //

    if (positivo < negativo) {  
        document.getElementById("maiormenor").innerHTML = ` X' = ${negativo} ,  X" = ${positivo}`
    }
    if (positivo > negativo) {  
        document.getElementById("maiormenor").innerHTML = ` X" = ${negativo} ,  X' = ${positivo}`
    }
}