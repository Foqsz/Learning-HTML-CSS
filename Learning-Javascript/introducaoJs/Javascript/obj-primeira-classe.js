function fn(cb){
    console.log('Executando a função callback');
    console.log(typeof cb);
    cb();
}   

fn(function(){
    console.log('Função por parametro executada');
})