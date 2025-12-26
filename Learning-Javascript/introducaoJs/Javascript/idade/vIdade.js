let idade = Number(prompt("Digite sua idade:"));

let body = document.body;
let msg = document.getElementById("message");

if(idade <= 18)
{
    body.style.background = "red";
    msg.style.fontSize = "xx-large";
    msg.style.color = "Cornsilk";
    msg.innerHTML = `Você tem ${idade} anos. Você é menor de idade.`;
}
else
{
    body.style.background = "green";
    msg.style.fontSize = "xx-large";
    msg.style.color = "Cornsilk";
    msg.innerHTML = `Você tem ${idade} anos. Você é maior de idade.`;
}