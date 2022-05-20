var ctx = document.getElementsByClassName("line-chart2");
//Type, Data e Options
var chartGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
        datasets: [{
            label: 'VENDA ESTIMADA SEMANAL',
            data: ['8', '11', '10', '5', '9', '7', "12"],
            borderWidth: 6,
            borderColor: 'rgba(230, 6, 9, 0.85)',
            backgroundColor: 'transparent',
        }
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
        },
        labels: {
            fontStyle: "bold",
        }
    }
});