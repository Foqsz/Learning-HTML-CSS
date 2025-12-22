const txtEmail = document.getElementById("txtEmail");
const msgFeedback = document.getElementById("newsletterFeedback");
const btnValue = document.getElementById("btn");

function cadastrarEmail()
{
    let email = txtEmail.value;
    if(!email.includes("@"))
    {
        msgFeedback.innerHTML = "Por favor, insira um email válido.";
        return;
    }

    if(txtEmail.disabled)
    {
        msgFeedback.innerHTML = "";
        txtEmail.disabled = false;
        btnValue.innerHTML = "Enviar";
        txtEmail.focus();
    }
    else{        
        msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso!`;
        txtEmail.disabled = true;
        btnValue.innerHTML = "Editar";
    }
} 