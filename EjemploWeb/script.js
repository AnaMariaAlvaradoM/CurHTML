// document.getElementById('agregar').addEventListener('click', function() {
//     const input = document.getElementById('nueva-tarea');
//     const texto = input.value.trim();
    
//     if (texto) {
//       const li = document.createElement('li');
//       li.innerHTML = `${texto} <button class="eliminar">×</button>`;
//       li.querySelector('.eliminar').addEventListener('click', function() {
//         li.remove();
//       });
//       document.getElementById('lista-tareas').appendChild(li);
//       input.value = '';
//     }
//   });
  
//   // Eliminar tareas existentes al cargar la página
//   document.querySelectorAll('.eliminar').forEach(boton => {
//     boton.addEventListener('click', function() {
//       this.parentElement.remove();
//     });
//   });

document.getElementById('agregar').addEventListener('click', function() {
    const input = document.getElementById('nueva-tarea');
    const texto = input.value.trim(); // Elimina espacios vacíos
  
    if (texto) { // Solo agrega si hay texto
      const li = document.createElement('li'); // Crea un elemento <li>
      li.textContent = texto; // Asigna el texto
      document.getElementById('lista-tareas').appendChild(li); // Agrega a la lista
      input.value = ''; // Limpia el input
    }
  });


// document.getElementById("titulo").innerHTML = "Hola desde Js";
// document.getElementById("titulo").style.color = "blue";
// document.body.style.backgroundColor = "pink";