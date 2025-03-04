// 1. Popup (3p)
//
// Skapa en knapp "visa" på sidan. När man klickar på knappen ska en popup visas.
// Popup:en visar rubriken "En popup" och en stängknapp i en ruta.
// När man klickar på stängknappen ska popupen tas bort.

import { useState } from "react";

export default function Question1() {
  const [show, setShow] = useState(false);

  function ShowPopUp() {
    if (show) {
      return (
        <div>
          <h1>PopUp</h1>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Question 1</h1>
      <button onClick={() => setShow(true)}>Visa</button>
      <ShowPopUp />
    </div>
  );
}
