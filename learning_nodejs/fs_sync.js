
const {readFileSync, writeFileSync} = require('fs')
console.log("--start")
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
writeFileSync('./content/result-sync.txt', `Here is the result : \n ${first} \n ${second}`, {flag: 'a'})
console.log("--done!")


/*
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `${i} - I'm going to be successful \n`, {flag: 'a'})
}*/
