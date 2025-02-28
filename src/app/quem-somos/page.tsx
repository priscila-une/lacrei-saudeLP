'use client'
import Title from "../components/Title";
import * as S from "./about-style"
import { SectionTitle } from "../styles/home.style";
import Card from "../components/Card";

export default function AboutPage() {
  return (
    <div>
      <S.WrapperFlex>

      <S.WrapperColumn>
        <Title title="Atendimento qualificado, seguro e inclusivo" />
          <S.Paragraph>
          Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.
        </S.Paragraph>
        <S.Paragraph>
          Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+L G B T Q I A P N mais.
        </S.Paragraph>
        <S.Paragraph>
          Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.
        </S.Paragraph>
      </S.WrapperColumn>

    
      <S.Img src="https://lacreisaude.com.br/_next/static/media/about-us-image.0c5e5cc6.png" alt="" />
    </S.WrapperFlex>

    <S.WrapperColumn>
       <SectionTitle id="Missao">Missão, Visão e Valor</SectionTitle>
      
       <S.WrapperFlex>
        <Card key="Missão" title="Missão" description="Proporcionar a inclusão da comunidade ao atendimento clínico." icon="https://lacreisaude.com.br/_next/static/media/mission-icon.9ebf0d57.svg"/>
        <Card key="Visão" title="Visão" description="Ser a plataforma de serviços de saúde da comunidade LGBTQIAPN+L G B T Q I A P N mais no Brasil." icon="https://lacreisaude.com.br/_next/static/media/vision-icon.0673d1e8.svg"/>
        <Card key="Valor" title="Valores" description="Representatividade, segurança e acessibilidade da comunidade LGBTQIAPN+L G B T Q I A P N mais." icon="https://lacreisaude.com.br/_next/static/media/values-icon.590c03fe.svg"/>
       </S.WrapperFlex>
    </S.WrapperColumn>
    </div>
  );
}
