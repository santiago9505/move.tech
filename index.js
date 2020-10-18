function enlace()
{
  location.href = "https://forms.gle/1idEkpRjWUEfn3Ad9"
}
function linkMercadopago()
{
  location.href = "https://mpago.li/1YHhctH"
}

function obtenerRentabilidad() {
  let texto = document.getElementById("cuanto-obtendras");
  let monto = parseInt(document.getElementById("monto").value);
  let plazo = parseInt(document.getElementById("otro").value);
  let tasa;
    if (monto < 3000000){
      tasa = 10
    } else if (monto < 5000000){
      tasa = 14
    } else if (monto < 10000000) {
      tasa = 20
    }
    else if (monto >= 10000000) {
      tasa = 24
  };
  let resultado = Math.floor(monto * (1 + plazo/12 * tasa/100));
  alert(`El dinero que recibirás es de: $${resultado} es decir, obtendrás una rentabilidad de $${resultado - monto} en un plazo de ${plazo} meses`)
}