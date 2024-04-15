import React from 'react';
import { AppBar , Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
    background : #060606;
    height : 9vh;
    ` 
const Header = () => {

    
    const logo = 'https://cpwebassets.codepen.io/assets/favicon/favicon-touch-de50acbf5d634ec6791894eba4ba9cf490f709b3d742597c6fc4b734e6492a5a.png'
  return (
    <Container position='static'>
        <Toolbar>
            <img src={logo} alt="logo" style={{width : 40}} />
        </Toolbar>
    </Container>
  )
}

export default Header