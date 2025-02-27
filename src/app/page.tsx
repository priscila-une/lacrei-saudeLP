'use client'

import { redirect } from "next/navigation";
import Card from "./components/Card";
import * as S from "./styles/home.style"

export default function Home() {

  const cardData = [
    {
      icon: "https://lacreisaude.com.br/_next/static/media/handshake-icon.422966a2.svg",
      title: "Inclusão",
      description: "Nossa plataforma digital é acessível e atendemos toda comunidade LGBTQIAPN+L G B T Q I A P N mais."
    },
    {
      icon: "https://lacreisaude.com.br/_next/static/media/heart-icon.081c2229.svg",
      title: "Acolhimento",
      description: "As pessoas profissionais da saúde entendem as necessidades da comunidade LGBTQIAPN+L G B T Q I A P N mais."
    },
    {
      icon: "https://lacreisaude.com.br/_next/static/media/shield-icon.54d509f2.svg",
      title: "Segurança",
      description: "Protegemos seus dados e validamos pacientes e profissionais da saúde."
    }
  ]


  return (
    <main>
      <S.SectionMain>
        <div>
        <h2>Bem vindo a Lacrei Saúde!</h2>
          <p>Conectamos pessoas LGBTQIAPN+L G B T Q I A P N mais
          com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.</p>  
        </div>
        
      </S.SectionMain>

    <S.Container>
      <S.SectionTitle>Conheça o jeito Lacrei Saúde de cuidar</S.SectionTitle>

      <S.SectionFlex>
        {cardData.map((card) => (
            <Card key={card.title} 
              description={card.description}
              icon={card.icon}
              title={card.title}
            />
        ))}
      </S.SectionFlex>
    </S.Container>

    <S.SectionFlex>
        <S.Button onClick={() => redirect("/para-pacientes")}>Para Pacientes</S.Button>
        <S.Button onClick={() => redirect("/para-profissionais")}>Para Profissionais</S.Button>

    </S.SectionFlex>
    </main>
  );
}
