/**
 * process.stdout.write('algo em minha tela');
 * Funciona como um console.log
 */
 
const questions = [
    'o que aprendi hoje ?',
    'o que me deixou aborrecido ?',
    'o que eu poderia fazer para melhorar ?',
    'o que me deixou feliz hoje ?',
    'quantas pessoas ajudei hoje ?',
]

const answers = [] ;
 
const ask = (index =0) => {
    process.stdout.write(`\n\n${questions[index]}\n  > `)
}

ask() 


process.stdin.on('data', (data) => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit(); 

    }
})


process.on('exit', () => {
    console.log(`Gostamos muito de suas respostas!\n${answers}`)
})
