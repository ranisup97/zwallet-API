import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { Lists, Users } from "./components";
import Axios from "axios";
import './src/style.css'


class Home extends Component {
      
    state = {
      data: []
    };
  
  componentDidMount() {
    Axios.get('https://zwallet-rani.herokuapp.com/transfer')
    .then((res) => {
      this.setState({ data: res.data.data});
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.message)
    });
  }

  render() {
    return (
      <>
      <div class="row col2 p-3 mt-1 mb-5 shadow mb-1 pb-5">
          <div class="col2 col-sm-12 col-md-9 flex-column text-white">
          <p class=""><small>Balance</small></p>
          <h3 class="card-text">Rp120.000</h3>
          <p><small>+62 813-9387-7946</small></p>
                      
          </div> 
                    <div class="col2 col-sm-12 col-md-3 flex-column">
                    <Button variant="outline-light">
                    <img src={require("../Components/assets/icons/arrow-upwhite.svg")}/>Transfer</Button>{' '}
                    <Button variant="outline-light">
                    <img src={require("../Components/assets/icons/plus.png")}/>Top Up</Button>{' '}

                        {/* <button type="button" class="btn btn-outline-light btn-md btn-block balance-button "><img
                                width="28" height="28" class="transfer"
                                src="asset/picture/arrow-upwhite.svg">Transfer</button>
                        <button type="button" class="btn btn-outline-light btn-md btn-block balance-button"><img
                                width="28" height="28" src="asset/picture/pluswhite.svg">Top Up</button> */}
                    </div>

                   
                    <div class="col col-sm-12 col-md-6 flex-column ">
                        <div class="col3 pt-3 mb-5 bg-white shadow pb-2">
                            <div class="row">
                                <div class="mb-5 col flex-column text-dark ml-3">
                                    
                                    <img src={require("../Components/assets/icons/arrow-upgreen.svg")}/>
                                    <p class=""><small>Income</small></p>
                                    <h5 class="card-text">Rp2.120.000</h5>

                                </div>
                                <div class="col flex-column text-dark ml-3">
                                <img src={require("../Components/assets/icons/arrow-upred.svg")}/>
                                    <p class=""><small>Expense</small></p>
                                    <h5 class="card-text">Rp1.560.000</h5>
                                </div>
                            </div>
                        </div>
               
                    </div>

                    
      </div>
      {this.state.data.map((item) => {
        return (
          <>
          <div key={item.id_transfer} stye={{margin: 15}} className="">
        <p>nama:{item.receiver_name}</p>

        
          </div>
          
          </>
        )
      })}
      </>
    );
  }
};

export default Home;
