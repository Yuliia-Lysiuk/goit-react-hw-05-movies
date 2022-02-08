import styled from "styled-components"

export const CastList = styled.ul`
    display: flex;
      flex-wrap: wrap;
  margin-top: -20px;
  margin-left: -20px;
    
`

export const CastItem = styled.li`
list-style: none;
margin-top: 20px;
  margin-left: 20px;
flex-basis: calc((100% - 200px) / 5);  
    border: solid 1px rgb(63, 60, 60);
    box-shadow: 5px 10px 8px rgb(105, 103, 103);
    padding:5px;
`