/*jslint nomen: true */
window.onload = function () {

    
    'use strict';
    
    var visor = document.getElementById('tela'),
        btn = document.querySelectorAll("input[type=button]"),
        getValueOfButton = function (elem) {
            return elem.value;
        },
        createCalcular = function () {
            var _total = 0,
                _calculating = false,
                _operators = ['+', '-', '*', '/', '=', 'C'],
                _lastOperator = '+',
                _temp;

            return {
                setTemp: function (valor) {
                    _temp = valor;
                    return _temp;
                },
                getTemp: function () {
                    return _temp;
                },
                getTotal: function () {
                    return _total;
                },
                setTotal: function (total) {
                    _total = +(total);
                },
                addition: function (total, valor) {
                    _total = (+total) + (+valor);
                    return _total;
                },
                subtract: function (total, valor) {
                    _total = (+total) - (+valor);
                    return _total;
                },
                calculateTotal: function (valor) {
                    if (_lastOperator == '+') {
                        this.setLastOperator('+');
                    } else if (_lastOperator == '-') {
                        this.setLastOperator('-');
                    }
                },
                setCalculating: function (bool) {
                    _calculating = bool;
                },
                hasCalculating: function () {
                    return _calculating;
                },
                setLastOperator: function (operator) {
                    _lastOperator = operator;
                },
                getLastOperator: function () {
                    return _lastOperator;
                },
                isOperator: function (operator) {
                    return (_operators.indexOf(operator) !== -1)? true : false;
                },
                isNumeric: function (number) {
                    return (/^[0-9]+$/.test(+number));
                }
            };
        };

    var calcular = createCalcular();


    // cria evento dos botões
    for (var i = 0; i < btn.length; i++) {

        btn[i].onclick = function(){

          if (calcular.isOperator(getValueOfButton(this))) {
            if (getValueOfButton(this) == 'C') {
              console.log('pressionou o C');
              visor.value = 0;
              calcular.setTotal(0);

            }

            if (getValueOfButton(this) == '+') {
              if (calcular.hasCalculating()) {
                calcular.setLastOperator('+');
                console.log('nao esta calculando ...');
                console.log(calcular.getLastOperator());
                return false;
              }

              calcular.calculateTotal(+visor.value);
              calcular.setCalculating(true);
              calcular.setLastOperator('+');
              visor.value = calcular.getTotal();

            } else if (getValueOfButton(this) == '-') {

              if (calcular.hasCalculating()) {
                calcular.setLastOperator('-');

                console.log('nao esta calculando ...');
                console.log(calcular.getLastOperator());
                return false;
              }

              calcular.calculateTotal(+visor.value);
              calcular.setCalculating(true);
              calcular.setLastOperator('-');
              visor.value = calcular.getTotal();



            } else if (getValueOfButton(this) == '='){

              if(calcular.getLastOperator() == '+') {
                calcular.addition(calcular.getTotal(),visor.value);
                calcular.setLastOperator('+');
              } else if (calcular.getLastOperator() == '-') {
                calcular.subtract(calcular.getTotal(),visor.value);
                calcular.setLastOperator('-');
              }

              visor.value = calcular.getTotal();
              calcular.setCalculating(true);

//              console.log("o total e " + calcular.getTotal() + ' ultimo operador = ' + calcular.getLastOperator());
            }
          } else if (calcular.isNumeric(+(getValueOfButton(this)))){

              if (visor.value == '0' || calcular.hasCalculating()) {
                visor.value = '';
              }

              if (calcular.hasCalculating()) {
                visor.value = '';
                calcular.setCalculating(false);
              }

              visor.value += getValueOfButton(this);

          }

        };

    }



};
