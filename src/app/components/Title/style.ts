import styled from 'styled-components'


export const TitleStyle = styled.h2`
    font-size: ${props => props.theme.size.headlinelg};
    line-height: 120%;
    font-weight: bold;

    & p {
        font-size: ${props => props.theme.size.textxl}
    }
`