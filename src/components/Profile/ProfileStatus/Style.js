import styled from 'styled-components';

export const Status = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    bottom: 0px;
    box-sizing: border-box;
`;

export const Container = styled.div`
`;
export const Text = styled.div`
     font-size: 14px;
`;

export const Input = styled.div` 
    & input{
        display: flex;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        flex: 1 1 auto;
        // width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin: 0px 5px 0px 0px;
        font-size: 14px;
        font-family: 'Roboto';
        resize: none;
        padding: 13px;
        box-sizing: border-box;
    }

    & input:focus{
        outline: 0px;
    }
`;