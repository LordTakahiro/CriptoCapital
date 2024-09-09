import React from 'react';
import styled from 'styled-components';
import Links from './components/Links';
import Description from './components/Description';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import RecentTweets from './components/RecentTweets';
import RecentTikToks from './components/RecentTikToks';
import RecentInstagramPosts from './components/RecentInstagramPosts';
import Header from './components/Header';

const MainContainer = styled.div`
  background-color: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 75%;
  margin: 0 auto;
`;

const Box = styled.div`
  background: rgba(100, 100, 100, 0.5); /* Translucent purple */
  color: white;
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  flex: 1 1 calc(33% - 40px);
  box-sizing: border-box;
  min-width: 250px;
`;

const HeaderContainer = styled.div`
  color: white;
  border-radius: 15px;
  margin: 10px;
  padding: 20px;
  flex: 1 1 calc(33% - 40px);
  box-sizing: border-box;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Container>
        <Box>
          <Links />
        </Box>
        <Box>
          <Description />
        </Box>
        <Box>
          <Partners />
        </Box>
        <Box>
          <RecentTweets />
        </Box>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Box>
          <RecentInstagramPosts />
        </Box>
        <Box>
          <Testimonials />
        </Box>
      </Container>
    </MainContainer>
  );
}

export default App;
