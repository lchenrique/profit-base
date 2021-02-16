import styled from 'styled-components';
import { Button as StrapBtn } from 'reactstrap';

interface IBtnProps {
    color?: 'primary' | 'secondary';
}

const BtnStyle = styled.div <IBtnProps>`

`;

export default function Button({ children }) {
    return (
        <BtnStyle>
        <StrapBtn color="default" type="button">
          Default
        </StrapBtn>
        <StrapBtn color="primary" type="button">
          Primary
        </StrapBtn>
        <StrapBtn color="secondary" type="button">
          Secondary
        </StrapBtn>
        <StrapBtn color="info" type="button">
          Info
        </StrapBtn>
        <StrapBtn color="success" type="button">
          Success
        </StrapBtn>
        <StrapBtn color="danger" type="button">
          Danger
        </StrapBtn>
        <StrapBtn color="warning" type="button">
          Warning
        </StrapBtn>
        </BtnStyle>
    );
}
