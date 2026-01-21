function quantoFaltaPara(m, d) {
    const dateHoje = new Date();
    const anoAtual = dateHoje.getFullYear();
    const dataAniversario = new Date(anoAtual, m - 1, d);

    if(dataAniversario.getDate() === dateHoje.getDate() && 
    dataAniversario.getMonth() === dateHoje.getMonth())
    {
        return "Feliz Aniversário!";
    }
    
    if (dataAniversario < dateHoje) {
        dataAniversario.setFullYear(anoAtual + 1);
    }

    const diferencaEmMs = dataAniversario - dateHoje;
    const umDiaEmMs = 1000 * 60 * 60 * 24;
    const diasFaltando = Math.ceil(diferencaEmMs / umDiaEmMs);

    return diasFaltando;
}
