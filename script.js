async function getAddressByCep() {
    const labelCep = document.getElementById('labelCep').value;
    
    try {
        const response = await fetch(`https://viacep.com.br/ws/${labelCep}/json/`);
        const dataCep = await response.json();
        console.log(dataCep);
        document.getElementById('rua').innerText = dataCep.logradouro;
        document.getElementById('bairro').innerText = dataCep.bairro;
        document.getElementById('uf').innerText = dataCep.uf;

    } catch (error) {
        window.alert('CEP Inválido')

    }

    
}

async function getTemperatureByLatlong() {
    const labelLat = document.getElementById('labelLat').value;
    const labelLong = document.getElementById('labelLong').value;
    
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${labelLat}&longitude=${labelLong}&hourly=temperature_2m,apparent_temperature`);
        const dataTemp = await response.json();
        console.log(dataTemp);
        console.log(dataTemp.hourly.temperature_2m[0]);
        document.getElementById('previsaoTempo').innerHTML = `Previsão de tempo de acordo com a região: ${dataTemp.hourly.temperature_2m[0]}`;

    } catch (error) {
        window.alert('Latitude e/ou longitude inválida(s). Confira os dados.')

    }

    
}