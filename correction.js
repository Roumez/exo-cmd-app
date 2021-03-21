const readlineSync = require('readline-sync')

// Check command line
if (process.argv.length !== 3) {
  console.log('usage: node majorityTest.js age')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number`)
  process.exit(1)
}

const majority = Number(process.argv[2])

while (true) {
  const name = readlineSync.question('nom: ')
  const firstName = readlineSync.question('firstName: ')
  const ageStr = readlineSync.question('age: ')

  if (isNaN(ageStr)) {
    console.log(`Sorry, ${ageStr} is not a number`)
    process.exit(1)
  }

  const age = Number(ageStr)

  if (age >= majority) {
    console.log(`${firstName} ${name} vous êtes majeur, vous pouvez voter.`)
  } else {
    console.log(
      `Désolé, ${firstName} ${name}, vous êtes mineur, vous ne pouvez pas voter.`
    )
  }
}