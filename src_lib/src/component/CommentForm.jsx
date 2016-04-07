import React from 'react';

var CommentForm = React.createClass({
    handleInput(e){
      console.log(e);
    },
    handleChange(e){
        console.log(e);
    },
    handleClick(e){
       this.refs.name.value = '1111';
       this.refs.name2.value = '2222';
    },
    render(){
        return (
            <form className="commentForm" >
                <input ref="name" type="text" placeholder="Your name" onChange={this.handleChange} />
                <input ref="name2" type="text" placeholder="Say something..."  onInput={this.handleInput}/>
                <input type="button" value="change" onClick={this.handleClick} />
                <input type="submit" value="Post"  />
            </form>
        )
    }
})

export default CommentForm;