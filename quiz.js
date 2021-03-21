const readline = require(`readline-sync`)
const chalk = require(`chalk`)
let note = 0

const question = [
  [`Question 1: Le C++ est un :`, `1: langage`, `2: compilateur`, 1, 2],
  [`Question 2: TypeScript est une évolution de Javascript: `, `1: Vrai`, `2: Faux`, 1, 2],
  [`Question 3: Lire les cours avant de faire les exercices est inutile`, `1: Vrai`, `2: Faux`, 2, 1],
  [`Question 4: React.js a été developpé par Google:`, `1: Vrai`, `2: Faux`, 2, 1],
  [`Question 5: Ethereum est une blockchain publique:`, `1: Vrai`, `2: Faux`, 1, 2]
]

for (let i = 0; i < question.length; ++i) {
  console.log(question[i][0])
  console.log(question[i][1])
  console.log(question[i][2])

  let run = true
  while (run) {
    const userAnswer = readline.question(`Indiquer votre réponse ?`)
    const answer = Number(userAnswer)
    if (answer === question[i][3]) {
      note++
      run = false
    } else if (answer === question[i][4]) {
      run = false
    } else {
      console.log(`Veuillez selectionner 1 ou 2`)
    }
  }
}
console.log(`Votre note est de: ${note}  / 5`)




/*

if (questionOne === '1') {
  console.log(chalk.green(`bonne réponse`))
} else {
  console.log(chalk.red(`mauvaise réponse`))
}

const questionTwo = readline.question(`Question 2: )
if (questionTwo === '1') {
  console.log(chalk.green(`bonne réponse`))
} else {
  console.log(chalk.red(`mauvaise réponse`))
}

const questionThree = readline.question(`Question 3: Lire les cours avant de faire les exercices est inutile: \n 1: Vrai \n 2: Faux \n Indiquer votre réponse 1 ou 2 : `)
if (questionThree === '2') {
  console.log(chalk.green(`bonne réponse`))
} else {
  console.log(chalk.red(`mauvaise réponse`))
}

const questionFour = readline.question(`Question 4: React.js a été developpé par Google: \n 1: Vrai \n 2: Faux \n Indiquer votre réponse 1 ou 2 : `)
if (questionFour === '2') {
  console.log(chalk.green(`bonne réponse`))
} else {
  console.log(chalk.red(`mauvaise réponse`))
}
const questionFive = readline.question(`Question 5: Ethereum est une blockchain publique: \n 1: Vrai \n 2: Faux \n Indiquer votre réponse 1 ou 2 : `)
if (questionFive === '1') {
  console.log(chalk.green(`bonne réponse`))
} else {
  console.log(chalk.red(`mauvaise réponse`))
}
*/