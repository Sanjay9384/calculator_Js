let calculation = localStorage.getItem('calculation') || '';

        document.querySelector('.display').innerHTML=`${calculation}`;

        function updateCalculation(value) {
            if (value === `=`) {
                calculation = eval(calculation);
                console.log(calculation);

                localStorage.setItem('calculation', calculation);
            }
            else if (value === `clear`) {
                calculation = ``;
                console.log(`Clear`);

                localStorage.setItem('calculation', calculation);
            }
            else {
                calculation += value;

                localStorage.setItem('calculation', calculation);
            }
            document.querySelector('.display').innerHTML=`${calculation}`;
        }