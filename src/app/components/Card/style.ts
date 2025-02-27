import styled from "styled-components";

export const CardDiv = styled.div`
    background-color: ${props => props.theme.background.disabled400};
    padding: 24px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    max-width: 300px;
`

export const CardTtitle = styled.h3`
    font-size: ${props => props.theme.size.headlinesm};
`

export const Button = styled.button`
    color: ${props => props.theme.text.accent400};
    border: 1px solid ${props => props.theme.text.success400};
    border-radius: 8px;
    padding: 2rem;
    background-color: ${props => props.theme.background.default400};
`