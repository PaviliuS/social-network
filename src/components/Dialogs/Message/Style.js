import styled from 'styled-components';

export const Message = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    min-width: 320px;

    color: ${props=>props.theme.textColor};
    box-sizing: border-box; 
    padding: 10px;
    margin-bottom: 5px;

    &:last-child{
        margin: 0px;
    } 
    &:hover{
        background-color: #695CFE;
        transition: 0.1s;
        color: white;
    }
    border-radius: 10px;
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
        position: absolute;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
`;
export const Data = styled.div`
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    width: 100%;
    height: 100%;
 

    
    flex-direction: column;
    
    margin: 0px 0px 0px 10px;
    /* background-color: aqua; */
`;
export const Meta = styled.div`
display: flex;
flex: 0 0 auto;
flex-direction: row;
align-items: flex-end;


/* background-color: red; */
margin: 0px 0px 5px 0px;
`;
export const Name = styled.div`
display: flex;
flex: 0 0 auto;
    font-size: 14px;
    margin-right: 10px;
    color: inherit;

`;
export const Text = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    /* word-wrap: break-word; */
    color: inherit;
`;
export const Time = styled.div`

    display: flex;
    flex: 0 0 auto;
    width: 50px;
    color: inherit;
    font-size: 12px;
    margin-right: 20px;
    

 
`;
