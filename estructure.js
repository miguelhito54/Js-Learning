function showAge(){
    let Age = parseInt(document.getElementById('age').value)
    let message = (Age >= 18) ? "Mayor de edad" : 'Menor de edad'
    alert(message)
}

function showData(){
    let Age2 = parseInt(document.getElementById('age2').value)
    let Estature = parseFloat(document.getElementById('estature').value)
    let Height = parseInt(document.getElementById('height').value)

    let pAge = 80
    let pEstature = 1.40
    let pHeight = 70
    let messageDecision = ""

    if (Age2 <= pAge) {
        if (Estature >= pEstature) {
            if (Height == pHeight) {
                messageDecision='apto para realizar el deporte'
            } else {
                messageDecision='no apto por peso'
            }
            
        } else {
            messageDecision='no apto por chiquito'
        }
        
    } else {
        messageDecision='no apto por edad'
    }
    alert(messageDecision);

}
// if && , || 