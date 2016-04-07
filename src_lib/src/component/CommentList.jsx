import React from 'react';
import Comment from './Comment.jsx';

var CommentList = React.createClass({
    render(){
        var commentNodes = null;
        if(this.props.data)
        {
            commentNodes = this.props.data.map(function (comment) {
                return (
                    <Comment author={comment.author} key={comment.author}>
                        {comment.text}
                    </Comment>
                );
            });
        }
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
})

export default CommentList;