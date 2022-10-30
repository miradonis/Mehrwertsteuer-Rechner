

function plus_minusVat(event) {
  event.preventDefault();

  let calculation;
  /**
   *  prüfen ob mwst dazugerechnet werden soll
   */

  if (document.getElementById("netto_brutto").checked) { 
    document.getElementById("output").innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    document.getElementById("brutto_netto_value").innerHTML = "Bruttobetrag (Endpreis)";

      /**
       * -prüfen ob 19% ausgewählt wurde
       * -berechnung
       * -daten zurück ins html
       */
      if (document.getElementById("nineteen_percent").checked) {
        const userInput = Number(document.getElementById("userInput").value);

        calculation = userInput * 0.19;

        document.getElementById("mwst").innerHTML = Math.round(userInput * 0.19) + " €";
        document.getElementById("final_price").innerHTML = Math.round((userInput + calculation) * 100) / 100 + " €";

        /**
         * -7% wurde ausgewählt
         * -berechnung
         * -daten zurück ins html
         */
      } else {
        const userInput = Number(document.getElementById("userInput").value);

        calculation = userInput * 0.07;

        document.getElementById("mwst").innerHTML = Math.round(calculation) + " €";
        document.getElementById("final_price").innerHTML = Math.round(userInput + calculation) + " €";
      }

    /**
     * prüfen ob mwst abgezogen werden soll
     */
  } else {
    document.getElementById("brutto_netto_value").innerHTML = "Nettobetrag";
    document.getElementById("output").innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
  

      /**
       * -prüfen ob 19% ausgewählt wurde
       * -berechnung
       * -daten zurück ins html
       */

      if (document.getElementById("nineteen_percent").checked) {
        const userInput = Number(document.getElementById("userInput").value);

        calculation = userInput / 1.19;

        document.getElementById("final_price").innerHTML = Math.round(calculation) + " €";
        document.getElementById("mwst").innerHTML = Math.round(userInput - calculation) + " €";

        /**
         * -7% wurde ausgewählt
         * -berechnung
         * -daten zurück ins html
         */
      } else {
        const userInput = Number(document.getElementById("userInput").value);

        calculation = userInput / 1.07;

        document.getElementById("final_price").innerHTML = Math.round(calculation) + " €";
        document.getElementById("mwst").innerHTML = Math.round(userInput - calculation) + " €";
      }
  }
}