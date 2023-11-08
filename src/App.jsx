import { useState } from 'react';
import Card from './Card.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import image from './assets/panda.png';

//user or name or message etc.
function Greeting({ name }) {
  if (name === 'Iman') {
    return <p>Welcome {name}</p>
  }
  return <p>Please log in.</p>
}
console.log(Greeting);

function App() {
  const [persons, setPersons] = useState([
    { id: 0, name: 'Jane', title: 'CEO', age: 21 },
    { id: 1, name: 'Ann', title: 'BOSS', age: 44 },
    { id: 2, name: 'Randy', title: 'Employee', age: 18 },
  ]);

  /*const eventHandler = (name) => {
    console.log(name);
  }*/

  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  return (
    <>
      <Header logo="Iman Haji" />
      <main>
        <h2>This is my App.</h2>
        <div className="cards">
          {persons.map((person) =>
          (<Card
            key={person.id}
            {...person}
            click={() => removeHandler(person.id)}
          />
          ))}
        </div>
      </main>
      <Footer copyright="Copyright smth" />
    </>
  );
}

//arrayFilter
//()=>  binds the data of person name 
//make a state which has array with three people
//name={person.name} age={person.age} title={person.title} number={person.id}
export default App;