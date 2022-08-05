import styled from 'styled-components';

export const ActiveContent = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    background-color: #695CFE;
    color: white;
    padding: 10px;
    box-sizing: border-box;
    margin: 0px 0px 5px 0px;
    border-radius: 10px;
`;
export const Content = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 70px;
    flex-direction: row;
    align-items: center;
    background-color: ${props=>props.theme.iconColor};
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    color: ${props=>props.theme.textColor};
    padding: 10px;
    box-sizing: border-box;
    margin: 0px 0px 5px 0px;
    border-radius: 10px;
    transition: 0.1s;
    &:hover{
        background-color: ${props=>props.theme.accentColor1};
        color: white;
    }
`;

export const Image = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
 
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    & img{       
        width: 50px;
        height: 50px;
        position: absolute;
        
    }
`;

export const Info = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    flex-direction: column;
    margin: 0px 0px 0px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Name = styled.div`
    font-family: 'Roboto';
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const Text = styled.div`
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;








