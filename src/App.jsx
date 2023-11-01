import { useState } from 'react';
import Card from './Card.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


function App() {
  const [persons, setPersons] = useState([{ id: 0, name: 'Jane Doe', title: 'CEO', age: 21 },
  { id: 1, name: 'Ann', title: 'BOSS', age: 39 },
  { id: 2, name: 'Randy', title: 'Employee', age: 28 },
  ]);

  return (
    <>
      <header logo="iman haji" />
      <main>
        <h1>This is my application.</h1>
        <div className="cards">

          {persons.map((person) => (<Card key={person.id} name={person.name} age={person.age} title={person.title} />))};
        </div>
      </main >
      <footer copyright="hi" />
    </>
  );
}
//make a state which has array with three people










/*
function App() {
  const [count, setCount] = useState(0)


  return (
  <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
  )
}
*/
export default App;