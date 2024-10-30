let bancoDeDados = [];
function add(){
    // let usuario = document.getElementById("username").value;
    // let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    let usuario = {
        username:document.getElementById('username').value,
        password:document.getElementById('senha').value
    }
    if(autentica(usuario.username) == false) {
    bancoDeDados.push(usuario);
    alert("Usuário Cadastrado");
    document.getElementById("username").value = null;
    document.getElementById("senha").value = null;
    }
    else{
        alert("Esse usuário já foi Cadastrado")
    }
}
function login(){
    let usuario = document.getElementById("user").value; 
    //  let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(autentica(usuario) == false){
        alert("Usuário não encontrado");
    }
    else{
        alert("Bem vindo ao sistema!")
    }
    document.getElementById('user').value = null;
}
function remove(){
    let usuario = document.getElementById("userDelete").value; 
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("Não foi encontrado um usuário com o nome: "+usuario)
    }
    else{
        bancoDeDados.splice(pos, 1)
        alert("Usuário excluído com sucesso")
}
document.getElementById("userDelete").value = null;
}
function edit(){
    let edit = document.getElementById("userEdit").value;   //Puxar valor do Imput
    let pos = bancoDeDados.indexOf(edit.toUpperCase())              //Retorna a posição do imput
    if(pos == -1){
        alert("Não há nada para ser editado")
    }else{
        let sub = prompt("Digite a correção do item").toUpperCase();          //Sub = Valor do prompt
        bancoDeDados[pos] = sub;
        alert("Usuário alterado com sucesso!")
    }
    document.getElementById("userEdit").value = null;
}
function existe(username){
    for(let usuario of bancoDeDados){
    // let pos = bancoDeDados.indexOf(username.toUpperCase());
    if(usuario.username == username){
        return false;
    }
    }
    return false;
    
}
function autentica(username, password){
    for(let usuario of bancoDeDados){
        if(usuario.username == username && usuario.password == password){
            return true;
        }
    }
    return false;
}
