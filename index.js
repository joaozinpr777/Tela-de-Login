function login(){
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')

    if(senha.value.length == 0 || email.value.length == 0){
        alert('ERRO! preencha os dados e tente novamente!')
    }else{
        if(email.value == 'teste123@gmail.com'){
        if(senha.value == '123456'){
            window.location.replace('posts.html')
        }else{
            alert('Verifique a senha e tente novamente!')
        }}else{
            alert('Verifique o email e tente novamente!')
        }
    }
}
