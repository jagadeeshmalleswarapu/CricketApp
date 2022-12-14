import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8111`,
});
export class Boot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
}
    getFirstNames = () => {
        api.get('/all').then((sets)=>{
            console.log(sets);
            this.setState({
                cards: sets.data
            })
        })
    };

  render() {
    return (
      <div>
        <br />
        <div>Boot</div>
        <br />
        <br />
        <hr /><ul>
        {this.state.cards.map((i)=>(
           <li> <img src={ i.img } alt='not found'></img></li>
           ))}
        </ul><br />
        <hr />
        <br />
        <button onClick={this.getFirstNames}>click on me</button>
      </div>
    );
  }
}

export default Boot;
