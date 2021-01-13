import styled from 'styled-components/macro'

export default styled.button`
  font-family: inherit;
  font-size: 1em;
  background: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  padding: 8px;

  &:disabled {
    color: gray;
    border-color: gray;
    cursor: default;
  }
`
