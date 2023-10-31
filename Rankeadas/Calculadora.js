function calcularSaldoRankeadas(vitorias, derrotas) {
    var saldoVitorias = vitorias - derrotas;
    var nivel = "";
  
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias > 20 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias > 50 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias > 80 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias > 90 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    return "O Herói tem um saldo de " + saldoVitorias + " está no nível de " + nivel;
  }
  
  // Exemplo de uso da função
  var saldo = calcularSaldoRankeadas(75, 20);
  console.log(saldo);

  