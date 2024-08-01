function calcMedia(nota1, nota2, nota3, nota4){
    return (nota1 + nota2 + nota3 + nota4) / 4
}

function executeForm( event ){
    
    event.preventDefault() 
    var nota1 = parseFloat(document.getElementById('nota1').value)
    var nota2 = parseFloat(document.getElementById('nota2').value)
    var nota3 = parseFloat(document.getElementById('nota3').value)
    var nota4 = parseFloat(document.getElementById('nota4').value)

    if( isNaN(nota1 + nota2 + nota3 + nota4)) {
        console.error('uma ou mais dos valores não são válidos')
        return
    }

    var result = calcMedia(nota1, nota2, nota3, nota4)
    console.log( result.toFixed(2) )

}

document
    .getElementById("calc")
    .addEventListener('submit', executeForm)
