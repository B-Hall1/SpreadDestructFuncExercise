const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];

function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
  }
  
  seeDinos(...jPDinos);
  
  const jPCharacters = { alanGrant: "Sam Neill", ellieSattler: "Laura Dern", ianMalcolm: "Jeff GoldBlum"};
  
  let seeCharacters = () => console.log(jPCharacters.ellieSattler);
  
  
  seeCharacters();

