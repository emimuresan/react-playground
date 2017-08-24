import React from 'react';
import {capitalize} from 'lodash';
import Avatar from './Avatar';

function TableBody(props) {
    if (!props.users) {
        return null;
    }
    
    if (props.users.length === 0) {
        return (
          <tbody>
            <tr>
              <td colSpan={props.tableHeaderLength} style={{textAlign: 'center', paddingTop: '30px'}}>
                <span>NO USERS</span>
              </td>
            </tr>
          </tbody>
        );
    }
      
    let items = props.users.map((user, index) => {
        return (
          <tr key={user.id.value}>
            <td>{index + 1}</td>
            <td><Avatar src={user.picture.thumbnail} alt={user.login.username}/></td>
            <td><span>{capitalize(user.name.first)}</span></td>
            <td><span>{capitalize(user.name.last)}</span></td>
            <td><span>{capitalize(user.location.city)}</span></td>
            <td><span>{user.location.state.toUpperCase()}</span></td>
          </tr>
        );
    });

    return <tbody>{items}</tbody>;
}

export default TableBody;