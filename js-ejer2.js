const form = document.getElementById('ingreso-cliente');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formulario = e.target;

  const avenger = {
    alias: formulario[0].value,
    nombre: formulario[1].value,
    edad: parseInt(formulario[2].value)
  }

  if (avenger.edad < 18) {
    const p = document.getElementById('mensaje-error');
    p.innerText = 'Tienes que ser mayor de 18 años para ingresar';
    return;
  }

  const tabla = document.getElementById('tabla');
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${cliente.alias}</td>
    <td>${cliente.nombre}</td>
    <td>${cliente.edad}</td>
  `;

  tabla.append(tr);

  document.querySelectorAll('#ingreso-cliente input').forEach((input) => {
    input.value = '';
  });
});