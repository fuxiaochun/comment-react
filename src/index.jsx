import React from 'react';
import ReactDom from 'react-dom';

import './comment.css';
import CommentForm from './comment-form.jsx';
import CommentList from './comment-list.jsx';

var Comment  = React.createClass({
	getInitialState() {
	    return {
	        list:[] 
	    };
	},
	childChanged(newList){
		this.setState({
			list: newList
		});
	},
	render(){
		return(
			<div>
				<CommentForm list={this.state.list} callbackParent={this.childChanged} />
				<CommentList list={this.state.list} callbackParent={this.childChanged}/>
			</div>
		);
	}
});
ReactDom.render(
	<Comment />,
	document.getElementById('app')
);

