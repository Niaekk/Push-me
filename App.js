import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: '', // Спочатку id порожнє
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Виконуємо запит до GitHub API
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => {
        console.log(response.data); // Логуємо дані для перевірки
        // Встановлюємо значення id у стан
        this.setState({ id: response.data.id });
      })
      .catch(error => {
        console.error('Помилка при запиті до GitHub API:', error);
      });
  }

  render() {
    return (
      <div className="button_container">
        <Button bsStyle="primary" onClick={this.handleClick}>
          Натисни мене!
        </Button>
        <p>{this.state.id}</p>
        <FontAwesomeIcon icon={faStar} />
      </div>
    );
  }
}

export default App;
