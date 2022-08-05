import styled from 'styled-components';

export const menuOn = {
    width: '250px',
    opacity: '1'  
}
export const menuOff = {
    off:true,
    width: '90px',

}

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: ${props=>props.menu.width};
    height: ${props=>props.height}px;
    box-sizing: border-box;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: ${props=>props.menu.off ? '20px':'15px'};
    padding-left:  ${props=>props.menu.off ? '20px':'15px'};
    align-items: right;
    transition: 0.1s ease;
    background-color: ${props=>props.theme.backgroundColor};
    overflow: hidden;

`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;   
    height: 100%;
    background-color: inherit;
    border-radius: 15px;
    margin: 10px 0px 0px 0px;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar { 
        width: 0; 
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;   
    height: 100px;
    background-color: inherit;
    border-radius: 15px;
    margin: 10px 0px 0px 0px;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar { 
        width: 0; 
    }
`;





