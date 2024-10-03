import React, { Component } from 'react';

class Example3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: []
    };
  }

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ experiences: data.Experiences });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {this.state.experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{exp.company}</h3>
            <p>{exp.position}</p>
            <p>{exp.startDate} - {exp.location}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;