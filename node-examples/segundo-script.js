console.log('n-fatorial')

// console.log(`Executando o script a partir do diretorio ${process.cwd()}`)

// process.on('exit', ()=>{
//     console.log('script esta preste a terminar')
// })

const fatorial = (num) =>{

    if(num === 0){
        return 1
    }

    return num * fatorial(num - 1)

}
const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)