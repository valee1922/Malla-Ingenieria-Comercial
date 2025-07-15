const ramos = [
  // Semestre 1
  { nombre: "Derecho Corporativo I", semestre: 1, color: "#FFD5C2" },
  { nombre: "Gestión de Empresas", semestre: 1, color: "#FFD5C2" },
  { nombre: "Economía I", semestre: 1, color: "#FFD5C2" },
  { nombre: "Álgebra I", semestre: 1, color: "#FFD5C2" },
  { nombre: "Cálculo I", semestre: 1, color: "#FFD5C2" },

  // Semestre 2
  { nombre: "Economía II", semestre: 2, color: "#FFEDCC" },
  { nombre: "Álgebra II", semestre: 2, color: "#FFEDCC" },
  { nombre: "Cálculo II", semestre: 2, color: "#FFEDCC" },
  { nombre: "Contabilidad I", semestre: 2, color: "#FFEDCC" },
  { nombre: "Gestión de Personas I", semestre: 2, color: "#FFEDCC" },

  // Semestre 3
  { nombre: "Cálculo III", semestre: 3, color: "#D6E4FF" },
  { nombre: "Contabilidad II", semestre: 3, color: "#D6E4FF" },
  { nombre: "Microeconomía I", semestre: 3, color: "#D6E4FF" },
  { nombre: "Estadística I", semestre: 3, color: "#D6E4FF" },
  { nombre: "Tecnología de la Información I", semestre: 3, color: "#D6E4FF" },
  { nombre: "Formación General I", semestre: 3, color: "#D6E4FF" },

  // Semestre 4
  { nombre: "Macroeconomía I", semestre: 4, color: "#C9F0FF" },
  { nombre: "Contabilidad de Costos", semestre: 4, color: "#C9F0FF" },
  { nombre: "Cálculo Financiero", semestre: 4, color: "#C9F0FF" },
  { nombre: "Inglés Comunicativo I (Nivel Principiante)", semestre: 4, color: "#C9F0FF" },
  { nombre: "Tecnología de la Información II", semestre: 4, color: "#C9F0FF" },
  { nombre: "Estadística II", semestre: 4, color: "#C9F0FF" },

  // Semestre 5
  { nombre: "Derecho Corporativo II", semestre: 5, color: "#FFE3F1" },
  { nombre: "Gestión de Marketing I", semestre: 5, color: "#FFE3F1" },
  { nombre: "Microeconomía II", semestre: 5, color: "#FFE3F1" },
  { nombre: "Inglés Comunicativo II (Nivel Elemental)", semestre: 5, color: "#FFE3F1" },
  { nombre: "Métodos Cuantitativos", semestre: 5, color: "#FFE3F1" },

  // Semestre 6
  { nombre: "Finanzas I", semestre: 6, color: "#FFF2CC" },
  { nombre: "Gestión de Operaciones", semestre: 6, color: "#FFF2CC" },
  { nombre: "Macroeconomía II", semestre: 6, color: "#FFF2CC" },
  { nombre: "Administración Estratégica I", semestre: 6, color: "#FFF2CC" },
  { nombre: "Econometría I", semestre: 6, color: "#FFF2CC" },
  { nombre: "Inglés Comunicativo III (Nivel Básico)", semestre: 6, color: "#FFF2CC" },

  // Semestre 7
  { nombre: "Evaluación de Proyectos", semestre: 7, color: "#D0F0C0" },
  { nombre: "Complementaria I", semestre: 7, color: "#D0F0C0" },
  { nombre: "Electiva I", semestre: 7, color: "#D0F0C0" },
  { nombre: "Inglés Comunicativo IV (Nivel Básico Alto)", semestre: 7, color: "#D0F0C0" },
  { nombre: "Gestión de Marketing II", semestre: 7, color: "#D0F0C0" },
  { nombre: "Gestión de Personas II", semestre: 7, color: "#D0F0C0" },

  // Semestre 8
  { nombre: "Electiva IV", semestre: 8, color: "#F9D5E5" },
  { nombre: "Electiva II", semestre: 8, color: "#F9D5E5" },
  { nombre: "Electiva III", semestre: 8, color: "#F9D5E5" },
  { nombre: "Metodología de la Investigación en Administración", semestre: 8, color: "#F9D5E5" },
  { nombre: "Administración Estratégica II", semestre: 8, color: "#F9D5E5" },

  // Semestre 9
  { nombre: "Electiva IX", semestre: 9, color: "#FFE4B5" },
  { nombre: "Electiva VI", semestre: 9, color: "#FFE4B5" },
  { nombre: "Electiva VIII", semestre: 9, color: "#FFE4B5" },
  { nombre: "Electiva V", semestre: 9, color: "#FFE4B5" },
  { nombre: "Electiva VII", semestre: 9, color: "#FFE4B5" },

  // Semestre 10
  { nombre: "Trabajo Profesional en Administración", semestre: 10, color: "#D8BFD8" },
  { nombre: "Electiva XII", semestre: 10, color: "#D8BFD8" },
  { nombre: "Electiva XI", semestre: 10, color: "#D8BFD8" },
  { nombre: "Electiva X", semestre: 10, color: "#D8BFD8" }
];

function crearMalla() {
  const container = document.getElementById("malla-container");

  // Agrupar ramos por semestre
  const semestres = {};

  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) {
      semestres[ramo.semestre] = [];
    }
    semestres[ramo.semestre].push(ramo);
  });

  // Crear columnas para cada semestre
  for (const [semestre, listaRamos] of Object.entries(semestres)) {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");

    // Título semestre
    const h2 = document.createElement("h2");
    h2.textContent = `Semestre ${semestre}`;
    divSemestre.appendChild(h2);

    // Agregar ramos
    listaRamos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.classList.add("ramo");
      divRamo.textContent = ramo.nombre;
      divRamo.style.backgroundColor = ramo.color;
      divSemestre.appendChild(divRamo);
    });

    container.appendChild(divSemestre);
  }
}

window.onload = crearMalla;
