const readlineSync = require('readline-sync')

const nom = readlineSync.question(`Quelle est votre nom ?`)
const prenom = readlineSync.question(`Quelle est votre prénom ?`)
const age = readlineSync.question(`Quelle est votre age ?`)

if (age < 18) {
  console.log(`Désolé, ${nom} ${prenom} vous êtes mineur, vous ne pouvez pas voter`)
} else {
  console.log(`${nom} ${prenom} vous êtes majeur, vous pouvez voter`)
}

if (!isNaN(nom)) {
  console.log(`Veuillez indiquer votre nom`)
  process.exit(1)
} else if (!isNaN(prenom)) {
  console.log(`Veuillez indiquer votre prenom`)
  process.exit(1)
}
if (isNaN(age)) {
  console.log(`Veuillez indiquer votre age`)
  process.exit(1)
}
