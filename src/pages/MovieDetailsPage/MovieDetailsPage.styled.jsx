import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
    margin: auto;
    padding:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    border-bottom: solid 2px rgba(63, 60, 60, 0.479);
    box-shadow: 5px 8px 5px rgb(105, 103, 103);
    background-color: #a68bb352;
`
export const CardInfo = styled.div`
    
    max-width: 600px;
`

export const Title = styled.h4`
  font-size: 18px; 
   color: #0e0d0d; 
   margin-left: 40px;
`
export const SuperLink = styled( NavLink)`
    display: inline-block;
  text-decoration: none;
  color: rgb(29, 28, 28);
  font-weight: 500;
  font-size: 18px;
  padding: 6px;
   &.active{
      color: #b41a5a;
  }
  :hover {
  color: #b41a5a;
  
}
`