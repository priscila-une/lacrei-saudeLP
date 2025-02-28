import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
    background-color: ${props => props.theme.background.accent100} ;
`
export const Wrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    & a {
        text-decoration: none;
    }
`

export const StyledLink = styled.a`
    background: ${props => props.theme.text.invert400};
    color: #018762;
    padding: 8px;
    border-radius: 8px;
    font-weight: bold;
    font-size:${props => props.theme.size.textxl};
    width: max-content;

    &:hover{
        background-color:${props => props.theme.background.accent200};
    }

`