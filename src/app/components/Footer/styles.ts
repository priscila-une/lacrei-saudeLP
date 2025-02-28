import styled from "styled-components";


export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background-color: ${props => props.theme.background.accent100};
    gap: 8px; 

    @media(max-width: 768px){
        flex-wrap: wrap;
    }
`

export const WrapperSocial = styled.div`
    display: flex;
    gap: 8px;

    ul {
        display: flex;
        gap: 8px;

    }

    li {
        list-style: none;
    }

    a{
        text-decoration: none;
        color: #018762;
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;


    li {
      font-size: 14px;
      gap: 4px;
      list-style: none;
    }

    a {
        text-decoration: none; 
    }
`

export const CodedBy = styled.p`
    font-size: ${props => props.theme.size.textbase};

    & a {
        color: ${props => props.theme.text.info400};
        text-decoration: none;

        &:hover{
            color: ${props => props.theme.text.info500}
        }
    }
`