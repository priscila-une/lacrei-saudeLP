import * as S from './style'

interface TitlePropsType { 
    title: string;
}

export default function BrandTitle({ title }: TitlePropsType){
    return (
        <S.TitleStyle >
            {title}
        </S.TitleStyle>
    )
}