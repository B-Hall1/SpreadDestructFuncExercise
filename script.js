const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];

function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
  }
  
  seeDinos(...jPDinos);
  
  const jPCharacters = { alanGrant: "Sam Neill", ellieSattler: "Laura Dern", ianMalcolm: "Jeff GoldBlum"};
  
  function seeCharacters(jPCharacters) {
    console.log(jPCharacters.ellieSattler);
  }
  
  seeCharacters(jPCharacters);
  
//   arrowCharacters = ({ alanGrant, ellieSattler, ianMalcolm }) =>
//     console.log(ellieSattler);
  
//   arrowCharacters(jPCharacters);

