import React, { Component } from "react";
import Axios from "axios";
import { Card, Form } from "react-bootstrap";
import { useParams } from 'react-router-dom';
// import Axios from "axios";
import './src/style.css';

class TopUp extends Component {
  state = {
    data: [],
    query: this.props.location.search || null,
    querySearch: this.props.location.search.slice(3) || null,
  };
  componentDidMount() {
    Axios.get(
      this.state.query
        ? `https://zwallet-rani.herokuapp.com/transfersearch${this.state.query}`
        : "https://zwallet-rani.herokuapp.com/transfer/"
    )
    // Axios.get(`https://zwallet-api.herokuapp.com/transfer/${this.state.query}`)
      .then((res) => {
        this.setState({ data: res.data.data });
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    console.log(this.props, 'aha')
    return (
      <>
        <p>How To Top Up</p>
        <ol>
          <li>Go to the nearest ATM or you can use E-Banking.</li>
          <li>Go to the nearest ATM or you can use E-Banking.</li>
          <li>Select “Transfer” in the menu.</li>
          <li>Type the virtual account number that we provide you at the top.</li>
          <li>Type the amount of the money you want to top up.</li>
          <li>Read the summary details</li>
          <li>Press transfer / top up</li>
          <li>You can see your money in Zwallet within 3 hours.</li>
        </ol>
        {this.state.data.map((item, index) => {
          return (
            <Card style={{ padding: 15 }}>
              {item.receiver_name}
            </Card>
          );
        })}
      </>
    );
  }
}

export default TopUp;