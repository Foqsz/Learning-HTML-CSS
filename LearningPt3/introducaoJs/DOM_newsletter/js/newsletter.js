const txtEmail = document.getElementById("txtEmail");
const msgFeedback = document.getElementById("newsletterFeedback");


function cadastrarEmail()
{
    let email = txtEmail.value;
    if(!email.includes("@"))
    {
        msgFeedback.innerHTML = "Por favor, insira um email válido.";
        return;
    }
    msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso!`;
} 