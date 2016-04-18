import {Component , PropTypes} from 'react';

class UserListApp extends Component{
    constructor(pros){
        super(props);
    }
    render(){
        var users = [];

        return(
            <div>
                <div>
                    <TextInput />
                    <button>Add</button>
                </div>
                <ul>
                    {users}
                </ul>
            </div>
        );
    }
}

export  default UserListApp;