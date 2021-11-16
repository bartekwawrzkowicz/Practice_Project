import styled from 'styled-components';
import './index.scss';

const colors = {
    colorDark: '#618685',
    colorMedium: '#80ced6',
    colorLight: '#d5f4e6',
    colorGray: '#deeaee',
    colorFont: '#3b3a30',
    colorBackground: '#9fa9a3',
}

export const Card = styled.div`
    background-color: ${colors.colorGray};
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    border: 2px solid ${colors.colorFont};
`

export const Button = styled.button`
    width: 100px;
    height: 40px;
    background-color: ${colors.colorDark};
    margin: 20px;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    color: #ffffff;
    transition: .4s;

    &:hover {
        background-color: ${colors.colorMedium};
        transition: .4s;
        transform: scale(1.05);
        color: ${colors.colorFont};
    }
`;

export const Input = styled.input`
    height: 30px;
    width: 240px;
    border-radius: 5px;
    font-size: 1.3rem;
    padding: 0 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
`;

export const Label = styled.label`
    font-size: 1.3rem;
    margin: 15px 0 5px 0;
`