import React from 'react';

var CommentList = React.createClass({
	getInitialState() {
	    return {
	        commentList: this.props.list
	    };
	},
	delComment(e){
		if (confirm('确定删除此条记录？')){
			var index = e.target.dataset.key;
			this.state.commentList.splice(index,1);
			this.props.callbackParent(this.state.commentList);
		}
	},
	render(){
		var listHTML = [];
		var _this = this;
		this.state.commentList.forEach(function(v, k){
			listHTML.push(
				<dl key={k}>
					<dt><strong>{v.user}</strong><span className="time">{v.ptime}</span></dt>
					<dd className="content">{v.content}</dd>
					<dd className="todo">
						<a href="javascript:;">回复</a>
						<a data-key={k} onClick={_this.delComment} href="javascript:;">删除</a>
					</dd>
				</dl>
			)
		});
		return (
			<div className="comment-list">
				{listHTML}
			</div>
		);
	}
});

module.exports = CommentList;