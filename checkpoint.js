 function sumDistinct(tab1, tab2) {
    let dist = [];
   
    // Ajouter les éléments de tab1 qui ne sont pas présents dans tab2
    for (let i = 0; i < tab1.length; i++) {
      if (!tab2.includes(tab1[i])) {
        dist.push(tab1[i]);
      }
    }
    
    // Ajouter les éléments de tab2 qui ne sont pas présents dans tab1
    for (let j = 0; j < tab2.length; j++) {
      if (!tab1.includes(tab2[j])) {
        dist.push(tab2[j]);
      }
    }
    
    // Calculer la somme des éléments distincts
    let sum = 0;
    for (let k = 0; k < dist.length; k++) {
      sum += dist[k];
    }
    
    return sum;
  }
  
  // Exemple d'utilisation
  let tab1 = [3, 1, 7, 9,10];
  let tab2 = [2, 4, 1, 9, 3,7];
  let resultat = sumDistinct(tab1, tab2);
  
  console.log(resultat); // Affiche 13







  // Fonction pour calculer le produit scalaire de deux vecteurs
function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  console.log(dotProduct([4,2,3],[10,7,5]));
  
  //Algorithme principal
  function checkOrthogonalPairs(vectors) {
    for (let i = 0; i < vectors.length; i += 2) {
      let v1 = vectors[i];
      let v2 = vectors[i + 1];
      let ps = dotProduct(v1, v2);
      
      if (ps === 0) {
        console.log("Les vecteurs sont orthogonaux.");
      } else {
        console.log("Les vecteurs ne sont pas orthogonaux.");
      }
    }
  }
  
  // Exemple d'utilisation
  let vectors = [[1, 2, 3], [-1, 2, -3], [2, -2, 4], [1, 1, -2]];
  checkOrthogonalPairs(vectors);