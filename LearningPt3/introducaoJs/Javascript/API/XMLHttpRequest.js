function Conexao(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const resposta = JSON.parse(this.responseText);
            console.log(resposta.title);
        }
        else{
            console.error('Erro na requisição:', this.status);
        }
    }
    xhr.send();
}