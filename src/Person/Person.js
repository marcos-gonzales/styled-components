import React from 'react'
import styled from 'styled-components'

// import './Person.css'

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  &:hover {
    backgroundcolor: blue;
  }

  @media (min-width: 500px) {
    width: 450px;
  }
`

const Person = ({ name, age, children, click, changed }) => {
  return (
    // <div className='Person' style={style}>
    <StyledDiv>
      <p onClick={click}>
        Hello i'm {name} and I am {age} years old
      </p>
      <p>{children}</p>
      <input type='text' onChange={changed} value={name} />
    </StyledDiv>
  )
}

export default Person
