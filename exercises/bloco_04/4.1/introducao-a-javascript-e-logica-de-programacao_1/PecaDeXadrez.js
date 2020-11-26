let peça = "Bispo";

switch (peça.toLowerCase()) {
    case 'rei':
      console.log('Rei: Uma casa apenas para qualquer direção.');
      break;
    case 'bispo':
      console.log('Bispo: Diagonal.');
      break;
    case 'rainha':
      console.log('Rainha: Diagonal e horizontal.');
      break;
    case 'cavalo':
      console.log('Cavalo: "L" pode pular sobre as peças.');
      break;
    case 'torre':
      console.log('Torre: Horizontal.');
      break;
    case 'peão':
      console.log("Peão: Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
      break;
    default:
      console.log('Erro, essa peça não é válida!');
      break;
  };

  // OBS: Retirei apenas os movimentos do gabarito!
  // link: https://app.betrybe.com/course/fundamentals/javascript/js-features/js-part-1-solutions#exercicio-6