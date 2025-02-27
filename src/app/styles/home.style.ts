import styled from "styled-components"

export const Container = styled.div`
    padding: 2.5rem;
`

export const SectionFlex = styled.section`
    display: flex;
    padding: 2rem;
    gap: 16px;
    justify-content: center;


    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const SectionMain = styled.section`
    background-image: url("https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png");
    height: 60vh;

    & div{
        width: 50%;
        padding: 5rem;
        gap: 8px;
        display: flex;
        flex-direction: column;

        @media(max-width: 768px){
            width: 100%
        }
    }

    & h2{
        color: ${props => props.theme.text.accent400};
        font-size: ${props => props.theme.size.headlinebase};
    }

    & p{
        font-size: ${props => props.theme.size.textxl };
        font-weight: 300;
    }
`;

export const SectionTitle = styled.h2`
    font-size: ${props => props.theme.size.headlinebase};
    text-decoration-line: underline;
    text-decoration-color: ${props => props.theme.text.accent400};
    text-align: center;
`

export const Button = styled.button`
    padding: 1.5rem;
    background-color: ${props => props.theme.background.accent400};
    border-radius: 8px; 
    border: none;
    cursor: pointer;
    font-size: ${props => props.theme.size.textxl};
    color: ${props => props.theme.text.invert400};


    &:hover{
        background-color: ${props => props.theme.background.accent500};
        transform: scale(1.2);
        transition: all 1s linear 1s;
    }
`