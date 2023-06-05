const call = require('./script')

function Emitter() {
    call.setEvent('start', () => {
        function checkEven(number) {
            if (number % 2 === 0) {
                console.log(`Число ${number} является четным.`);
            } else {
                console.log(`Число ${number} является нечетным.`);
            }
        }
        console.log(checkEven(7))
    })


    call.callEvent('start')

}


Emitter()