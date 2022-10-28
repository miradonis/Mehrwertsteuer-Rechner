console.log("test");

function plusVat() {
  /**
   *  prüfen ob mwst dazugerechnet werden soll
   */

  if (document.getElementById("netto_brutto").checked) {
    document.getElementById("output").innerHTML =
      "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    document.getElementById("brutto_netto_value").innerHTML =
      "Bruttobetrag (Endpreis)";

    /**
     * prüfen ob 19% ausgewählt wurde
     */
    if (document.getElementById("nineteen_percent").checked) {
      const userInput = Number(document.getElementById("userInput").value);
      console.log(userInput);

      /**
       *  berechnung mwst 19%
       */
      const calculation = userInput * 0.19;
      console.log(calculation);

      /**
       *  mwst zurück ins html
       * */
      document.getElementById("mwst").innerHTML =
        Math.round(calculation * 100) / 100;

      /**
       *  gesamtbetrag zurück ins html
       */
      document.getElementById("final_price").innerHTML =
        Math.round((userInput + calculation) * 100) / 100;

      /**
       * prüfen ob 7% ausgewählt wurde
       */
    } else if (document.getElementById("seven_percent").checked) {
      const userInput = Number(document.getElementById("userInput").value);
      console.log(userInput);

      /**
       *  berechnung mwst 7%
       */
      const calculation = userInput * 0.07;
      console.log(calculation);

      /**
       * mwst zurück ins html
       */

      document.getElementById("mwst").innerHTML = Math.round(calculation);

      /**
       * gesamtbetrag zurück ins html
       */
      document.getElementById("final_price").innerHTML = Math.round(
        userInput + calculation
      );
    }
  } else if (document.getElementById("brutto_netto").checked) {
    /**
     * prüfen ob mwst abgezogen werden soll
     */
    document.getElementById("output").innerHTML =
      "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    document.getElementById("brutto_netto_value").innerHTML = "Nettobetrag";

    /**
     * prüfen ob 19% ausgewählt wurde
     */

    if (document.getElementById("nineteen_percent").checked) {
      const userInput = Number(document.getElementById("userInput").value);
      console.log(userInput);

      /**
       *  berechnung mwst 19%
       */
      const calculation = userInput * 0.19;
      console.log(calculation);

      /**
       *  mwst zurück ins html
       */
      document.getElementById("mwst").innerHTML =
        Math.round(calculation * 100) / 100;

      /**
       *  gesamtbetrag zurück ins html
       */
      document.getElementById("final_price").innerHTML =
        Math.round((userInput - calculation) * 100) / 100;

      /**
       * prüfen ob 7% ausgewählt wurde
       */
    } else if (document.getElementById("seven_percent").checked) {
      const userInput = Number(document.getElementById("userInput").value);
      console.log(userInput);

      /**
       *  berechnung mwst 7%
       */
      const calculation = userInput * 0.07;
      console.log(calculation);

      /**
       * mwst zurück ins html
       */

      document.getElementById("mwst").innerHTML = Math.round(calculation);

      /**
       * gesamtbetrag zurück ins html
       */
      document.getElementById("final_price").innerHTML =
        userInput - calculation;
    }
  }
}
