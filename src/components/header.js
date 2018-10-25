import React, { Component } from "react";      //固定用法

export default class Header extends Component {
    constructor(props) {    //函数构造器，存储初始化状态 属性好和事件绑定
        super(props);
        this.state = {
            displayflag: false
        };
        this.clickshow = this.clickshow.bind(this); //事件绑定，明确this指向
    }

    clickshow() {
        this.setState({
            displayfalg:!this.state.displayflag  //点击时 显示隐藏切换
        })
    }

    render() {
        let showdiv = {
            display: this.state.clickshow ? "block" : "none"
        };
        return (              //显示组件的属性name的值
            <div>{this.props.name}
                <div className="btn" onClick={this.clickshow}>按钮</div>
                <div className="hides" style={showdiv}>内容</div>
            </div>
        )
    }
}