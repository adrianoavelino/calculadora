
window.onload = function() {

    var visor = document.getElementById('tela'),
        btn = document.querySelectorAll("input[type=button]");


    var getValueOfButton = function(elem){
      return elem.value;
    }

    var createCalcular = function () {
      var _total = 0;
      var _calculating = false;
      var _operators = ['+', '-', '*', '/', '=', 'C'];
      var _lastOperator = '+';
      var _temp = 0;

      return {
        setTemp: function (valor) {
          return _temp = valor;
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
          return _total = (+total) + (+valor);
        },
        subtract: function (total, valor) {
          return _total =  (+total) - (+valor) ;
        },
        division: function (total, valor) {
          return _total = total / valor;
        },
        multiplication: function (total, valor) {
          return _total = total * valor;
        },
        calculateTotal: function (valor) {
          if (_lastOperator == '+') {
            console.log(this.addition(_total, valor ));
            this.setLastOperator('+');
            console.log(this.getLastOperator());
          } else if (_lastOperator == '-') {
            console.log(this.subtract(_total, valor ));
            this.setLastOperator('-');
            console.log(this.getLastOperator());
          } else if (_lastOperator == '/') {
            this.division(_total, valor);
            this.setLastOperator('/');
            console.log("O ultimo operador e " + this.getLastOperator());
          } else if (_lastOperator == '*') {
            this.multiplication(_total, valor);
            this.setLastOperator('*');
            console.log("O ultimo operador e " + this.getLastOperator());
          }
          else {
            console.log('não e soma');
          }

          console.log(this.hasCalculating());
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
          return (_operators.indexOf(operator) != -1)? true : false;
        },
        isNumeric: function (number) {
          return (/^[0-9]+$/.test(+number));
        }

      }
    };

    var calcular = createCalcular();


    // cria evento dos botões
    for (var i = 0; i < btn.length; i++) {

        btn[i].onclick = function(){

          // console.log('clicou em ' + getValueOfButton(this));

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

              if (calcular.getTemp()) {
                calcular.calculateTotal(+calcular.getTemp());
              } else {
                calcular.calculateTotal(+visor.value);
              }


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


              if (calcular.getTemp()) {
                calcular.calculateTotal(+calcular.getTemp());
              } else {
                calcular.calculateTotal(+visor.value);
              }


              calcular.setCalculating(true);
              calcular.setLastOperator('-');
              visor.value = calcular.getTotal();



            }

            else if (getValueOfButton(this) == '/') {

              if (calcular.hasCalculating()) {
                calcular.setLastOperator('/');

                console.log('nao esta calculando ...');
                console.log(calcular.getLastOperator());
                return false;
              }


              if (calcular.getTemp()) {
                calcular.calculateTotal(+calcular.getTemp());
              } else {
                calcular.calculateTotal(+visor.value);
              }


              calcular.setCalculating(true);
              calcular.setLastOperator('/');
              visor.value = calcular.getTotal();

            }
            else if (getValueOfButton(this) == '*') {

              if (calcular.hasCalculating()) {
                calcular.setLastOperator('*');

                console.log('nao esta calculando ...');
                console.log(calcular.getLastOperator());
                return false;
              }


              if (calcular.getTemp()) {
                calcular.calculateTotal(+calcular.getTemp());
              } else {
                calcular.calculateTotal(+visor.value);
              }


              calcular.setCalculating(true);
              calcular.setLastOperator('*');
              visor.value = calcular.getTotal();

            } else if (getValueOfButton(this) == '='){

              console.log("O valor de temp e " + calcular.getTemp() + "\n");

              if(calcular.getLastOperator() == '+') {
                // calcular.addition(calcular.getTotal(),visor.value);
                if (calcular.getTemp()) {
                  calcular.calculateTotal(+calcular.getTemp());
                } else {
                  calcular.calculateTotal(+visor.value);
                }
                calcular.setLastOperator('+');
              }

              else if (calcular.getLastOperator() == '-') {

                if (calcular.getTemp()) {
                  calcular.calculateTotal(+calcular.getTemp());
                } else {
                  calcular.calculateTotal(+visor.value);
                }

                calcular.setLastOperator('-');
              }

              else if (calcular.getLastOperator() == '/') {

                if (calcular.getTemp()) {
                  calcular.calculateTotal(+calcular.getTemp());
                } else {
                  calcular.calculateTotal(+visor.value);
                }

                calcular.setLastOperator('/');
              }
              else if (calcular.getLastOperator() == '*') {
                if (calcular.getTemp()) {
                  calcular.calculateTotal(+calcular.getTemp());
                } else {
                  calcular.calculateTotal(+visor.value);
                }

                calcular.setLastOperator('*');

                console.log('clicou multiiiiiiii');
              }

              visor.value = calcular.getTotal();
              calcular.setCalculating(true);

              console.log("o total e " + calcular.getTotal() + ' ultimo operador = ' + calcular.getLastOperator());
            }
          }

          else if (calcular.isNumeric(+(getValueOfButton(this)))){

              if (visor.value == '0' || calcular.hasCalculating()) {
                visor.value = '';
              }

              if (calcular.hasCalculating()) {
                visor.value = '';
                calcular.setCalculating(false);

              }

              visor.value += getValueOfButton(this);


              calcular.setTemp(+visor.value);
              console.log("O valor de temp e " + calcular.getTemp() + "\n");

          }

        };

    }



};
