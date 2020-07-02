// Classes em javascript, não definidas através de funções
const Pessoa = function(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
    console.log("exemplar criado");
};
Pessoa.prototype.dizerOla = function() {
    console.log("Olá", this.nome, this.sobrenome);
};

const pessoa1 = new Pessoa("Diovane", "Maia");
const pessoa2 = new Pessoa("Michele", "Moura");

console.log(pessoa1.nome);
console.log(pessoa2.nome);

console.log(pessoa2.dizerOla());
