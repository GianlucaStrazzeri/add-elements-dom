 // Aquí tu código
 // He creado una constante agregar desde el id agregar
 const agregar= document.getElementById("agregar");

 // He creado un elemento Li
 const lista= document.getElementById("lista")


agregar.addEventListener('click', function () {
    const nuevoElemento=prompt("inserta un elemento, este elemento se transformará en una lista");
    if(nuevoElemento){
    const elementoLista= document.createElement("li")
        elementoLista.innerHTML=nuevoElemento;
        lista.appendChild(elementoLista);
    }
  });
