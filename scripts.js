// Seleccionar todos los combos
const combos = document.querySelectorAll( '.combo' );

// Agregar evento de clic a cada combo
combos.forEach( combo => {
  combo.addEventListener( 'click', () => {
    // Resaltar el combo al hacer clic en él
    combo.style.backgroundColor = '#ffd700';

    // Después de 1 segundo, restaurar el color de fondo original
    setTimeout( () => {
      combo.style.backgroundColor = '#f9f9f9';
    }, 1000 );
  } );
} );
