/*
	使用解构赋值减少代码量
*/
import React, { Component }from 'react'
import KanbanBoard from './KanbanBoard'

let cardsList = [{
	id: 1,
	title: 'Read',
	description: 'aaa',
	status: 'in-progress',
	tasks: []
}, {
	id: 2,
	title: 'Write',
	description: 'bbb',
	status: 'todo',
	tasks: [
		{
			id: 1,
			name: '111',
			done: true
		},
		{
			id: 2,
			name: '222',
			done: false
		},
		{
			id: 3,
			name: '333',
			done: false
		}
	]
}]

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'))