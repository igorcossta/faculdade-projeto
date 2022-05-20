var ctx = document.getElementsByClassName("bar-chart2");

//Type, Data e Options
var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: 'VENDA ESTIMADA NO 2º SEMESTRE',
            data: ['90', '77', '60', '100', '94', '120'],
            borderWidth: 2,
            borderColor: 'rgba(0, 0, 0, 0.85)',
            backgroundColor: 'red',
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
