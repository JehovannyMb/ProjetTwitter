import axios from 'axios';
//import { useState } from 'react';
//const [mount, setState]=useState(0)
export default class PersonList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/guide/`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
          {
            this.state.persons
              .map(person =>
                <li key={person.id}>{person.name}</li>
              )
          }
        </ul>
      )
    }
  }