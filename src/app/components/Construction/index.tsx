'use client'

import * as S from "./style";

export default function UnderConstruction(){
    return (
        <S.FlexColumn>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-warning"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
            <p>A página está em construção em breve novidades!</p>
        </S.FlexColumn>
    )
}