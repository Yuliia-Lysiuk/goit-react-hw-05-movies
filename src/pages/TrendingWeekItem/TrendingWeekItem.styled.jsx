import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
margin-left: 20px;
    display: flex;
  text-decoration: none;
  color: rgb(29, 28, 28);
  font-weight: 400;
  font-size: 16px;
  padding: 8px;
  :hover {
  color: rgb(220, 20, 143);
}
`