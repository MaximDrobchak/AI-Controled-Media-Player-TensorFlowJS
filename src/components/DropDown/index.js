import React from 'react';
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
} from 'mdbreact';
import { NavigationLink } from '../';

export default ({ title, list }) => {
  return (
    <MDBDropdown dropleft>
      <MDBDropdownToggle nav caret color='primary'>
        <span className='mr-2'> {title} </span>
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBListGroup className='list-group-flush'>
          {(list || [])
            .map(item => <NavigationLink {...item} key={item.lable} />)}
        </MDBListGroup>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};
