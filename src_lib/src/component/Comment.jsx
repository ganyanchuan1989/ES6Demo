import React from 'react';

var Comment = React.createClass({
    render(){
       return(
           <div>
               <h2>
                   {this.props.author}
               </h2>
               {this.props.children}
           </div>
       )
    }
})

export default Comment;