import styled from "styled-components";

export const Logo = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    align-items: center;
    color: ${props=>props.theme.textColor};
    border-radius: ${props=>props.theme.borderRadius};
    width: 100%;
    height: 50px;
    overflow: hidden; 
`;

export const Image = styled.span`
  display: flex;
  flex: 0 0 auto;  
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: ${props=>props.theme.borderRadius};
  & img{
      width: 50px;
      object-fit: cover;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.div`
  padding: 0px 0px 0px 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

export const Name = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Roboto';
  font-size: ${props=>props.theme.textSizeM};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Status = styled.div`
  font-family: 'Roboto';
  font-size: ${props=>props.theme.textSizeM};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  
`;