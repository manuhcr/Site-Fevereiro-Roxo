// 🔹 Função que revela os elementos
function revelar() {
    // pega todos os elementos que devem animar
    let elementos = document.querySelectorAll(".reveal");



    // percorre cada elemento
    for (i = 0; i < elementos.length; i++) {
        //pega cada el (cada índice de reveal (cada elemento da pagina))
        let el = elementos[i];
        // Distância do topo do elemento até o topo da tela
        let topo = el.getBoundingClientRect().top;

        // Distância da parte de baixo do elemento até o topo da tela
        let baixo = el.getBoundingClientRect().bottom;

        /*  
          Exemplos:
          - topo = 200 → topo do elemento está 200px abaixo do topo da tela
          - topo = -50 → topo do elemento já passou 50px pra cima (rolou pra fora)
          - baixo = 800 → fundo do elemento está 800px abaixo do topo da tela
          - baixo = 400 → fundo do elemento está dentro da tela
        */
        // altura visível da tela
        let alturaTela = window.innerHeight;
        /*se o elemento está dentro da tela (o topo for menor que a altura da tela - 
        40px e a parte de baixo for menor que 40px)*/
        if (topo < alturaTela - 40 && baixo > 40) {
            //adiciona a classe active a cada el (i) e faz uma animação de atraso multiplicando cada i por 150ms
            setTimeout(() => {
                el.classList.add("active");
            }, i * 150);
        } else {
            // se saiu da tela, tira a classe
            el.classList.remove("active");
        } {

        }
    }
}

// 🔹 Executa a função sempre que rolar a página
window.addEventListener("scroll", revelar);

// 🔹 Executa também quando a página carregar
revelar();

