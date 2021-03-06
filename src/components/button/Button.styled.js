import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: inline-block;
  vertical-align: center;
  min-width: 100px;
  padding: 6px 0 4px 0;
  margin: 10px 5px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.buttonBackground};
  cursor: pointer;

  font-family: inherit;
  font-size: inherit;
  color: #ffff;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  transition: background-color 0.2s linear, color 0.2s linear, box-shadow 0.2s linear,
    border-color 0.2s linear;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #4e56ff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    color: #ffff;
    border-color: #ffff;
  }
`
