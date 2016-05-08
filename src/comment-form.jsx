import React from 'react';

var CommentForm = React.createClass({
	getInitialState() {
	    return {
	    	author:'小椿',
	    	id: 0,
	        txts:'',
	        maxLength:140,
	        count:0,
	        list:this.props.list
	    };
	},
	getCharLength (str){
	    var len = 0,code = 0;
	    for (var i = 0; i < str.length; i++) {
	        code = str.charCodeAt(i);
	        if (code >= 0 && code < 128) {
	            len +=0.5;
	        }else{
	            len +=1;
	        }
	    }
	    return Math.ceil(len);
	},
	getCurrentDate(){
		var date = new Date();
		var Y = date.getFullYear();
		var m = date.getMonth()+1;
		var d = date.getDate();
		return `${Y}-${m}-${d}`;
	},
	formInput(e){
		var strLen = this.getCharLength(e.target.value);
		if (strLen > this.state.maxLength) {
			return false;
		}
		this.setState({
			count: strLen,
			txts: e.target.value
		});
	},
	formSubmit(){
		var txts = this.state.txts.trim();
		if (txts == '') {
			this.setState({txts:''});
			return false;
		}
		this.state.list.push({
			id: ++(this.state.id),
			user: this.state.author,
			ptime: this.getCurrentDate(),
			content: txts
		});
		this.setState({
			list: this.state.list,
			count: 0,
			txts: ''
		});
		this.props.callbackParent(this.state.list);
	},
	render(){
		return (
			<div className="comment-form">
			    <textarea onChange={this.formInput} className="comment-texts" value={this.state.txts} placeholder="说点什么吧？"></textarea>
			    <span>{this.state.count}/{this.state.maxLength}字</span>
			    <button onClick={this.formSubmit} className="btn-submit R">发布</button>
			</div>
		);
	}
});

module.exports = CommentForm;
