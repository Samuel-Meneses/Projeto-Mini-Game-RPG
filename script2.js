// ============================================================
// 🎮 MINI GAME RPG - GUERREIRO PROGRAMADOR
// ============================================================


// ============================================================
// 👤 JOGADOR
// ============================================================

let jogador = {
    nome: prompt("⚔️ MINI GAME RPG\n\nDigite o nome do seu guerreiro:"),
    vida: 100,
    ouro: 100,
    fase: 1,
    inventario: []
};


// ============================================================
// ⚔️ EQUIPAMENTOS
// ============================================================

let equipamentos = [

    {
        nome: "Espada",
        tipo: "ataque",
        nivel: 1
    },

    {
        nome: "Escudo",
        tipo: "defesa",
        nivel: 1
    },

    {
        nome: "Armadura",
        tipo: "vida",
        nivel: 1
    }

];


// ============================================================
// 👹 INIMIGOS
// ============================================================

let inimigos = [

    {
        fase: 1,
        nome: "Lobo de Código",
        vida: 30,
        ataque: 2,
        recompensa: 30
    },

    {
        fase: 2,
        nome: "Goblin do CSS",
        vida: 50,
        ataque: 4,
        recompensa: 50
    },

    {
        fase: 3,
        nome: "Ogro dos Loops",
        vida: 70,
        ataque: 6,
        recompensa: 70
    },

    {
        fase: 4,
        nome: "Cavaleiro do JavaScript",
        vida: 90,
        ataque: 8,
        recompensa: 100
    },

    {
        fase: 5,
        nome: "Rei do JavaScript",
        vida: 120,
        ataque: 10,
        recompensa: 200
    }

];


// ============================================================
// 🧠 BANCO DE PERGUNTAS
// ============================================================

let perguntas = [

    // ========================================================
    // NÍVEL 1 - BÁSICO
    // ========================================================

    {
        id: 1,
        nivel: 1,
        assunto: "HTML",
        pergunta: "Qual tag é usada para criar o maior título em HTML?",
        alternativas: [
            "A) <p>",
            "B) <h1>",
            "C) <title>",
            "D) <header>"
        ],
        resposta: "B"
    },

    {
        id: 2,
        nivel: 1,
        assunto: "CSS",
        pergunta: "Qual propriedade CSS altera a cor do texto?",
        alternativas: [
            "A) background",
            "B) font-size",
            "C) color",
            "D) text-style"
        ],
        resposta: "C"
    },

    {
        id: 3,
        nivel: 1,
        assunto: "JavaScript",
        pergunta: "Qual palavra-chave pode ser usada para criar uma variável que pode receber outro valor?",
        alternativas: [
            "A) let",
            "B) const",
            "C) static",
            "D) define"
        ],
        resposta: "A"
    },

    {
        id: 4,
        nivel: 1,
        assunto: "HTML",
        pergunta: "Qual tag cria um parágrafo?",
        alternativas: [
            "A) <text>",
            "B) <paragraph>",
            "C) <p>",
            "D) <pg>"
        ],
        resposta: "C"
    },

    {
        id: 5,
        nivel: 1,
        assunto: "JavaScript",
        pergunta: "Qual comando mostra uma informação no console?",
        alternativas: [
            "A) print()",
            "B) console.log()",
            "C) show()",
            "D) display()"
        ],
        resposta: "B"
    },


    // ========================================================
    // NÍVEL 2 - BÁSICO / INTERMEDIÁRIO
    // ========================================================

    {
        id: 6,
        nivel: 2,
        assunto: "HTML",
        pergunta: "Qual atributo é usado para indicar o endereço de uma imagem na tag img?",
        alternativas: [
            "A) href",
            "B) link",
            "C) src",
            "D) url"
        ],
        resposta: "C"
    },

    {
        id: 7,
        nivel: 2,
        assunto: "CSS",
        pergunta: "Qual propriedade transforma um elemento em um container flexível?",
        alternativas: [
            "A) position: flex",
            "B) display: flex",
            "C) flex: true",
            "D) layout: flex"
        ],
        resposta: "B"
    },

    {
        id: 8,
        nivel: 2,
        assunto: "JavaScript",
        pergunta: "Qual operador verifica igualdade de valor e tipo?",
        alternativas: [
            "A) ==",
            "B) =",
            "C) ===",
            "D) !=="
        ],
        resposta: "C"
    },

    {
        id: 9,
        nivel: 2,
        assunto: "JavaScript",
        pergunta: "Qual estrutura é usada para repetir código enquanto uma condição for verdadeira?",
        alternativas: [
            "A) if",
            "B) while",
            "C) switch",
            "D) find"
        ],
        resposta: "B"
    },

    {
        id: 10,
        nivel: 2,
        assunto: "CSS",
        pergunta: "Qual propriedade altera o tamanho da fonte?",
        alternativas: [
            "A) text-size",
            "B) font-size",
            "C) size",
            "D) font-height"
        ],
        resposta: "B"
    },


    // ========================================================
    // NÍVEL 3 - INTERMEDIÁRIO
    // ========================================================

    {
        id: 11,
        nivel: 3,
        assunto: "JavaScript",
        pergunta: "Qual método adiciona um elemento ao final de um array?",
        alternativas: [
            "A) add()",
            "B) insert()",
            "C) push()",
            "D) append()"
        ],
        resposta: "C"
    },

    {
        id: 12,
        nivel: 3,
        assunto: "JavaScript",
        pergunta: "O que o método find() faz?",
        alternativas: [
            "A) Remove todos os elementos",
            "B) Retorna o primeiro elemento que atende à condição",
            "C) Modifica todos os elementos",
            "D) Ordena o array"
        ],
        resposta: "B"
    },

    {
        id: 13,
        nivel: 3,
        assunto: "JavaScript",
        pergunta: "Qual método cria um novo array transformando cada elemento?",
        alternativas: [
            "A) filter()",
            "B) find()",
            "C) map()",
            "D) push()"
        ],
        resposta: "C"
    },

    {
        id: 14,
        nivel: 3,
        assunto: "JavaScript",
        pergunta: "Qual método retorna apenas os elementos que atendem a uma condição?",
        alternativas: [
            "A) filter()",
            "B) map()",
            "C) find()",
            "D) forEach()"
        ],
        resposta: "A"
    },

    {
        id: 15,
        nivel: 3,
        assunto: "JavaScript",
        pergunta: "Qual método percorre os elementos de um array sem criar um novo array?",
        alternativas: [
            "A) map()",
            "B) forEach()",
            "C) filter()",
            "D) find()"
        ],
        resposta: "B"
    },


    // ========================================================
    // NÍVEL 4 - AVANÇADO
    // ========================================================

    {
        id: 16,
        nivel: 4,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\nlet numeros = [1, 2, 3, 4];\nlet resultado = numeros.filter(n => n % 2 === 0);",
        alternativas: [
            "A) [1, 3]",
            "B) [2, 4]",
            "C) [1, 2, 3, 4]",
            "D) [4]"
        ],
        resposta: "B"
    },

    {
        id: 17,
        nivel: 4,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\nlet numeros = [1, 2, 3];\nlet resultado = numeros.map(n => n * 2);",
        alternativas: [
            "A) [1, 2, 3]",
            "B) [2, 3, 4]",
            "C) [2, 4, 6]",
            "D) [1, 4, 9]"
        ],
        resposta: "C"
    },

    {
        id: 18,
        nivel: 4,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\nlet numeros = [10, 20, 30];\nlet numero = numeros.find(n => n > 15);",
        alternativas: [
            "A) 10",
            "B) 15",
            "C) 20",
            "D) 30"
        ],
        resposta: "C"
    },

    {
        id: 19,
        nivel: 4,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\nlet numeros = [1, 2, 3, 4];\nlet resultado = numeros.filter(n => n > 2).map(n => n * 10);",
        alternativas: [
            "A) [10, 20]",
            "B) [30, 40]",
            "C) [2, 3, 4]",
            "D) [20, 30, 40]"
        ],
        resposta: "B"
    },

    {
        id: 20,
        nivel: 4,
        assunto: "JavaScript",
        pergunta: "Em um for...of, o que é percorrido?",
        alternativas: [
            "A) Os índices do array",
            "B) Os valores do array",
            "C) Apenas objetos",
            "D) Apenas strings"
        ],
        resposta: "B"
    },


    // ========================================================
    // NÍVEL 5 - BOSS FINAL
    // ========================================================

    {
        id: 21,
        nivel: 5,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\nlet numeros = [1, 2, 3, 4];\nlet resultado = numeros.filter(n => n % 2 === 0).map(n => n * 2);",
        alternativas: [
            "A) [1, 2, 3, 4]",
            "B) [2, 4]",
            "C) [4, 8]",
            "D) [2, 4, 6, 8]"
        ],
        resposta: "C"
    },

    {
        id: 22,
        nivel: 5,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\nlet usuarios = [\n    { nome: 'Ana', idade: 20 },\n    { nome: 'João', idade: 17 },\n    { nome: 'Carlos', idade: 25 }\n];\n\nlet resultado = usuarios.filter(usuario => usuario.idade >= 18);",
        alternativas: [
            "A) Apenas João",
            "B) Ana e Carlos",
            "C) João e Carlos",
            "D) Todos"
        ],
        resposta: "B"
    },

    {
        id: 23,
        nivel: 5,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\nlet numeros = [5, 10, 15];\nlet numero = numeros.find(n => n > 7);",
        alternativas: [
            "A) 5",
            "B) 7",
            "C) 10",
            "D) 15"
        ],
        resposta: "C"
    },

    {
        id: 24,
        nivel: 5,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\nlet nomes = ['Ana', 'João', 'Carlos'];\nlet resultado = nomes.map(nome => nome.toUpperCase());",
        alternativas: [
            "A) ['Ana', 'João', 'Carlos']",
            "B) ['ANA', 'JOÃO', 'CARLOS']",
            "C) ['ana', 'joão', 'carlos']",
            "D) undefined"
        ],
        resposta: "B"
    },

    {
        id: 25,
        nivel: 5,
        assunto: "JavaScript",
        pergunta: "Qual será o resultado?\n\n let numeros = [2, 4, 6];\nlet resultado = [];\n\nfor (let numero of numeros) {\n    resultado.push(numero * 2);\n}",
        alternativas: [
            "A) [2, 4, 6]",
            "B) [4, 8, 12]",
            "C) [2, 8, 18]",
            "D) []"
        ],
        resposta: "B"
    }

];


// ============================================================
// 🧰 FUNÇÃO PARA MOSTRAR EQUIPAMENTOS
// ============================================================

function mostrarEquipamentos() {
    alert(
        equipamento.nome +
        " | Tipo: " +
        equipamento.tipo +
        " | Nível: " +
        equipamento.nivel
    );

    equipamentos.forEach(function(equipamento) {

        console.log(
            equipamento.nome +
            " | Tipo: " +
            equipamento.tipo +
            " | Nível: " +
            equipamento.nivel
        );

    });

}


// ============================================================
// 📊 FUNÇÃO PARA PEGAR OS NÍVEIS DOS EQUIPAMENTOS PARA DEPOIS VERIFICAR COM O INIMIGO/PERGUNTA


function pegarNiveis() {

    return equipamentos.map(function(equipamento) {
        return equipamento.nivel;
    });

}


// ============================================================
// 🔎 FUNÇÃO PARA VERIFICAR O MENOR NÍVEL DO JOGADOR

function menorNivelEquipamento() {

    let niveis = pegarNiveis();

    let menor = niveis[0];

    for (nivel of niveis) {

        if (nivel < menor) {
            menor = nivel;
        }

    }

    return menor;
}


// ============================================================
// 🔐 FUNÇÃO PARA VERIFICAR SE O JOGADOR PODE ENTRAR NA FASE COM O BIVEL DA FASE

function podeEntrarNaFase() {

    let nivelNecessario = jogador.fase;

    let equipamentosAbaixo = equipamentos.filter(function(equipamento) {

        return equipamento.nivel < nivelNecessario;

    });

    return equipamentosAbaixo.length === 0;

}


// ============================================================
//  FUNÇÃO PARA MELHORAR EQUIPAMENTO LA NO FERREIRO

function melhorarEquipamento(nome) {

    let equipamento = equipamentos.find(function(item) {

        return item.nome === nome;

    });


    if (!equipamento) {

        alert("Equipamento não encontrado.");

        return;

    }


    let custo = equipamento.nivel * 20;


    if (jogador.ouro >= custo) {

        jogador.ouro -= custo;

        equipamento.nivel++;

        if (equipamento.nivel > 5) {

            equipamento.nivel = 5;

            jogador.ouro += custo;

            alert(
                "⚠️ " + equipamento.nome +
                " já está no nível máximo!"
            );

            return;
        }


        alert(
            "🔨 EQUIPAMENTO MELHORADO!\n\n" +
            equipamento.nome +
            "\n" +
            "Novo nível: " +
            equipamento.nivel +
            "\n\n" +
            "💰 Ouro restante: " +
            jogador.ouro
        );

    } else {

        alert(
            "💰 Ouro insuficiente!\n\n" +
            "Custo: " + custo +
            "\n" +
            "Seu ouro: " + jogador.ouro
        );

    }

}


// ============================================================
// FUNÇÃO PARA REDUZIR EQUIPAMENTOS QUANDO PERDE UM DUELO

function reduzirEquipamentos() {

    equipamentos.forEach(function(equipamento) {

        if (equipamento.nivel > 1) {

            equipamento.nivel--;

        }

    });

}


// ============================================================
// FUNÇÃO PARA AUMENTAR EQUIPAMENTOS DEPOIS DE UMA VITORIA

function aumentarEquipamentos() {

    equipamentos.forEach(function(equipamento) {

        if (equipamento.nivel < 5) {

            equipamento.nivel++;

        }

    });

}


// ============================================================
// FUNÇÃO PARA PEGAR PERGUNTAS DE UM NÍVEL DE ACORDO COM O NIVEL DO JOGADOR

function pegarPerguntasPorNivel(nivel) {

    return perguntas.filter(function(pergunta) {

        return pergunta.nivel === nivel;

    });

}


// ============================================================
//  FUNÇÃO PARA FAZER UMA PERGUNTA

function fazerPergunta(pergunta) {

    let texto = "";

    texto += pergunta.assunto + "\n\n";

    texto += pergunta.pergunta + "\n\n";

    for (let alternativa of pergunta.alternativas) {

        texto += alternativa + "\n";

    }


    let respostaJogador = prompt(texto);

    if (!respostaJogador) {

        return false;

    }

//TRANSFORMA TUDO EM MAIUSCULA E RETIRA OS ESPAÇOS VAZIOS
    respostaJogador = respostaJogador.toUpperCase().trim(); 


    return respostaJogador === pergunta.resposta;

}


// ============================================================
// FUNÇÃO PARA BATALHA AQUI O JOGADOR TEM QUE ESTA NO MESMO NIVEL E AQUI TAMBEM SERIA A INTERFACE DO JOGO

function batalhar() {

    let inimigo = inimigos.find(function(item) {

        return item.fase === jogador.fase;

    });


    if (!inimigo) {

        alert("Inimigo não encontrado.");

        return false;

    }


    alert(
        "⚔️ BATALHA!\n\n" +
        "Você enfrentará:\n\n" +
        "👹 " + inimigo.nome +
        "\n❤️ Vida: " + inimigo.vida +
        "\n⚔️ Ataque: " + inimigo.ataque +
        "\n\n" +
        "Responda corretamente para vencer!"
    );


    let perguntasNivel = pegarPerguntasPorNivel(jogador.fase);


    let acertos = 0;

    let perguntasUsadas = [];


    for (let i = 0; i < 3; i++) {

        let pergunta;

        do {

            let indice = Math.floor(
                Math.random() * perguntasNivel.length
            );

            pergunta = perguntasNivel[indice];

        } while (
            perguntasUsadas.includes(pergunta.id)
        );


        perguntasUsadas.push(pergunta.id);


        let acertou = fazerPergunta(pergunta);


        if (acertou) {

            acertos++;

            alert("✅ RESPOSTA CORRETA!");

        } else {

            alert(
                "❌ RESPOSTA ERRADA!\n\n" +
                "A resposta correta era: " +
                pergunta.resposta
            );

        }

    }


    alert(
        "⚔️ RESULTADO DA BATALHA\n\n" +
        "Acertos: " + acertos + "/3"
    );


    if (acertos >= 2) {

        alert(
            "🏆 VOCÊ DERROTOU " +
            inimigo.nome.toUpperCase() +
            "!"
        );


        jogador.ouro += inimigo.recompensa;


        aumentarEquipamentos();


        jogador.inventario.push(
            "Recompensa da fase " + jogador.fase
        );


        alert(
            "🎁 RECOMPENSAS\n\n" +
            "💰 Ouro recebido: " +
            inimigo.recompensa +
            "\n\n" +
            "⚔️ Seus equipamentos aumentaram de nível!"
        );


        if (jogador.fase === 5) {

            alert(
                "👑 VITÓRIA FINAL!\n\n" +
                "Você derrotou o REI DO JAVASCRIPT!\n\n" +
                "🏆 Você completou o Mini Game RPG!"
            );

            return "final";

        }


        jogador.fase++;


        alert(
            "🚀 NOVA FASE!\n\n" +
            "Você avançou para a fase " +
            jogador.fase + "!"
        );


        return true;

    } else {

        reduzirEquipamentos();


        alert(
            "💀 VOCÊ PERDEU A BATALHA!\n\n" +
            "Seus equipamentos perderam 1 nível.\n\n" +
            "Você poderá treinar ou melhorar seus equipamentos."
        );


        return false;

    }

}


// ============================================================
// TREINAMENTO PARA EVOLUIR OS EQUIPAMENTOS

function treinamento() {

    let nivel = menorNivelEquipamento();


    let perguntasNivel = pegarPerguntasPorNivel(nivel);


    let pergunta =
        perguntasNivel[
            Math.floor(Math.random() * perguntasNivel.length)
        ];


    alert(
        "🧠 TREINAMENTO\n\n" +
        "Responda uma pergunta de nível " +
        nivel +
        " para tentar melhorar um equipamento."
    );


    let acertou = fazerPergunta(pergunta);


    if (acertou) {

        let escolha = prompt(
            "✅ RESPOSTA CORRETA!\n\n" +
            "Qual equipamento deseja melhorar?\n\n" +
            "1 - Espada\n" +
            "2 - Escudo\n" +
            "3 - Armadura"
        );


        switch (escolha) {

            case "1":

                melhorarEquipamento("Espada");

                break;


            case "2":

                melhorarEquipamento("Escudo");

                break;


            case "3":

                melhorarEquipamento("Armadura");

                break;


            default:

                alert("❌ Opção inválida.");

        }

    } else {

        alert(
            "❌ Você errou!\n\n" +
            "Continue estudando e tente novamente."
        );

    }

}


// ============================================================
// STATUS

function mostrarStatus() {

    let texto = "";

    texto += "=================================\n";
    texto += "🧙 GUERREIRO\n";
    texto += "=================================\n\n";

    texto += "👤 Nome: " + jogador.nome + "\n";
    texto += "❤️ Vida: " + jogador.vida + "\n";
    texto += "💰 Ouro: " + jogador.ouro + "\n";
    texto += "🏰 Fase: " + jogador.fase + "/5\n\n";

    texto += "⚔️ EQUIPAMENTOS\n\n";


    equipamentos.forEach(function(equipamento) {

        texto +=
            equipamento.nome +
            ": nível " +
            equipamento.nivel +
            "\n";

    });


    texto += "\n🎒 INVENTÁRIO\n\n";


    if (jogador.inventario.length === 0) {

        texto += "Inventário vazio. Você não venceu nenhuma batalha";

    } else {

        for (let item of jogador.inventario) {

            texto += "• " + item + "\n";

        }

    }


    alert(texto);

}


// ============================================================
//  FERREIRO

function ferreiro() {

    let continuar = true;


    while (continuar) {

        let escolha = prompt(
            "🔨 FERREIRO\n\n" +
            "Use seu ouro para melhorar os equipamentos\n\n" +

            "Seu estoque:\n" +
            "💰 Ouro: " +
            jogador.ouro +
            "\n\n" +

            "1 - Melhorar Espada\n" +
            "2 - Melhorar Escudo\n" +
            "3 - Melhorar Armadura\n" +
            "4 - Ver equipamentos\n" +
            "5 - Sair"
        );


        switch (escolha) {

            case "1":

                melhorarEquipamento("Espada");

                break;


            case "2":

                melhorarEquipamento("Escudo");

                break;


            case "3":

                melhorarEquipamento("Armadura");

                break;


            case "4":

                mostrarEquipamentos();

                break;


            case "5":

                continuar = false;

                break;


            default:

                alert("❌ Opção inválida.");

        }

    }

}


// ============================================================
// 🏰 ENTRAR NA FASE

function entrarNaFase() {

    let nivelNecessario = jogador.fase;


    if (!podeEntrarNaFase()) {

        let faltando = equipamentos.filter(function(equipamento) {

            return equipamento.nivel < nivelNecessario;

        });


        let mensagem = "";

        mensagem +=
            "🚫 VOCÊ NÃO PODE ENTRAR NA FASE " +
            jogador.fase +
            "\n\n";

        mensagem +=
            "Nível necessário: " +
            nivelNecessario +
            "\n\n";

        mensagem +=
            "Equipamentos abaixo do nível:\n\n";


        faltando.forEach(function(equipamento) {

            mensagem +=
                "❌ " +
                equipamento.nome +
                " - nível " +
                equipamento.nivel +
                "\n";

        });


        alert(mensagem);

        return;

    }


    batalhar();

}


// ============================================================
// EXIBIR INTRODUÇÃO

alert(
    "⚔️ MINI GAME RPG\n\n" +

    "GUERREIRO PROGRAMADOR\n\n" +

    "Você deverá enfrentar 5 inimigos.\n\n" +

    "Para vencer as batalhas, você precisará\n" +
    "responder perguntas de programação.\n\n" +

    "Quanto maior a fase,\n" +
    "maior será a dificuldade.\n\n" +

    "Boa sorte, guerreiro!"
);


// ============================================================
// LOOP PRINCIPAL DO JOGO INTERFACE

let jogando = true;


while (jogando) {

    let escolha = prompt(

        "=================================\n" +
        "⚔️ MINI GAME RPG\n" +
        "=================================\n\n" +

        "👤 " + jogador.nome + "\n" +
        "🏰 Fase: " + jogador.fase + "/5\n" +
        "💰 Ouro: " + jogador.ouro + "\n\n" +

        "1 - ⚔️ Entrar na fase\n" +
        "2 - 🔨 Ferreiro\n" +
        "3 - 🧠 Treinamento\n" +
        "4 - 📊 Status\n" +
        "5 - 🎒 Inventário\n" +
        "6 - ❌ Sair"
    );


    switch (escolha) {

        case "1":

            let resultado = entrarNaFase();

            if (resultado === "final") {

                jogando = false;

            }

            break;


        case "2":

            ferreiro();

            break;


        case "3":

            treinamento();

            break;


        case "4":

            mostrarStatus();

            break;


        case "5":

            let inventarioTexto = "🎒 INVENTÁRIO\n\n";


            if (jogador.inventario.length === 0) {

                inventarioTexto += "Inventário vazio.";

            } else {

                for (let item of jogador.inventario) {

                    inventarioTexto +=
                        "• " + item + "\n";

                }

            }


            alert(inventarioTexto);

            break;


        case "6":

            alert(
                "👋 Jogo encerrado.\n\n" +
                "Até a próxima, guerreiro!"
            );

            jogando = false;

            break;


        default:

            alert(
                "❌ OPÇÃO INVÁLIDA!\n\n" +
                "Escolha uma opção de 1 a 6."
            );

    }

}


alert("=================================)\n" +
"🎮 FIM DO JOGO\n" +
"=================================\n" +

"Jogador:" + jogador.nome + "\n" +
"Fase:" + jogador.fase + "\n" +
"Ouro:" + jogador.ouro + "\n");

mostrarEquipamentos();