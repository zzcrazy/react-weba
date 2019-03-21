import React from 'react'
class Todoitem extends React.Component{
	handledel(){
		this.props.delete(this.props.index);
	}
	render(){
		return (

				<div onClick={this.handledel.bind(this)}>{this.props.content}</div>
			)
	}
}
export default Todoitem;