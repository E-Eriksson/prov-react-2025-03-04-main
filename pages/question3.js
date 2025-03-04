// 3. Buttons (3p)
// Skapa två komponenter: Button och ButtonWithChildren.
// Button ska ha en prop `title` som anger rubriken på knappen.
// ButtonWithChildren ska använda children för att visa texten i knappen.
// Båda komponenter ska ha en prop `onClick` som kallas när man klickar på knappen.
// Använd båda komponenterna på sidan. När man klickar på Button-knappen ska
// det skrivas ut "klick på Button" på sidan.
// När man klickar på ButtonWithChildren-knappen
// ska det skrivas ut "klick på ButtonWithChildren".

import { useState } from "react";

export default function Question3() {
  const [show, setShow] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  function Button({ title }) {
    return <button onClick={() => setShow(true)}>{title}</button>;
  }

  function ButtonWithChildren({ children }) {
    return (
      <div>
        <button onClick={() => setShowChildren(true)}>{children}</button>
      </div>
    );
  }

  function ShowClick() {
    if (show) {
      return <div>Klick med Button</div>;
    }
  }

  function ShowClickWithChildren() {
    if (showChildren) {
      return <div>Klick med ButtonWithChildren</div>;
    }
  }

  return (
    <div>
      <h1>Question 3</h1>
      <Button title="Klicka" />
      <ShowClick />
      <ButtonWithChildren>Klicka</ButtonWithChildren>
      <ShowClickWithChildren />
    </div>
  );
}
