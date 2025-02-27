'use client'

import * as S from "./style";

export default function Header() {
    return (
      <S.StyledHeader>
        <S.Wrapper>
          <S.LogoGradient>LS</S.LogoGradient>
          <S.Logo>Lacrei Saúde</S.Logo>
        </S.Wrapper>

        <S.Wrapper>
          <S.StyledLink href="/quem-somos">Quem somos</S.StyledLink>
          <S.StyledLink href="/#">Ajuda</S.StyledLink>
        </S.Wrapper>
      </S.StyledHeader>
    );
  }
  