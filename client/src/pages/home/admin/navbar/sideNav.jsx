import React from 'react';
import { NavLink } from 'react-router-dom';

import { SideNav } from './style';

const Navbar = () => (
  <SideNav>
    <ul>
      <li>
        <NavLink to='/admin/upload' activeClassName='current' exact>
          Upload Commodity
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/commodities' activeClassName='current' exact>
          All Commodities
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/users' activeClassName='current' exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to='/admin/investors' activeClassName='current' exact>
          All Investors
        </NavLink>
      </li>
    </ul>
  </SideNav>
);

export default Navbar;
