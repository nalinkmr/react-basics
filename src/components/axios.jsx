import React, { Component } from "react";
import axios from "axios";

export class axioss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      errorMessage: ''
    };
  }

  componentDidMount() {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        //console.log(response);
        this.setState({ list: response.data });
      })
      .catch((error) => {
        console.error(error);
        this.setState({error: 'something went wrong'});
      });
  }

  render() {
    const { list , error } = this.state;
    return (
      <div>
        list of post
        {
          list.length ?
          list.map((ele) => (
            <div>{ele}</div>
          ))
            : <div>length is null </div>
        }
        { error !== '' ? <div>{error}</div> : null}
      </div>
    );
  }
}

export default axioss;
