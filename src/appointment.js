import React, { Component } from 'react';
import { Steps,Form, Table, Button} from 'antd';
import CommonStep from './component/steps';
import CommonAppointment from './component/commonappointment';
import { loginApi } from './api/api';
import { sendReq } from './utils/ajax';
import './App.css';

const Step = Steps.Step;
const FormItem = Form.Item;

class Appointment extends Component {
  constructor(props){
    super(props);
    this.state ={
        modal:{
            visible:false,
            timeinfo:{},
        }
    }
  }
  componentDidMount(){
    sendReq(loginApi,'POST').then(rep=>{   
        console.log(rep.data.response);
    })
  }
  headonCheckStatus(item){
    this.setState({modal:{visible:item}});
 }
  goappointment(item,time){
      console.log(item);
      console.log(time);
    this.setState({modal:{visible:true,timeinfo:item}});
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const columns = [
        { title: '日期/时间', dataIndex: 'daytime', key: 'daytime',fixed: 'left', },
        { title: '9:00-9:30', dataIndex: 'timeone', key: 'timeone',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render,'9:00-9:30')} disabled={render.timeone}>预约</Button> 
            </div>
        },
        { title: '9:35-10:05', dataIndex: 'timetwo', key: 'timetwo',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timetwo} >预约</Button> 
            </div>
        },
        { title: '10:10-10:40', dataIndex: 'timethree', key: 'timethree',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timethree} >预约</Button> 
            </div>
        },
        { title: '10:55-11:25', dataIndex: 'timefour', key: 'timefour',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timefour}>预约</Button> 
            </div>
        },
        { title: '11:30-12:00', dataIndex: 'timefive', key: 'timefive',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timefive}>预约</Button> 
            </div>
        },
        { title: '13:30-14:00', dataIndex: 'timesix', key: 'timesix',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timesix}>预约</Button> 
            </div>
        },
        { title: '14:05-14:35', dataIndex: 'timeseven', key: 'timeseven',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timeseven}>预约</Button> 
            </div>
        },
        { title: '14:40-15:10', dataIndex: 'timeeight', key: 'timeeight',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timeeight}>预约</Button> 
            </div>
        },
        { title: '15:25-15:55', dataIndex: 'timenine', key: 'timenine',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timenine}>预约</Button> 
            </div>
        },
        { title: '16:00-16:30', dataIndex: 'timeten', key: 'timeten',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timeten}>预约</Button> 
            </div>
        },
        { title: '16:35-17:05', dataIndex: 'timeeleven', key: 'timeeleven',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timeeleven}>预约</Button> 
            </div>
        },
        { title: '17:10-17:40', dataIndex: 'timetwelve', key: 'timetwelve',render: (text , render)=>
            <div>
                <Button type="primary" onClick={this.goappointment.bind(this,render)} disabled={render.timetwelve}>预约</Button> 
            </div>
        },
    ];
    const data = [
    {
        daytime: '2018-12-13',
        timeone:false,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:false,
        timeeight:false,
        timenine:false,
        timeten:true,
        timeeleven:true,
        timetwelve:true,
    },
    {
        daytime: '2018-12-14',
        timeone:true,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:false,
        timeeight:true,
        timenine:false,
        timeten:true,
        timeeleven:false,
        timetwelve:false,
    },
    {
        daytime: '2018-12-15',
        timeone:true,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:false,
        timesix:false,
        timeseven:false,
        timeeight:false,
        timenine:true,
        timeten:true,
        timeeleven:false,
        timetwelve:true,
    },
    {
        daytime: '2018-12-16',
        timeone:false,
        timetwo:false,
        timethree:false,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:false,
        timeeight:true,
        timenine:false,
        timeten:true,
        timeeleven:false,
        timetwelve:false,
    },
    {
        daytime: '2018-12-17',
        timeone:false,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:false,
        timesix:true,
        timeseven:false,
        timeeight:false,
        timenine:true,
        timeten:true,
        timeeleven:false,
        timetwelve:true,
    },
    {
        daytime: '2018-12-18',
        timeone:false,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:false,
        timeeight:false,
        timenine:false,
        timeten:true,
        timeeleven:true,
        timetwelve:true,
    },
    {
        daytime: '2018-12-19',
        timeone:false,
        timetwo:false,
        timethree:false,
        timefour:false,
        timefive:true,
        timesix:false,
        timeseven:false,
        timeeight:false,
        timenine:false,
        timeten:true,
        timeeleven:false,
        timetwelve:true,
    },
    {
        daytime: '2018-12-20',
        timeone:false,
        timetwo:false,
        timethree:true,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:false,
        timeeight:false,
        timenine:false,
        timeten:false,
        timeeleven:false,
        timetwelve:false,
    },
    {
        daytime: '2018-12-21',
        timeone:false,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:false,
        timeeight:false,
        timenine:false,
        timeten:true,
        timeeleven:true,
        timetwelve:true,
    },
    {
        daytime: '2018-12-22',
        timeone:true,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:true,
        timeeight:false,
        timenine:true,
        timeten:true,
        timeeleven:true,
        timetwelve:true,
    },
    {
        daytime: '2018-12-23',
        timeone:false,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:true,
        timeeight:false,
        timenine:true,
        timeten:true,
        timeeleven:true,
        timetwelve:true,
    },
    {
        daytime: '2018-12-24',
        timeone:false,
        timetwo:true,
        timethree:true,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:false,
        timeeight:false,
        timenine:false,
        timeten:true,
        timeeleven:true,
        timetwelve:true,
    },
    {
        daytime: '2018-12-25',
        timeone:false,
        timetwo:false,
        timethree:false,
        timefour:false,
        timefive:true,
        timesix:true,
        timeseven:false,
        timeeight:false,
        timenine:false,
        timeten:false,
        timeeleven:false,
        timetwelve:false,
    },
    ];
    return (
      <div className="bgyuyue">
        <div className="yuyuecontaimer">
          <CommonStep step={1}/>
          <Table 
          columns={columns} 
          dataSource={data}  
          style={{marginTop:"50px"}} 
          bordered={true}
          scroll={{ x: 1380}} 
          rowKey={(record) => {
                return record.id;
          }}
            />
          <CommonAppointment modal={this.state.modal} headonCheckStatus={this.headonCheckStatus.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Form.create()(Appointment);