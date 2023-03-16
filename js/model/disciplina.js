class Disciplina {
    constructor(codigo, nome) {
        this._nome = nome;
        this._codigo = codigo;
        this.alunos = new Array()
    }

    inserirAluno(nomeDoAluno, idade) {
        const aluno = new Aluno(nomeDoAluno, idade)
        this.alunos.push(aluno)
    }
    
    removerAluno(nomeDoAluno) {
        const alunoARemover = this.alunos.find(aluno => aluno.nome === nomeDoAluno);
        if (alunoARemover) {
            const indiceAluno = this.alunos.indexOf(alunoARemover);
            if (indiceAluno > -1) {
                this.alunos.splice(indiceAluno, 1);
            }
        }
    }
    
    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

}
