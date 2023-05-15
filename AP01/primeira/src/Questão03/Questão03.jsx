import React, { useState, useEffect } from 'react';

function Questao03() {

  const [pais, setPais] = useState('');
  const [populacao, setPopulacao] = useState('');

  useEffect(() => {
    
//  utiliza-se o useEffect para fazer uma requisição assíncrona para a API que retorna 
//  os dados de população de um país. já o fetch como método de requisição
    
    fetch('https://api."https://restcountries.com/v3.1/region/europe?fields=capital,population".com/population')

// Dentro do useEffect, No primeiro then, convertemos a resposta em formato JSON. 
// Já no segundo then, é defenido estado dos componentes: pais e populacao com os valores obtidos da API.
      
.then(response => response.json())
      .then(data => {
        setPais(data.pais);
        setPopulacao(data.populacao);
      })
  }, []);

  return (
    <div>
      <h2>País: {pais}</h2>
      <h3>População: {populacao}</h3>
    </div>
  );

  
// No return do componente, exibimos o nome do país e sua população usando as variáveis de estado pais e populacao. 
// Essas variáveis serão atualizadas quando os dados forem obtidos pela API.
}

export default Questao03;
