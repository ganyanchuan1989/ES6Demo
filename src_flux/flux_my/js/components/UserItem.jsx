import {Component , PropTypes} from 'react';
class UserItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEdit: this.props.isEdit,
            name: ''
        };
    }
    render(){

        return(
            <div>
                {this.props.name}
                <button>删除</button>
            </div>
        )
    }
}

UserItem.propTypes ={
    name:PropTypes.string,
    isEdit:PropTypes.boolean
}

export default UserItem;