import React, { Component ,Fragment} from 'react';
import logo from './logo.svg';
import Todoitem from "./Todoitem";
//import './App.css';

class Todolist extends Component {
  constructor(props){
      super(props);
      this.state={
        list:[],
        inputValue:""
      }
      this.hanleBtnClick =this.hanleBtnClick.bind(this)
      this.handleInputChange =this.handleInputChange.bind(this)
      this.handledel=this.handledel.bind(this)
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  hanleBtnClick(){
 // alert('click papapa')
  this.setState({
    list:[...this.state.list,this.state.inputValue]
  })
  this.state.inputValue=""
  //this.state.list.push('hello')
}
  handleremove(index){
    console.log(index)
    const list=[...this.state.list]
    list.splice(index,1)
    this.setState({list})
  }
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数
  handledel(index){
     const list=[...this.state.list]
    list.splice(index,1)
    this.setState({list})
  }

  todolistdiv(){
    return(
         this.state.list.map((item,index)=>{
           // return <li key={index} onClick={this.handleremove.bind(this,index)}>{item}</li>
           return <Todoitem delete={this.handledel} index={index} key={index} content={item}/>
           })
      )
  }
  //css 样式 属性className 
  render() {
    return (
      <Fragment>
        <div>
        <input className ="df" value ={this.state.inputValue} onChange ={this.handleInputChange}/>      
        <button style={{color:'red'}}onClick={this.hanleBtnClick}>add</button>
          </div>  
        <ul> {this.todolistdiv()}</ul>
      </Fragment>
    
    );
  }
}

export default Todolist;
