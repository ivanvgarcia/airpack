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
  padding: 0 100px;
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

const Section = styled.section`
  border-bottom: 5px dashed turquoise;
  min-height: 50vh;
`;

const Card = styled.div``;

const CardTitle = styled.h4``;

const CardImage = styled.img``;

const Home = () => (
  <>
    <Head>
      <title>Airpack</title>
      <description></description>
    </Head>

    <Nav />

    <Hero>
      <Title className="title">
        Get your travel essentials packed and delivered by locals
      </Title>
      <Button>See Packs</Button>
    </Hero>
    <Section>
      <Title>How does it work?</Title>
      <div>
        <Card>
          <CardTitle>1. Select the perfect Airpack</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>

        <Card>
          <CardTitle>2. Confirm address and payment</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>

        <Card>
          <CardTitle>3. Enjoy your trip with your AirPack</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>
      </div>
    </Section>
  </>
);

export default Home;
