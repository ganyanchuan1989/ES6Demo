import {Component , PropTypes} from 'react';
import UserItem from './UserItem.jsx';

class UserList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        var itemsLi = this.props.items.map(function(name){
            return (
                <li>
                    <UserItem name={name} />
                </li>
            );
        });
        return (
          <div>
              <ul>
                  {itemsLi}
              </ul>
          </div>
        );
    }
}

UserList.propTypes = {
    items:PropTypes.Array
};
