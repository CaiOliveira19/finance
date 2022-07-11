import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: -5px 5px 0px blue , 5px -5px 0px red;
    transition: 500ms all ease-in-out;
    &:hover{
        box-shadow: 5px -5px 0px blue , -5px 5px 0px red;
    }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align: left;
`;