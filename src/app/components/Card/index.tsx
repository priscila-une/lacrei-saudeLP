import Image from "next/image";
import * as S from "./style"

interface CardPropsTypes {
    icon: string;
    title: string;
    description: string;
}

export default function Card({ icon, title, description} : CardPropsTypes){
    return(
        <S.CardDiv>
            <Image src={icon} alt={title}  width={100} height={100}/>
            <S.CardTtitle>{title}</S.CardTtitle>
            <p>{description}</p>
      </S.CardDiv>
    )
} 