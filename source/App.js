/*
	使用解构赋值减少代码量
*/
import React, { Component }from 'react'

class Hello extends Component {
	render(){
		return (
			<h1>hello</h1>
		)
	}
}

React.render(<Hello />, document.getElementById('root'))