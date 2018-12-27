import React, { Component } from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;

class CommonStep extends Component {
    constructor(props){
        super(props)
        this.state={
            current:this.props.step
        }
    }
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
        <div>
            <Steps  current={this.state.current} className="steps">
                <Step title="基本信息" />
                <Step title="预约时间" />
                <Step title="预约成功" />
            </Steps>
        </div>
        );
    }
}

export default CommonStep;