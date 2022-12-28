import React from "react";
import ButtonIconContainer from "../button/ButtonIconContainer";

const BigQuote = () => {
  return (
    <article className="big-quote">
      <div className="quote-container">
        <h1 className="heading-L">
          <span className="quotation-mark">“</span>A mais tola das virtudes é a
          idade. Que significa ter quinze, dezessete, dezoito ou vinte anos? Há
          pulhas, há imbecis, há santos, há gênios de todas as idades.
        </h1>
        <p className="author heading-S">
          <a href="">Nelson Rodrigues</a>| Escritor e poeta brasileiro
        </p>
      </div>
      <hr />
      <p className="verification body-S">
        Escrito em: “Flor de Obsessão: as 1000 melhores frases de Nelson
        Rodrigues”. Verificado através de{" "}
        <a href="https://pt.m.wikiquote.org/wiki/Idade">Wikipedia</a>.
      </p>
      <div className="icons-container">
        <ButtonIconContainer />
      </div>
    </article>
  );
};

export default BigQuote;
