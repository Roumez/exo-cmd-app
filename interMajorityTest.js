const readlineSync = require('readline-sync')
const name = process.argv[2]
if (process.argv.length !== 3) {
  console.log(`Please just one number 18 or 21`)
  process.exit(1)
}
if ((process.argv[2]) !== 18 || (process.argv[2]) !== 21) {
  console.log(`You need write majority name country`)
  process.exit(1)
}

const nom = readlineSync.question(`Quelle est votre nom ?`)
const prenom = readlineSync.question(`Quelle est votre prénom ?`)
const age = readlineSync.question(`Quelle est votre age ?`)

if (!isNaN(nom)) {
  console.log(`Please enter your name`)
  process.exit(1)
} else if (!isNaN(prenom)) {
  console.log(`Please enter your surname`)
  process.exit(1)
}
if (isNaN(age)) {
  console.log(`Please enter your age`)
  process.exit(1)
}

if (age < process.argv[2]) {
  console.log(`Désolé, ${nom} ${prenom} vous êtes mineur, vous ne pouvez pas voter`)
} else {
  console.log(`${nom} ${prenom} vous êtes majeur, vous pouvez voter`)
}