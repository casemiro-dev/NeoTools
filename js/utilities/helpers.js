export function formatarTelefone(numero) {
  const numeros = numero.replace(/\D/g, '');
  const semCodigoPais = numeros.startsWith('55') ? numeros.slice(2) : numeros;
  return semCodigoPais;
}

export function addToTextArea(tagHtml) {
  const caixa = document.getElementById("anotacoes");
  caixa.value += tagHtml;
}

export function copiarTexto(texto) {
  const temp = document.createElement("textarea");
  temp.value = texto;
  document.body.appendChild(temp);
  temp.select();
  navigator.clipboard.writeText(texto);
  document.body.removeChild(temp);

  mostrarMensagem("Copiado! Verifique antes de colar as informações no ADM!");
}

export function mostrarMensagem(texto) {
  const msg = document.getElementById("mensagem-copiado");
  msg.textContent = texto;
  setTimeout(() => { msg.textContent = ""; }, 3000);
}

export function formatarData(dataISO) {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

export function formatarTurno(turno) {
  switch (turno.toLowerCase()) {
    case "manha": return "Manhã";
    case "tarde": return "Tarde";
    case "noite": return "Noite";
    default: return turno;
  }
}

