'use client'

import * as S from './styles';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){
    return (
      <S.Footer>
       <div>
        <Link href="/">
          <Image
            src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg"
            width={200}
            height={50}
            alt="Lacrei Saude Logo 2"
          />
        </Link>
     
 
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
            <li>
              <Link href="/quem-somos" >
              Quem somos
              </Link>
            </li>
            <li>Nosso Propósito</li>
            <li>
              <Link href="/quem-somos/#Missao" >
              Missão, Visão e Valor
              </Link></li>
          </ul>
        </S.Wrapper>

        <S.Wrapper>
          <h3>Saúde</h3>
          <ul>
            <li>
              <Link href="/para-pacientes" >
                Buscar atendimento
              </Link>
            </li>
            <li>
            <Link href="/para-profissionais" >
              Oferecer Atendimento
            </Link>
           </li>
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