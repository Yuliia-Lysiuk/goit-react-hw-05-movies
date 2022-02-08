import {  Outlet } from "react-router-dom";
import { SuperLink, NavItem, NavList } from "./Navigation.styled";

export const Navigation = () => (<nav>
    <NavList>
        <NavItem>
            <SuperLink to='/'>Home</SuperLink>
        </NavItem>
        <NavItem>
            <SuperLink to='/movies' >Movies</SuperLink>
        </NavItem>
       
    </NavList>
     <Outlet/>
    
</nav>)