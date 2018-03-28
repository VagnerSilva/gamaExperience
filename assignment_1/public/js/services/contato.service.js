

class ContatoService {



    constructor() {
        this.db = firebase.database();
        this.obterContatos();
    }


// adicionar dados no firebase via firebase.database
    async addContato(contato) {
        let contatos = [];

        let novoContato = Object.assign({}, contato);
        this.db.ref().child("/lista/contatos").push(novoContato);
    }

    // obter dados do firebase via request
    async obterContatos() {

        const http = new XMLHttpRequest();
        const url = 'https://gama-assignment-1-d87a1.firebaseio.com/lista/contatos.json?print=pretty;'

        http.open('GET', url, false);
        http.send();

        return http.responseText;;
    }



}
