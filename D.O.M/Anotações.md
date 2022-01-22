# Aula Sobre como Manipular o D.O.M com Javascript

    DOM - É um padrão de como modificar os elementos HTML de uma página
    BOM - Tudo o que está dentro do objeto window

# Métodos

    document.createElement(Element) - Criar um Novo Elemento Html

    document.removeChild(Element) - Remove um Elemento

    document.appendChild(Element) - Adiciona um Elemento

    document.replaceChild(new, old) - Substitui um Elemento

# Estilos

    Manipulando as classes

        const meu-Elemento = document.getElementsById("meuElement");

        meuElement.classList.add("nomeClass") - Adiciona uma nova class
        meuElement.classList.remove("nomeclass") - Remove uma class existente
        meuElement.classList.toggle9("nomeClass") - Adiciona a classe caso não faça parte da lista e 
        removerá caso já faça parte.


    Adicionado Css aos elementos com Javascript

    
        document.getElementsByTagName("p").style.color = "blue"; - Adiciona a Cor Azul ao elemento "p" do arquivo html


# Eventos

    Tipos

        Eventos do Mouse - mouseOver, mouseOut
        Eventos de clique - click, dbclick
        Eventos de Atualização - Change, load

    Adiciona Eventos

        addEventListener("click", outraFuncao);

    Atribuindo no Html

        onClick - Chamada do evento direto no arquivo html

# Atividade Prática

    Criar uma página que mudar o estilo por um evento de click


