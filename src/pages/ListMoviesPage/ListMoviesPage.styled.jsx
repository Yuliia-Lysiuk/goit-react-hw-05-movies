import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchItem = styled.li`
 border-bottom: solid 1px rgba(63, 60, 60, 0.479);

width: 300px;
:hover  {
   background-color: #a68bb3ae;
   color: rgb(220, 20, 143);
}
`

export const SuperLink = styled( Link)`
    display: inline-block;
  text-decoration: none;
  color: rgb(29, 28, 28);
  font-weight: 400;
  font-size: 16px;
  padding: 8px;
  :hover {
  color: rgb(220, 20, 143);
}
`