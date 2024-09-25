let faturamentoSP =  67836.43;
let faturamentoRJ =  36678.66;
let faturamentoMG =  29229.88;
let faturamentoES =  27165.48;
let faturamentoOutros = 19849.53;
let faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

function calcularPercentual(){
    let percentualSP = (faturamentoSP / faturamentoTotal) * 100;
    let percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
    let percentualMG = (faturamentoMG / faturamentoTotal) * 100;
    let percentualES = (faturamentoES / faturamentoTotal) * 100;
    let percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

    console.log("São Paulo:", percentualSP.toFixed(2) + "%");
    console.log("Rio de Janeiro:", percentualRJ.toFixed(2) + "%");
    console.log("Minas Gerais:", percentualMG.toFixed(2) + "%");
    console.log("Espírito Santo:", percentualES.toFixed(2) + "%");
    console.log("Outros:", percentualOutros.toFixed(2) + "%");
}

calcularPercentual();