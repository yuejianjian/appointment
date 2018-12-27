import React, { Component } from 'react';
import { Form,Radio,Modal,Card,Row,Col,message,Select} from 'antd';
import { withRouter } from 'react-router-dom';
import '../App.css';
const FormItem=Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class CommonAppointment extends Component {
  constructor(props){
    super(props);
    this.state ={
        modal:{
            visible:false
        },
    }
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }
    componentWillReceiveProps(nextProps){
        this.setState({
            modal:nextProps.modal,
        });
    }
/**
 * 回调父组件更改父组件的visible的值，以便下一次的处理
 *
 * @memberof UserRole
 */
    handleCancel = () => {
        this.setState({
            modal:{visible:false}
        });
        this.props.headonCheckStatus(false);
    };
    handleOk = (e) => {
        const data = this.props.form.getFieldsValue();  
        console.log(data);
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.history.replace('/successfulappointment');
            }else{
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
            <Modal
                title="预约时间"
                visible={this.state.modal.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                width={800}
                okText="提交"
                cancelText="取消"
                >
                <Form>
                    <Card >
                        <Row gutter={24}>
                            <Col span={12}>
                                <FormItem label="学科" >
                                    {getFieldDecorator('subject',
                                        {
                                        initialValue:'',
                                        rules: [{ required: true, message: '请选择学科' }],
                                        })(
                                        <Select>
                                            <Option value="a">数学</Option>
                                            <Option value="b">语文</Option>
                                            <Option value="c">外语</Option>
                                            <Option value="d">物理</Option>
                                            <Option value="e">生物</Option>
                                            <Option value="f">化学</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem label="层级" >
                                    {getFieldDecorator('hierarchy',
                                        {
                                        initialValue:'',
                                        rules: [{ required: true, message: '请选择层级' }],
                                        })(
                                        <Select>
                                            <Option value="a">幼儿</Option>
                                            <Option value="b">小学</Option>
                                            <Option value="c">中学</Option>
                                            <Option value="d">高中</Option>
                                            <Option value="e">其他</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <FormItem label="面授方式" >
                                    {getFieldDecorator('remarktype',
                                        {
                                        initialValue:'',
                                        rules: [{ required: true, message: '请选择面授方式' }],
                                        })(
                                        <RadioGroup>
                                            <Radio value="a">线上直播点评</Radio>
                                            <Radio value="b">线下面授点评</Radio>
                                        </RadioGroup>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Card>
                </Form>
            </Modal>
        </div>
        );
    }
}
const myAppointment = Form.create()(CommonAppointment);
export default withRouter(myAppointment);

