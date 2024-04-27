function somar(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    return "Erro. Informe apenas números.";
  } else {
    return numero1 + numero2;
  }
}

exports.somar = somar;
