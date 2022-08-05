import styled from "styled-components";

export const User = styled.div`
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex: 0 0 auto;
    width: 220px;
    height: 340px;
    flex-direction: column;
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.iconColor};
    color: ${props => props.theme.textColor};

    &:hover{
        background:${props => props.theme.accentColor1};
        color: white;
        transition: 0.1s  ;
    }   
    transition: 0.1s ease;
`;

export const Img = styled.div`
    display: block;
    width: 200px;
    height: 200px;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    background-color: inherit;
    position: relative;
    overflow: hidden;

    & img{  
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;	
        box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    }
`;

export const Info = styled.div`
    margin: 10px 0px ;
    display: flex;
    box-sizing: border-box;
    padding: 0px 10px;
    width: 100%;
    height: 50px;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.div`
    display:flex;
    color:inherit;
    align-items: center;
    font-size: ${props => props.theme.textSizeM};
    margin-bottom: 5px;
`;

export const Status = styled.div`
    color:inherit;
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.textSizeS};
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.textSizeM};
    margin: 0px 10px 0px 0px;
    color: inherit;
`;

export const Text = styled.div`
    width: 100%;
    align-items: center;
    font-size: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;  
    color: inherit;
`;

export const FollowButton = styled.div`
    display: flex;
    justify-content: right;
    align-items: right;
    width: 100%;
    height: 50px;
    font-family: 'Roboto';
    font-weight: 600;
    
    & button{   
        cursor: pointer;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        color: ${props=>props.theme.textColor};
        background-color:inherit;
        border-radius:50px;
        border: 0px;
        background-color: ${props=>props.theme.backgroundColor};
        box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
        &:hover{         
            border: 5px solid lawngreen;
            transition: 0.1s ease; 
        }
        transition: 0.1s ease;
    }
`;

export const UnfollowButton = styled.div`
    display: flex;
    justify-content: right;
    align-items: right;
    width: 100%;
    height: 50px;
    font-family: 'Roboto';
    font-weight: 600;

    & button{   
        cursor: pointer;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        color: ${props=>props.theme.textColor};
        border-radius:50px;
        border: 0px;
        background-color: ${props=>props.theme.backgroundColor};
        box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};  
        &:hover{
            border: 5px solid red;
            transition: 0.1s ease;
        }
        transition: 0.1s ease;
    }
`;