import styled from "styled-components";

export const Profile = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: ${props => props.height}px;
    flex-direction: row;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color}; 
    transition: 0.1s;
`;

export const Content = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 320px;
    flex-direction: column;
    box-sizing: border-box;
    /* padding: 15px; */
`;

export const ProfileTitle = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 50px;
    align-items: center;
    font-size: 25px;
    
    color: ${props=>props.theme.textColor};
    padding: 15px 15px 0px 15px;
`;

export const ProfileList = styled.div`
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px 15px 15px 15px;
    overflow: scroll;
   
    &::-webkit-scrollbar { 
        width: 0;
        height :0 ;
    }
`;

export const Image = styled.div`
    & img{
        display: flex;
        width: 100%;
        border-radius: ${props=>props.theme.borderRadius};
    }
`;

export const SetPhoto = styled.div`
    display: flex;
    border-radius: 10px;
    width: 100%;
    /* height: 100%; */
    margin: 10px 0px 0px 0px;
    align-items: center;
    flex-direction: column;
    height: 50px;
    justify-items: center;
    background-color: ${props=>props.theme.accentColor1};
    color: white;
    transition: 0.1s ease;
    position: relative;
    &:hover{
        opacity: 0.91;
        background-color: #695CFE;
        color: white;
    }
    cursor: pointer;
`;

export const InputText = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
`;

export const InputFile = styled.input`
    opacity: 0;
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
`;

export const Data = styled.div`
    display: flex;
    border-radius: 10px;
    width: 100%;
    margin: 10px 0px 0px 0px;
    padding: 10px;
    box-sizing: border-box;
    justify-items: center;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    background-color: ${props=>props.theme.iconColor};
    flex-direction: column;
    transition: 0.1s ease;
`;

export const DataLabel = styled.div`
    display: flex;
    font-weight: 500;
    flex: 0 0;
    margin: 0px 0px 0px 0px;
    font-size: ${props=>props.theme.textSizeM};
    transition: 0.1s ease;
`;

export const DataName = styled.div`
    display: flex;
    flex: 0 0;
    margin: 0px 0px 10px 0px;
    font-size: ${props=>props.theme.textSizeM};
    transition: 0.1s ease;
    &:last-child{
        margin: 0px 0px 0px 0px;
    }
`;

export const Status = styled.div`
    display: flex;
    flex: 0 0;
    font-size: ${props=>props.theme.textSizeM};  
    transition: 0.1s ease;
`;

export const Contacts = styled.div`
    display: flex;
    border-radius: 10px;
    width: 100%;  
    margin: 10px 0px 0px 0px ;
    padding: 10px;
    box-sizing: border-box; 
    justify-items: center;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    background-color: ${props=>props.theme.iconColor};
    flex-direction: column;
    transition: 0.3s ease;
`;
export const ContactsTitle = styled.div`
    display: flex;
    width: 100%;
    font-weight: 500;
    font-size: ${props=>props.theme.textSizeM};  
`;

export const ContactsList= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    margin-top: 5px;
`;
