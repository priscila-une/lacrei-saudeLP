import styled from "styled-components";

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    & p {
        font-size: ${props => props.theme.size.headlinesm};
        color:  ${props => props.theme.text.info500};
    }
`


