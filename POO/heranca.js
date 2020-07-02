function Animal(tipo) {}

Animal.prototype.andar = function(){
    console.log("Eu animal Ando")
};

function Leao(tipo, acao) {
    this.tipo = tipo;
    this.acao = acao;
    Animal.call(this);
}

Leao.prototype = new Animal();
Leao.prototype.constructor = Leao;

Leao.prototype.rugir = function() {
    console.log(this.tipo, this.acao)
}

const leao = new Leao("carnivoro", "ruuuuuugeeee!!!")
leao.rugir()

