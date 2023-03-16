class AlunoControlador {
    constructor() {
        this.alunoServico = new AlunoServico();
    }

    inserir() {
        const nomeAluno = document.querySelector("#nome").value;
        const idadeAluno = Number(document.querySelector("#idade").value);
        const aluno = this.alunoServico.inserir(nomeAluno, idadeAluno);
        if (aluno) {
            this.mostrarDisciplinaNoHTML(nomeAluno, idadeAluno);
            alert('Aluno inserido com sucesso!');
        } else {
            alert('Aluno menor de idade não permitido!');
        }
    }

    mostrarDisciplinaNoHTML(nome, idade) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nome} - ${idade}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerAlunoDaLista(nome);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerAlunoDaLista(nome) {
        this.alunoServico.remover(nome);
    }

}

//
//
//
// for (let aluno of alunos) {
//     // colocar no html nome - idade
//     mostrarDisciplinaNoHTML(aluno.nome, aluno.idade);
// }
//
// function inserirAluno() {
// }
//
//

