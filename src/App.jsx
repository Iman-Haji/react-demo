import { useState } from 'react';
import Card from './Card.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import image from './assets/panda.png';

function App() {
  const [persons, setPersons] = useState([{ id: 0, name: 'Jane Doe', title: 'CEO', age: 21 },
  { id: 1, name: 'Ann', title: 'BOSS', age: 39 },
  { id: 2, name: 'Randy', title: 'Employee', age: 28 },
  ]);

  /*const eventHandler = (name) => {
    console.log(name);
  }*/
  const removeHandler = (id) => {
    const updatedArray = persons.filter(person => person.id !== id)
    setPersons(updatedArray)
  }
  return (
    <>
      <header logo="IMAN HAJI" />
      <h1>This is my application.</h1>
      <main>
        <div className="cards">
          {persons.map((person) =>
          (<Card
            key={person.id}
            {...person.id}
            click={() => removeHandler(person.id)}
          />
          ))}
        </div>
        <button onClick={removeHandler}>Click me</button>
      </main >
      <footer copyright="hi" />
    </>
  );
}
//arrayFilter
//()=>  binds the data of person name 
//make a state which has array with three people
//name={person.name} age={person.age} title={person.title} number={person.id}
export default App;