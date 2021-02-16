import styled from 'styled-components';
import Button from '../components/Button';

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
    return (
        <div>
            <Title>Dashboard</Title>
            <Button>Button</Button>
        </div>
    );
}
