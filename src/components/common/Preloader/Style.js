import styled from 'styled-components';

export const Preloader = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: transparent;

    & img{
        background-color: transparent;
        display: block;
        width: 50px;
        height: 50px;
    }
`;

