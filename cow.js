const cowsay = require('cowsay')

const message = cowsay.say({
    text: "hello Victor",
    e : "- -",
    T : "U "
}
)

console.log(message)