import React, {Component} from 'react';
import './Weather.css';

interface StateWeather {
    cityId: number;
    apiKey: string;
    dataWithIcon: string;
}

class Weather extends Component<{}, StateWeather> {

    state = {
        cityId: 3093133,
        apiKey: 'f687940c1da974f5fbd6e3dd775b226e',
        dataWithIcon: ''
    };

    componentDidMount(): void {
        const { cityId, apiKey } = this.state;
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&mode=html&appid=${apiKey}`,  {
            headers: {
            'Content-Type': 'text/plain',
            }
        })
            .then(res => res.text())
            .then(res => {
                this.setState({
                    dataWithIcon: res
                })
            })
    }

    render () {
        return (
            <div>
                <div>Weather today in: </div>
                <div>
                    <section
                        className="weather-section"
                        dangerouslySetInnerHTML={{ __html: this.state.dataWithIcon}}
                    />
                </div>
            </div>
        );
    }
}

export default Weather;