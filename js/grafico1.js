var ctx = document.getElementsByClassName("line-chart");

//Type, Data e Options
var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: 'VENDA ANUAL EM 2021',
            data: ['50', '99', '47', '33', '110', '90', '80', '155', '210', '333', '244', '277'],
            borderWidth: 6,
            borderColor: 'rgba(7, 16, 253, 0.85)',
            backgroundColor: 'transparent',
        },
        {
            label: 'VENDA ANUAL EM 2020',
            data: ['30', '77', '27', '39', '85', '66', '114', '146', '179', '214', '223', '300'],
            borderWidth: 6,
            borderColor: 'rgba(230, 6, 9, 0.85)',
            backgroundColor: 'transparent',
        },
        ]
    },
    options: {
        scales:{
            y:{
                ticks:{
                    callback: function(value){
                        var finalValue = value.toFixed(3)
                        return 'R$ ' + finalValue.replace('.', ',') + ' Milhões' 
                    }
                }
            }
        },
        title: {
            display: true,
            fontSize: 20,
            text: "RELATÓRIO DE VENDAS ANUAIS"
        },
        labels: {
            fontStyle: "bold",
        }
    }

});