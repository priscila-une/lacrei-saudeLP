import styled from "styled-components"

export const WrapperFlex = styled.div`
    display: flex;
    padding: 2rem;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const WrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 8px;
`

export const Paragraph = styled.p`
    font-size: ${props => props.theme.size.headlinesm};
    line-height: 120%;
    font-weight: 300;

`

export const Img = styled.img`
    max-width: 600px;
    padding: 80px;
`