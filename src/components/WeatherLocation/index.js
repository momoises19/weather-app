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

/* cambiamos de componente funcional a clase este elemento 
para poder usar otros metodos */
class WeatherLocation extends Component {
    //aqui se establece el estado inicial del componente
    //es lo que cargara en primera instancia 
    constructor(){
        super();
        this.state={
            city: "Guayaquil",
            data: data,
        }
    }

    //aqui es donde ira el llamado del evento onClick y rederizara los nuevos datos
    handleUpdateClick = ()=>{
        console.log("excelente :D");

        this.setState({
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