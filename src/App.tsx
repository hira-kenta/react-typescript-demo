import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: "Kenta",
    last: "Hirakata"
  }

  const nameList = [
    {
      first: "Hirakata",
      last: "Kenta"
    },
    {
      first: "Hirakata",
      last: "Misato"
    },
    {
      first: "Horie",
      last: "Popo"
    },
  ]


  return (
    <div className="App">
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name='Kenta' isLoggedIn={true}></Greet>
    </div>
  );
}

export default App;
