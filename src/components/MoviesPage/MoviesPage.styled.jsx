
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 24px; 
   color: #d84c7a; 
   margin-left: 40px;
`

export const Button = styled.button`
background-color: #b41a5a;
border: none;
color: white;
padding: 5px;
    :hover{
       cursor: pointer;
      background-color: #ffffff;
   color: #b41a5a; 
   border: solid 2px #b41a5a;
    }
`

export const Label = styled.label`
top: 13px;
left:7px;
position: absolute;
color: #706c6c;
`

export const Box = styled.div`
position: relative;
`

export const Search = styled.input`
background-color: #fffbfd;
border: solid 2px #b41a5a;
margin-top: 10px;
color: #111111;
padding: 5px;

:focus ~ label, :hover ~ label, :not(: placeholder-shown) ~ label  {
  transform: translateY(-23px);
  color: #b41a5a; 
}
`

