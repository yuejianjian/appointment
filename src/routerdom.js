import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
 
import App from './App'
import Appointment from './appointment'
import SuccessfulAppointment from './successfulappointment'
import MyTest from './mytest'

 
class RouterMap extends React.Component {
    render() {
        return (   
        <HashRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path='/appointment' component={Appointment}/>
                <Route path='/successfulappointment' component={SuccessfulAppointment}/>
                <Route path='/mytest' component={MyTest}/>
            </Switch>
        </HashRouter>
        )
    }
}
 
export default RouterMap
