import React from 'react';
import CommentFrom from './CommentForm.jsx'
import CommentList from './CommentList.jsx'
import $ from 'jquery';


var CommentBox = React.createClass({
    propTypes:{
        data:React.PropTypes.array
    },
    loaderData(){
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState(){
        return {data:[]};
    },
    componentDidMount: function() {
        this.loaderData();
        setInterval(this.loaderData, this.props.pollInterval);
    },
    render(){
        return (
            <div>
                <h1>Comment</h1>
                <CommentList data={this.state.data}/>
                <CommentFrom/>
            </div>
        )
    }
})


export  default CommentBox;