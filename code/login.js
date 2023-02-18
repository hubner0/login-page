const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

 
  // Aqui você normalmente faria uma chamada de API para um servidor para verificar as credenciais.
  // Para fins deste exemplo, assumiremos que o nome de usuário é "usuario" e a senha é "senha".

  if (username === "usuario" && password === "senha") {
    // Redireciona para a página do painel.
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Usuario Invalido!";
  }
});
