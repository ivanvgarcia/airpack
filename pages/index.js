import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  border-bottom: 5px dashed turquoise;
`;

const Title = styled.h2`
  max-width: 450px;
  text-align: center;
  font-weight: 300;
  text-align: center;
`;

const Button = styled.button`
  background: turquoise;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
`;

const Border = styled.section`
  border-bottom: 5px dashed turquoise;
  min-height: 50vh;
`;

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <Hero>
      <Title className="title">
        Get your travel essentials packed and delivered by locals
      </Title>
      <Button>See Packs</Button>
    </Hero>
    <Border>
      <Title>How does it work?</Title>
    </Border>
  </>
);

export default Home;
