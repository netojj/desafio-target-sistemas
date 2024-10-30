const calcularPercentualFaturamento = () => {

    const faturamentoPorEstado = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };
    
    const valorTotal = Object.values(faturamentoPorEstado)
        .reduce((acc, valor) => acc + valor, 0);

    const percentuais = {};
    for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
        const percentual = (valor / valorTotal) * 100;
        percentuais[estado] = percentual.toFixed(2);
    }

    console.log('Percentual de representação por estado:');
    for (const [estado, percentual] of Object.entries(percentuais)) {
        console.log(`${estado}: ${percentual}%`);
    }
    
    return percentuais;
};

calcularPercentualFaturamento();