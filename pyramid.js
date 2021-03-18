//-------------------------------------------------------------Readlinesync---------------------------------------------------------------//
/*const readlineSync = require('readline-sync')

const showStars = (nbStars, design) => {
  if (isNaN(nbStars)) {
    console.log(`Veuillez entrer un nombre pour la base de la pyramide...`)
  } else {
    for (let i = 1; i <= nbStars; i += 1) {
      console.log(`${design}`.repeat(i))
    }
  }
}

let nbBase = readlineSync.question('Base de la pyramide, combien de motif ? ')
nbBase = Number(nbBase)
let motif = readlineSync.question('Quelle motif souhaitez vous ? ')
showStars(nbBase, motif)

//-----------------------------------------------------------Process.argv---------------------------------------------------------------//

const showStars = (nbStars, motif) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(motif.repeat(i))
  }
}

// Verifier qu'il n'y a qu'un seul argument passé à notre programme
if (process.argv.length !== 4) {
  console.log('usage: node stars.js number')
  process.exit(1)
}

// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

// Nous somme OK, il n'y a qu'un seul argument et c'est un nombre.
const nbStars = Number(process.argv[2])
const motif = (process.argv[3])
showStars(nbStars, motif)*/


//----------------------------------------------Reverse----------------------------------------------------------------//

const showStars = (nbBase, str, reverse) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log(str.repeat(i))
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(str.repeat(i))
    }
  }
}

// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}
if ((process.argv[4]) === -r) {
  console.log(`-r pour inverser la pyramide`)
  process.exit(1)
}


// Nous somme OK, il n'y a qu'un seul argument et c'est un nombre.
const nbStars = Number(process.argv[2])
const motif = (process.argv[3])
const reverse = (process.argv[4])
showStars(nbStars, motif, reverse)