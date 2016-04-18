import {Component , PropTypes} from 'react';
class UserItemInput extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <input value={this.props.name} />
        )
    }
}

UserItemInput.propTypes ={
    name:PropTypes.string
}

export default UserItemInput;