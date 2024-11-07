// Aquí tu código
document.getElementById('agregar').addEventListener('click', function() {
    const elemento = prompt('Introduce un elemento para agregar a la lista:');
  
    if (elemento) {
      const li = document.createElement('li');
      li.textContent = elemento;
  
      document.getElementById('lista').appendChild(li);
    } else {
      alert('No se ingresó ningún elemento.');
    }
  });  