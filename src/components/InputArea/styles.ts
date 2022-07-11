import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    box-shadow: -5px 5px 0px blue , 5px -5px 0px red;
    transition: 500ms all ease-in-out;
    &:hover{
        box-shadow: 5px -5px 0px blue , -5px 5px 0px red;
    }
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid red;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid red;
    border-radius: 5px;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid grey;
    border-radius: 5px;
    background-color: grey;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: blue;
        color: white;
    }
`;