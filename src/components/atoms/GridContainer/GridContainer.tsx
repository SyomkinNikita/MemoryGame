import React, { FC } from "react"
import { Styled } from "./styled"

export const GridContainer: FC = ({children}) => {
    return (
        <Styled.GridContainer>{children}</Styled.GridContainer>
    )
}

