class DisciplinaServico {
    constructor(){
        this.repositorio = new DisciplinaRepositorio()
    }
    inserir() {
        const disciplina = new Disciplina(codigo, nome)
        return this.repositorio.inserir(disciplina)
    }
    remover(nome) {
        this.repositorio.remover(nome)
    }
    listar() {
        this.repositorio.listar()
    }
    buscarPorNome(nome) {
        this.repositorio.buscarPorNome(nome)
    }

    inserirAluno(nomeDisciplina, nome, codigo) {
        const disciplina = this.buscarPorNome(nomeDisciplina)
        if(disciplina !== undefined){
            const newDisciplina = new Disciplina(disciplina.codigo, disciplina.nome)
            newDisciplina.inserirAluno(nome, codigo)
            this.repositorio.remover(disciplina.nome)
            this.repositorio.inserir(newDisciplina)
        }

    }

}
