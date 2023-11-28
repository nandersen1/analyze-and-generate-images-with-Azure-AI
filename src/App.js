import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonAction = (action) => {
    // Hier können Sie den Code für die gewählte Aktion (Bildanalyse/Bildgenerierung) hinzufügen
    // Verwenden Sie dazu den Wert in der 'inputValue'-State-Variable
    console.log(`Insert URL or type prompt '${action}' auslösen: ${inputValue}`);
  };

  return (
    <div>
      <h1>Computer vision</h1>
      <label>
      <div>Insert URL or type prompt:</div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={() => handleButtonAction('Bildanalyse')}>Analyze</button>
      <button onClick={() => handleButtonAction('Bildgenerierung')}>Generate</button>
    </div>
  );
}

export default App;