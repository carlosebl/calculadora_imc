import { useState } from 'react';

import './main.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const getAltura = (e) => {
    setAltura(e.target.value);
  }
  
  const getPeso = (e) => {
    setPeso(e.target.value);
  }
  
  const getResultado = () => {
    const resultado = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    setResultado(resultado.toFixed(1));
  }

  const renderizaClassificacao = () => {
    if (resultado < 18.5) {
      return <h3>MAGREZA</h3>
    } else if (resultado <25) {
      return <h3>NORMAL</h3>
    } else if (resultado <30) {
      return <h3>SOBREPESO</h3>
    } else if (resultado <40) {
      return <h3>OBESIDADE</h3>
    } else {
      return <h3>OBESIDADE GRAVE</h3>
    }
  }

  return (
    <>
      <div className="container">
        <h1 className='titulo'>IMC</h1>
        <div className='apresentacao'>
          <h2 className='subtitulo'>Cálculo IMC</h2>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <p>O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.</p>
          <p>Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.</p>
        </div>
        <form className='formulario'>
          <div className='formulario-item'>
            <label htmlFor="altura">Altura em metros:</label>
            <input type="number" name="altura" value={altura} onChange={getAltura} />
          </div>
          <div className='formulario-item'>
            <label htmlFor="peso">Peso em quilogramas:</label>
            <input type="number" name="peso" value={peso} onChange={getPeso} />
          </div>
          <button type="button" onClick={getResultado}>Calcular</button>
        </form>
        <div className='tabela'>
            <h2 className='subtitulo'>Interpretação do IMC</h2>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                    <th>Grau de obesidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Menor que 18.5</td>
                    <td>Magreza</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Entre 18.5 e 24.9</td>
                    <td>Normal</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Entre 25 e 29.9</td>
                    <td>Sobrepeso</td>
                    <td>I</td>
                  </tr>
                  <tr>
                    <td>Entre 30 e 39.9</td>
                    <td>Obesidade</td>
                    <td>II</td>
                  </tr>
                  <tr>
                    <td>Maior que 40</td>
                    <td>Obesidade grave</td>
                    <td>III</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='resultado'>
              <h3>Seu IMC:</h3>
              <h3 className='imc'>{resultado}</h3>
              {renderizaClassificacao()}
            </div>
          </div>
      </div>
    </>
  )
}

export default App