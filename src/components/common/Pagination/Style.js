import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 16px;
  color: inherit;
  font-family: 'Roboto';
  font-weight: 400;
  margin: 0px 3px;
  &:hover{
    transition: 0.1s;
    color: white;
    background-color: #695CFE;
    border-radius: 5px;
  }
`;

export const ActiveItem = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  font-family: 'Roboto';
  font-weight: 400;
  margin: 0px 3px;
  color: white;
  background-color: #695CFE;
`;