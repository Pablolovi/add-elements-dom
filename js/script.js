// Aquí tu código
document.getElementById('agregar').addEventListener('click', function() {
    // Pedir al usuario que ingrese un elemento
    const elemento = prompt('Introduce un elemento para agregar a la lista:');
  
    // Verificar si se ingresó un elemento
    if (elemento) {
      // Crear un nuevo elemento de lista
      const li = document.createElement('li');
      li.textContent = elemento; // Establecer el texto del elemento
  
      // Agregar el nuevo elemento a la lista
      document.getElementById('lista').appendChild(li);
    } else {
      alert('No se ingresó ningún elemento.');
    }
  });  