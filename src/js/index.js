function generateNumber() {

    const esquerda = Math.ceil(document.querySelector(".caixa-esquerda").value)
    const direita = Math.floor(document.querySelector(".caixa-direita").value)

    if (direita > esquerda) {
        const result = Math.floor(Math.random() * (direita - esquerda + 1)) + esquerda;

        alert(result)
    } else {
        alert("O valor minimo tem que ser MENOR que o valor máximo.")
    }   
}