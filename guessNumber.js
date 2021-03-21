const readline = require(`readline-sync`)
const chalk = require('chalk')
const nombre = Number(process.argv[2])



while (nombre) {

  const question = readline.question(`Trouvez le nombre du maitre du jeu ?`)

  if (question < nombre) {
    console.log(chalk.red(`Nombre trop petit`))
  } else if (question > nombre) {
    console.log(chalk.red(`Nombre trop grand`))
  } else {
    console.log(chalk.green(`Bravo`))
    process.exit(1)
  }
}
