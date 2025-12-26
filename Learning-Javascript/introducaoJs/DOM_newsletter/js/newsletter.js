const txtEmail = document.getElementById("txtEmail");
const msgFeedback = document.getElementById("newsletterFeedback");
const btnValue = document.getElementById("btn");

function cadastrarEmail()
{
    let email = txtEmail.value;
    if(!email.includes("@"))
    {
        msgFeedback.textContent = "Por favor, insira um email válido.";
        return;
    }
    msgFeedback.textContent = `O email ${email} foi cadastrado com sucesso!`;
    mudarBtn(); 
} 

function mudarBtn()
{
    if(txtEmail.disabled)
    {
        msgFeedback.textContent = "";
        txtEmail.disabled = false;
        btnValue.textContent = "Enviar";
        txtEmail.focus();
    }
    else{        
        txtEmail.disabled = true;
        btnValue.textContent = "Editar";
    }
}