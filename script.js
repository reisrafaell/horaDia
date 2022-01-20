function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = new Date()
    var horaAtual = hora.getHours()
   // var horaAtual = 15
    msg.innerHTML = `Agora são ${horaAtual} horas.`
    
    if (horaAtual >= 0 && horaAtual < 12){
        img.src = '/img/manha.jpg'
        document.body.style.background = '#3CB371'
                    
    } else if (horaAtual >= 12  && horaAtual <= 18){

        img.src= '/img/tarde.jpg'
        document.body.style.background = '#F4A460'
    } else {

        img.src = '/img/noite.jpg'
        document.body.style.background= '#708090'
    }
}