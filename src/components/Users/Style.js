import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: ${props => props.height}px;
    flex-direction: column;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor}; 
    transition: 0.1s;
`;

export const Users = styled.div`    
`;

export const List = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: scroll; 
    &::-webkit-scrollbar { 
        width: 0;
        height :0 ;
    }
`;

export const Pagination = styled.div`  
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 50px;
`;