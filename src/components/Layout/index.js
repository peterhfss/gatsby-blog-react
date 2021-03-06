
import * as React from "react"
import PropTypes from "prop-types"
import Sidebar from "../Sidebar";
import Menubar from '../Menubar';

import * as S from './styled';
import GlobalStyles from "../../styles/global";

const Layout = ({ children }) => {
  
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
    <aside>
      <Sidebar />
    </aside>
   <S.LayoutMain>{children}</S.LayoutMain> 
   <Menubar />
   </S.LayoutWrapper>    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout