import React, {Component, useDebugValue} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {  
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weathers';

const data = {
    temperature: 25,
    weatherState: SUN,
    humidity: 10,
    wind: '20 m/s',
}

const data2 = {
    temperature: 20,
    weatherState: WINDY,
    humidity: 8,
    wind: '30 m/s',
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state={
            city: "Guayaquil",
            data: data,
        }
    }

    handleUpdateClick = ()=>{
        console.log("actualizado");

        this.setState({
            city: 'Daule',
            data: data2,
        });
    }

    render(){
    const {city,data}=this.state;
    return(
        <div className ="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data = {data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        )
    }
}

export default WeatherLocation;