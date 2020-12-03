import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>JS- programa fin de semana</h1>
<div>
 Programa que verifica el dia actual y avisa si es fin de seman o no
</div>
`;
function esFin() {
  const dia = new Date().getDate();
  return dia === 0 || dia === 6;
}

const hoy = new Date().getDate();

const dias = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo"
];

const mensaje = esFin()
  ? "Diviertete como loquillo"
  : "No chingues a penas es  " +
    dias[hoy] +
    ". Aguanta las carnitas ya mero es fin de semanuca";
document.getElementById("out").innerHTML = mensaje;
