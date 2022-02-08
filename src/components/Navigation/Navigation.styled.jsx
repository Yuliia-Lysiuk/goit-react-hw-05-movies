import styled from "styled-components";
import {NavLink } from 'react-router-dom'


export const SuperLink = styled( NavLink)`
    display: inline-block;
  text-decoration: none;
  color: rgb(29, 28, 28);
  font-weight: 500;
  font-size: 20px;
  padding: 15px;
  &.active{
      color: #b41a5a;
  }

  :hover {
  color: rgb(220, 20, 143);
}
`

export const NavList = styled.ul`
    display: flex;
    border-bottom: solid 2px rgb(63, 60, 60);
    box-shadow: 0px 3px 2px rgb(105, 103, 103);
    
`

export const NavItem = styled.li`
    list-style: none;
`