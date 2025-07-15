// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");
  const contador = document.getElementById("contador");

  // Cargar datos guardados
  const aprobadosGuardados = JSON.parse(localStorage.getItem("ramosAprobados")) || [];

  // Aplicar estado guardado
  ramos.forEach((ramo, index) => {
    if (aprobadosGuardados.includes(index)) {
      ramo.classList.add("aprobado");
    }

    // Evento de clic para marcar/desmarcar
    ramo.addEventListener("click", () => {
      ramo.classList.toggle("aprobado");

      // Guardar estado
      const nuevosAprobados = [];
      ramos.forEach((r, i) => {
        if (r.classList.contains("aprobado")) {
          nuevosAprobados.push(i);
        }
      });

      localStorage.setItem("ramosAprobados", JSON.stringify(nuevosAprobados));
      actualizarContador();
    });
  });

  // Función para contar ramos aprobados
  function actualizarContador() {
    const total = document.querySelectorAll(".ramo.aprobado").length;
    contador.textContent = total;
  }

  actualizarContador();
});
