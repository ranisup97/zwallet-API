import React, { Component } from "react";
import Axios from "axios";
import { Card, Form } from "react-bootstrap";
import { useParams } from 'react-router-dom';
// import './src/style.css'

export default class Profile extends React.Component{
    state={
        person: [],
    };

    componentDidMount(){
        Axios.get('https://zwallet-rani.herokuapp.com/profile')
        .then(res=>{
            this.setState({person: res.data.data});
            console.log(res);
        })
        .catch((err) =>{
            console.log(err.message);
        });

    }
        render(){
            return (
            <>
            <p>Rani</p>
            <ul>
                {this.state.person.map(person=><li>{person.firstName}</li>)}
            </ul>
            </>
            )
        
    }
}