import { useState, useEffect } from 'react';
import Variable from '../../data/Variable/Variable';


import './Temperatures.css'


function Temperatures() {

    const [celcius, setCelcius] = useState(25)
    const [fahrenheit, setFahrenheit] = useState(77)
    const [kelvin, setKelvin] = useState(298.15)

    useEffect(() => {
        setFahrenheit((celcius * 9) / 5 + 32); // แปลง Celcius เป็น Fahrenheit
        setKelvin(celcius + 273.15); // แปลง Celcius เป็น Kelvin
      }, [celcius]); // ทำการคำนวณใหม่เมื่อค่า celcius เปลี่ยนแปลง
    


    return ( <div className="temperatures-container">
        <h3 className="temperatures-title">Temperatures</h3>
        <h3 className="temperatures-display">
        <span className='badge bg-primary'>{celcius}C </span>
        <span className='badge bg-primary'>{fahrenheit}F </span>
        <span className='badge bg-primary'>{kelvin}K</span>
        </h3>
        <div className="temperatures-variables">
            <Variable name={'Celcius'} value={celcius}
             setValue={setCelcius} />
            <Variable name={'Fahrenheit'} value={fahrenheit} 
            setValue={setFahrenheit} />
            <Variable name={'Kelvin'} value={kelvin} 
            setValue={setKelvin} />
        </div>
    </div> );
}

export default Temperatures;