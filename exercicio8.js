const escolhaUsuario = prompt(
    "Escolha uma opção:\n1. Opção 1\n2. Opção 2\n3. Opção 3"
  );
  
  const opcaoEscolhida = parseInt(escolhaUsuario);
  
  switch (opcaoEscolhida) {
    case 1:
      console.log("Opção 1 escolhida.");
      break;
    case 2:
      console.log("Opção 2 escolhida.");
      break;
    case 3:
      console.log("Opção 3 escolhida.");
      break;
    default:
      console.log("Opção inválida.");
      break;
  }
  