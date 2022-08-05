import * as Styled from './Style';

const Button = (props) => {
    return (
        <Styled.Button menu={props.menu} onClick={() => { props.action() }}>
            <Styled.Icon menu={props.menu}>{props.component}</Styled.Icon>
            <Styled.Text menu={props.menu}>{props.text}</Styled.Text>
        </Styled.Button>
    );
}

export default Button; 