import React from 'react';

import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from '@styled-icons/boxicons-regular/Bulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'

import * as S from './styled';

const MenuBar = () => (
    <S.MenubarWrapper>
        <S.MenubarGroup>
          <S.MenubarLink to="/" title="Voltar para a Home">
             <S.MenubarItem><Home /></S.MenubarItem>
          </S.MenubarLink>
          <S.MenubarLink to="/search" title="Pesquisar">
            <S.MenubarItem><Search /></S.MenubarItem>
          </S.MenubarLink>
        </S.MenubarGroup>
        <S.MenubarGroup>
         <S.MenubarItem title="Mudar o tema"><Light /></S.MenubarItem>
         <S.MenubarItem title="Mudar a visualização"><Grid /></S.MenubarItem>
         <S.MenubarItem title="Ir para o Topo"><Arrow /></S.MenubarItem>
        </S.MenubarGroup>
    </S.MenubarWrapper>
)

export default MenuBar