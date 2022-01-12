function userInfo() {
    const userEmail = 'igor@gmail.com';
    
     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
     console.log(userEmail);
}
userInfo();