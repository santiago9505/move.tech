const texto = document.getElementById("cuanto_obtendras");
function enlace()
{
  location.href = "https://forms.gle/1idEkpRjWUEfn3Ad9"
}
function linkMercadopago()
{
  location.href = "https://mpago.li/1YHhctH"
}

function obtenerRentabilidad() {
  let monto = parseInt(document.getElementById("monto").value);
  let plazo = parseInt(document.getElementById("otro").value);
  let tasa;
    if (monto < 5000000){
      tasa = 10
    } else if (monto < 10000000){
      tasa = 12
    }
    else if (monto >= 10000000) {
      tasa = 16
  };
 
  let resultado = Math.floor(monto * (1 + plazo/12 * tasa/100));
  let resultado_miles = new Intl.NumberFormat(["ban", "id"]).format(resultado);
  rentabilidad = resultado - monto
  rentabilidad_miles = new Intl.NumberFormat(["ban", "id"]).format(rentabilidad);
  texto.textContent = `El dinero que recibirás es de: $${resultado_miles} es decir, obtendrás una rentabilidad de $${rentabilidad_miles} en un plazo de ${plazo} meses`;
  plazo = parseInt(document.getElementById("otro").value);
  
}
