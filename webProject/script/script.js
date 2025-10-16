const dados = {
  banco: "",
  tipo: "",
  divida: "",
  vencimento: "",
  parcelas: "",
};
function mandar() {
  //pega os valores pra dentro da variavel
  const Banco = document.querySelector("#Banco").value;
  const Tipo = document.querySelector("#tipoDivida").value;
  const divida = float(document.querySelector("#divida").value);
  const vencimento = document.querySelector("#data").value;
  const parcelas = Number(document.querySelector("#parcelas").value);

  // lança no objeto
  dados["banco"] = Banco;
  dados["tipo"] = Tipo;
  dados["divida"] = divida;
  dados["vencimento"] = vencimento;
  dados["parcelas"] = parcelas;
  //imprime como teste das variaveis em funcionamento //tá errado pq n devemos deixar dados sensiveis assim

  // Reseta o estagio dos inputs para o valor inicial
  document.querySelector("#Banco").value = "";
  document.querySelector("#tipoDivida").value = "";
  document.querySelector("#divida").value = "";
  document.querySelector("#data").value = "";
  document.querySelector("#parcelas").value = "";
}
