import React, { Component } from 'react';
import { Steps,Form, Icon, Input, Button, Checkbox, Row, Col,} from 'antd';
import { withRouter } from 'react-router-dom';
import CommonStep from './component/steps'
import './App.css';

const Step = Steps.Step;
const FormItem = Form.Item;

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      onshow:false,
      ondisabled:false,
      count: 60, // 秒数初始化为60秒
      counting:false // 文案默认为‘获取验证码‘
    }
  }
  //获取短信验证码
  handleClick = () => {
  this.setState( { counting: true, count: 60});
  this.setInterval(); //启动倒计时
  }
  setInterval=() => {
    this.timer = setInterval(this.countDown, 1000)
  }
  countDown = () =>{
    const { count } = this.state;
    if ( count === 1) {
        this.clearInterval();
        this.setState( { counting: false });
    } else {
        this.setState( { counting: true, count: count - 1});
    }
  }
  // 清除倒计时
  clearInterval=() =>{
    clearInterval(this.timer)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.history.replace('/appointment');
      }else{
        this.setState({
          ondisabled:true,
        })
      }
    });
  }
  OnFocusInput=()=>{

    
    this.setState({
      onshow:true,
      ondisabled:false,
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 ,offset: 8},
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 8 ,offset: 8},
      },
    };
    return (
      <div className="bglogin">
        <div className="container">
          <CommonStep step={0}/>
          <Form onSubmit={this.handleSubmit} className="login-form" style={{textAlign:"center",marginTop:"100px"}}>
            <FormItem {...formItemLayout}>
            {getFieldDecorator('youphone', {
                rules: [{ required: true, message: '手机号有误!' }],
            })(
                <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号" onFocus={this.OnFocusInput}/>
            )}
            </FormItem>
            <FormItem {...formItemLayout} style={{'display':this.state.onshow===true?"block":"none"}}>
              <Row gutter={8}>
                <Col span={7}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: '验证码有误！' }],
                  })(
                    <Input placeholder="请输入验证码"/>
                  )}
                </Col>
                <Col span={12}>
                  <Button style={{height:"40px",minWidth:"255px"}} type="primary" disabled={this.state.ondisabled} onClick={this.handleClick}>{this.state.counting===false?"发送短信验证":this.state.count+"秒"}</Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem  {...formItemLayout} >
              <Button type="primary" htmlType="submit"  style={{minWidth:"360px",height:"40px"}}>
                  下一步
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
const myApp = Form.create()(App);
export default withRouter(myApp);
