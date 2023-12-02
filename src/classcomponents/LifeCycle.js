import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("1. constructor called");
    this.state = {
      data: null,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("2. getDerivedStateFromProps called");
    return null; // You can return an object to update the state based on props
  }

  componentDidMount() {
    console.log("3. componentDidMount called");
    // Perform actions after the component is mounted
    // This is a good place to fetch data from an API
    // Update the state, etc.
    if (this.state.data === null) {
      this.setState({ data: 100 });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("4. shouldComponentUpdate called");
    // Return true if the component should update, false otherwise
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("5. getSnapshotBeforeUpdate called");
    // Capture information before the component updates
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("6. componentDidUpdate called");
    // Perform actions after the component updates
  }

  componentWillUnmount() {
    console.log("7. componentWillUnmount called");
    // Perform cleanup before the component is unmounted
    // Clear timers, cancel network requests, etc.
  }

  render() {
    console.log("Render called");
    return <div>LifeCycle</div>;
  }
}



