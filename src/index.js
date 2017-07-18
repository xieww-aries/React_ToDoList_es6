import React,{Component} from 'react';
import ReactDom from 'react-dom';

class ToDoList extends Component{
    constructor(){
        super();
        this.state={
            arr : [],
            ipt1:'',
            ipt2:''
        };
        this.updateArr = this.updateArr.bind(this);
    }
    updateArr(data){
        this.setState({
            arr : data
        })
    }
    render(){
        return (
            <div title="ToDoList">
                <Do arr={this.state.arr} send={this.send} updateArr={this.updateArr}></Do>
                <List arr={this.state.arr}></List>
            </div>
        )
    }
}

class Do extends Component{
    constructor(){
        super();
        this.state={
            ipt1:'',
            ipt2:''
        };
        this.nameChange = this.nameChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
        this.send = this.send.bind(this);
    }
    nameChange(ev){
        this.setState({
            ipt1:ev.target.value
        })
    }
    contentChange(ev){
        this.setState({
            ipt2:ev.target.value
        })
    }
    send(){
        // alert('OK');
        let arr = this.props.arr;
        arr.unshift({
            name:this.state.ipt1,
            content:this.state.ipt2
        });
        this.setState({
            arr : arr,
            ipt1 : '',
            ipt2 : ''
        });
        this.props.updateArr(arr);
    }
    render(){
        return (
            <div title="Do">
                <input type="text" value={this.state.ipt1} onChange={this.nameChange}/><br/>
                <input type="text" value={this.state.ipt2} onChange={this.contentChange}/>
                <To send={this.send}></To>
            </div>
        )
    }
}

class To extends Component{
    render(){
        return (
            <input type="button" value="提交" onClick={this.props.send}/>
        )
    }
}

class List extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.arr.map((item,index)=>{
                        return (
                            <li key={index}>{item.content}------{item.name}</li>
                        )
                    })
                }
            </ul>
        )
    }
}



ReactDom.render(
    <ToDoList></ToDoList>,
    document.querySelector('#app')
);
