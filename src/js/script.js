const containerLogin = document.querySelector('.wrapper');

const containerCadastro = document.querySelector('.conteudo-cadastrar');

let btnRegister = document.querySelector('.btnRegister');
btnRegister.addEventListener('click', ()=>{
    containerCadastro.style.display= 'block';
    containerLogin.style.display='none';
});


let btnLogin=document.querySelector('.btnLogin');
btnLogin.addEventListener('click', ()=>{
    containerCadastro.style.display = 'none';
    containerLogin.style.display= 'block';
});