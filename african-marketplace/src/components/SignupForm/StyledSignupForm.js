
import styled from 'styled-components';

const StyledSignupForm = styled.div`
  color: blue;
  display: flex;
  flex-direction: column;
  *{
    // border: 1px solid gold;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
      width: 15%;
      margin: 10px;
      padding: 5px;
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: tomato;
      border: 2px solid transparent; //keeps the box from resizing on hover.
    }
    button:hover{
      box-sizing: border-box;
      background-color: white;
      color: tomato;
      // font-weight: bold;
      border: 2px solid purple;
    }
    .textInputClass,
    .selectInputClass {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    label{
      display: flex;
      align-items: center;
      input{
        // height: 3px;
      }
      p{
        color: red;
      }
    }
  }
  
  select option, select {
    color: tomato;
  }
  input{
    color: purple;
  }
`

export default StyledSignupForm;