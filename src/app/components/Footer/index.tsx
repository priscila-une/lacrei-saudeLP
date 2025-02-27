'use client'

import * as S from './styles'

export default function Footer(){
    return (
      <S.Footer>
       <div>
        <S.Logo>Lacrei</S.Logo>
        <S.Logo>Saúde</S.Logo>
       
 
        <S.WrapperSocial>
          <ul>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
            <a href="">Facebook</a>
            </li>
            <li>
            <a href="">Linkedin</a>
            </li>
          </ul>
        </S.WrapperSocial>
        <S.CodedBy>Projeto de estudo feito por
          <a href='https://github.com/priscila-une'> Evelin Une</a>
        </S.CodedBy>
       </div>
        
        

        <S.Wrapper>
          <h3>Lacrei Saúde</h3>
          <ul>
            <li>Quem somos</li>
            <li>Nosso Propósito</li>
            <li>Missão, Visão e Valor</li>
          </ul>
        </S.Wrapper>

        <S.Wrapper>
          <h3>Saúde</h3>
          <ul>
            <li>Buscar atendimento</li>
            <li>Oferecer Atendimento</li>
          </ul>
        </S.Wrapper>
        
        <S.Wrapper>
          <h3>Segurança e Privacidade</h3>
          <ul>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
        </S.Wrapper>

      </S.Footer>
    )
}