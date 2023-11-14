# RECAP OF EVERYTHING

## Destructuring
Below is destructuring. Destructuring is creating new variables by taking some values from the data stored in arrays or objects.

```js
const Card = ({ name, age, title, click }) => 
```

```js
 const [persons, setPersons] = useState([
    { id: 0, name: 'Jane', title: 'CEO', age: 21 },
    { id: 1, name: 'Ann', title: 'BOSS', age: 44 },
    { id: 2, name: 'Randy', title: 'Employee', age: 18 },
  ]);
```

## Background Images in React
Two methods I found most useful. The first is common and easy:

(CSS)
```css
body {
  background-image: url('./assets/panda.png');
```

or, by importing, you can get the image directly from your files. 

```js
import image from './assets/panda.png';

function App() {
  return (
    <div style={{}}>
      Hello!
    </div>
  );
}
```