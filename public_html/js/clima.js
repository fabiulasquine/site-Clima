function getClima(){
    
    $.ajax({
        method: 'get',
        crossDomain: true,
        url:'http://api.openweathermap.org/data/2.5/weather?id=3468879&appid=ec6a617ae63944834b7c43ce6b4995ab',
        dataType: 'json',
        success: function (data){
            
            temperatura = data.main.temp - 273;
            var tempFormatada = temperatura.toFixed(2).split('.');
            $('#temperatura').html(tempFormatada + "°");


            descricao = traduzirDescricao(data.weather[0].description);
            $('#situacao').html(descricao);

            umidade = data.main.humidity;
            $('#umidade').html(umidade + "%");

            pressao = data.main.pressure;
            $('#pressao').html(pressao + "hPa");

            tempMax = data.main.temp_max;
            $('#tempMax').html(tempMax + "º");

            tempMin = data.main.temp_min;
            $('#tempMin').html(tempMin + "º");

            velocidade = data.wind.speed;
            $('#velocidade').html(velocidade + "Km/h");
            
            var dataNascer = new Date(data.sys.sunrise*1000);
            var descDataNascer = dataNascer.getHours()+':'+dataNascer.getMinutes();
            nascer = data.sys.sunrise;
            $('#nascer').html(descDataNascer);

            var dataPor = new Date(data.sys.sunset*1000);
            var descDataPor = dataPor.getHours()+':'+dataPor.getMinutes();
            por = data.sys.sunrise;
            $('#por').html(descDataPor);

            var icone= data.weather[0].icon;
            var caminhoIcone = 'img/icones/'+icone+'.png';
            $('#icone').attr('src', caminhoIcone);
            
        },
        error: function (argument){
           alert('Falha ao obter dados!');
        }
    });
}

function traduzirDescricao(descricao){
    
    descricaoTraduzida ="";
    
    if (descricao == "clear sky"){
        descricaoTraduzida = "Céu limpo";
    }else if (descricao == "few clouds"){
        descricaoTraduzida = "Poucas nuvens";
    }else if (descricao == "scattered clouds"){
        descricaoTraduzida = "nuvens dispersas";
    }else if (descricao == "broken clouds"){
        descricaoTraduzida = "nuvens quebradas";
    }else if (descricao == "shower rain"){
        descricaoTraduzida = "chuva de banho";
    }else if (descricao == "rain"){
        descricaoTraduzida = "Chuva";
    }else if (descricao == "thunderstorm"){
        descricaoTraduzida = "trovoada";
    }else if (descricao == "snow"){
        descricaoTraduzida = "neve";
    }else if (descricao == "mist"){
        descricaoTraduzida = "névoa";
    }
    
    return descricaoTraduzida;
}

window.onload = function () {
     getClima();
};





