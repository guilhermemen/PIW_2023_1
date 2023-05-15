import React, { useEffect } from 'react';

const Questao01Y = ({ alunos, onMediaChange }) => {
    useEffect(() => {
      const medias = alunos.map(aluno => (aluno.notas.ap1 + aluno.notas.ap2) / 2);
      onMediaChange(medias);
    }, [alunos, onMediaChange]);
  
    return null; // Este componente não renderiza nada
  };

export default Questao01Y