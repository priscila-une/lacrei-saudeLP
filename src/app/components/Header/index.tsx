'use client'

import * as S from "./style";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
      <S.StyledHeader>
         <Link href="/">
          <Image
            src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg"
            width={200}
            height={50}
            alt="Lacrei Saude Logo"
          />
        </Link >
        <S.Wrapper>
          <S.StyledLink href="/quem-somos">Quem somos</S.StyledLink>
          <S.StyledLink href="/#">Ajuda</S.StyledLink>
        </S.Wrapper>
      </S.StyledHeader>
    );
  }
  