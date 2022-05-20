var ctx = document.getElementsByClassName("bar-chart");

//Type, Data e Options
var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
            label: 'VENDA ESTIMADA NO 1º SEMESTRE',
            data: ['60', '46', '77', '88', '66', '90'],
            borderWidth: 2,
            borderColor: 'rgba(0, 0, 0, 0.85)',
            backgroundColor: 'blue',
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

var ctx = document.getElementsByClassName("bar-chart");

//Type, Data e Options
var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: [{
            label: 'VENDA ESTIMADA NO 1º SEMESTRE',
            data: ['60', '46', '77', '88', '66', '90'],
            borderWidth: 2,
            borderColor: 'rgba(0, 0, 0, 0.85)',
            backgroundColor: 'blue',
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

