import React from 'react'

class Hello extends React.Component {
	render(){
		return (
			<h1>hello</h1>
		)
	}
}

React.render(<Hello />, document.getElementById('root'))