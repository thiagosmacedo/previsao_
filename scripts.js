let key = "5abdc12b187554a802458325d544fdeb"


function mostrarTela(dados) {
    console.log(dados)
    document.querySelector(".city").innerHTML = " Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "Agora " + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".type").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade:  " + dados.main.humidity + "%"
    document.querySelector(".img-logo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 

}


//funçao de buscar a informação no servidor
async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    mostrarTela(dados)
}


//funçao de quando o usuario clicar no botao buscar o nome da cidade
function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
} 