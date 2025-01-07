AOS.init();

const dataDoEvento = new Date("Dec 31, 2025 23:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
  const agora = new Date();
  const timeStampAtual = agora.getTime();

  const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaAteOEvento / diaEmMs);
  const horasAteEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
  const minutosAteEvento = Math.floor((distanciaAteOEvento % horaEmMs / minutoEmMs));
  const segundosAteEvento = Math.floor((distanciaAteOEvento % minutoEmMs / 1000));

  document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

  if(distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = `Evento já começou`;
  }
}, 1000);