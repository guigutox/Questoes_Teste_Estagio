const fs = require('fs').promises; 

async function carregarFaturamentos() {
    try {
        const data = await fs.readFile('faturamento.json', 'utf8'); 
        const jsonData = JSON.parse(data); 
        
        
        const faturamentos = [];
        for (const item of jsonData.faturamento_diario) {
            faturamentos.push(item.faturamento);
        }
        
        return faturamentos;
    } catch (error) {
        console.error("Erro ao carregar faturamentos:", error);
    }
}

(async () => {
    let menorFaturamento = 0;
    let maiorFaturamento = 0;
    let totalSomado = 0
    let diasUteis = 0;
    let diasSuperioresMedia = 0;
    const faturamentos = await carregarFaturamentos();
    
    for(let i = 0; i < faturamentos.length; i++){
        if(i == 0){
            maiorFaturamento = faturamentos[i];
            menorFaturamento = faturamentos[i];
        }
        if(faturamentos[i] > maiorFaturamento){
            maiorFaturamento = faturamentos[i];
        }
        if(faturamentos[i] < menorFaturamento && faturamentos[i] != 0){
            menorFaturamento = faturamentos[i];
        }

        totalSomado += faturamentos[i];
        
        if(faturamentos[i] != 0){
            diasUteis++;
        }

    }   

    let mediaFaturamento = totalSomado / diasUteis;

    for(let i = 0; i < faturamentos.length; i++){
        if(faturamentos[i] > mediaFaturamento){
            diasSuperioresMedia++;
        }
    }
    

    console.log("Menor faturamento:", menorFaturamento);
    console.log("Maior faturamento:", maiorFaturamento);
    console.log("Media de faturamento:", mediaFaturamento.toFixed(2));
    console.log("Numero de dias que o faturamento foi superior à media:", diasSuperioresMedia);

})();
