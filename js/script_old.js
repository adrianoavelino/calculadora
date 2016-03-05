var total = 0;
var operador = '';
var teste = function() {
    if (this.innerHTML > -1 && this.innerHTML < 10) {
        visortemp += this.innerHTML.toString();
        visor.innerHTML = parseInt(visortemp);
        valueTemp = parseInt(visortemp);

        showTotal(total, valueTemp);

    } else if (this.innerHTML == 'C') {
        valueTemp = 0;
        total = 0;
        visortemp = 0;
        visor.innerHTML = '0';
        showTotal(total, valueTemp);
    } else {
        var value = this.innerHTML;

        switch (value) {
            case '+':

                soma = plus(total, valueTemp);
                visor.innerHTML = soma;
                total = soma;
                valueTemp = 0;
                visortemp = 0;
                operador = '+';

                showTotal(total, valueTemp);
                break;

            case '-':
                if (operador != '-') {
                    valueTemp = 0;
                }
                total = visor.innerHTML;

                operador = '-';
                // valueTemp = 0;
                // visortemp = 0;
                showTotal(total, valueTemp);
                break;

            case '=':
                var igual = calcula(total, valueTemp);
                total = igual;
                visor.innerHTML = igual;
                visortemp = 0;

                // operador='';
                showTotal(total, valueTemp);
                break;
            case '/':
                visor.innerHTML = value;
                break;
            default:
                console.log('default');
        }
    }
};

window.onload = function() {

    var btn = document.getElementsByTagName('a');
    var visor = document.querySelector('.visor');
    var valueTemp = 0;
    var visortemp = 0;

    // cria evento de clique para os m=numeros
    for (var i = 0; i < btn.length; i++) {
        btn[i].onclick = teste;
    }
};

function showTotal(total, valueTemp) {
    console.log('valor total = ' + total);
    console.log('valor valueTemp = ' + valueTemp);
}

var plus = function(total, n) {
    return total + n;
};

var menos = function(total, valueTemp) {
    return valueTemp - total;
};

var calcula = function(total, valueTemp) {
    // verifica o operador
    switch (operador) {
        case '+':
            var soma = plus(total, valueTemp);
            break;
            return soma;



        case '-':
            total = valueTemp;
            var m = menos(total, valueTemp);
            return m;
            break;

        default:
            console.log('eeeeee');
            return total;
    }

};
