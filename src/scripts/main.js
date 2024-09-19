AOS.init();

const dataDoEvento = new Date('Sep 16, 2025 14:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const dataAtual = new Date();

    const timeStampAtual = dataAtual.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;  
    const horaEmMs = 1000 * 60 * 60;     
    const minutoEmMs = 1000 * 60;        
    const segundoEmMs = 1000;            
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;    

    if (distanciaAteOEvento < 0) {
        // Quando a contagem regressiva terminar, exibir uma mensagem
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'O evento começou!';
    } else {
        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); // Dias restantes
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); // Horas restantes após os dias
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs); // Minutos restantes após as horas
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMs); // Segundos restantes após os minutos

        document.getElementById('contador').innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S`;
    }
    
}, 1000);

