const name = process.argv[2]


if (process.argv.length !== 3) {
  console.log(`Just one name please`)
  process.exit(1)
}

if (!isNaN(process.argv[2])) {
  console.log(`You can’t write a number`)
  process.exit(1)
}


console.log(`Hello, ${name}`)