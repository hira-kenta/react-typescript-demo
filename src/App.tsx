import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
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
      first: "jgseirjgsiogjr",
      last: "gesirjgi"
    },
    {
      first: "Hkgopgk@sr",
      last: "Mgeporgs"
    },
    {
      first: "Hgojape",
      last: "P@okewpoeawoo"
    },
  ]


  return (
    <div className="App">
      <Button handleClick={(event, id) => {
        console.log("Button clicked!", event, id)
      }} />
      
      <Input value='' handleChange={(event) => console.log(event)}></Input>
    </div>
  );
}

export default App;
