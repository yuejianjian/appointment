import React, { Component } from 'react';
import CommonStep from './component/steps';
import './App.css';

class SuccessfulAppointment extends Component{

    render(){
        return(
            <div className="bglogin">
                <div className="container">
                    <CommonStep step={2}/>
                    <div className="successtitle">恭喜你预约成功，请在规定的预约时间内到指定地点进行面授。祝你面授成功</div>
                </div>
            </div>
        )
    }
}
export default SuccessfulAppointment;