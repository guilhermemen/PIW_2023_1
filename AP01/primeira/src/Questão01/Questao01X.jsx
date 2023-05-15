import React, { useState } from 'react';
import Questao01Y from './Questao01Y';

function Questao01X() {

  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } }
  ];

  const [medias, setMedias] = useState([]);

  const handleMediaChange = (medias) => {
    setMedias(medias);
  };

  return (
    <div>
      <Questao01Y alunos={alunos} onMediaChange={handleMediaChange} />

      <h2>Alunos com média menor ou igual a 5.0:</h2>
      <ul>
        {alunos.map((aluno, index) => (
          medias[index] <= 5.0 && <li key={index}>{aluno.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Questao01X;