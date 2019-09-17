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
  padding: 0 40px;
  text-align: center;
  margin-bottom: 60px;
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
  padding: 20px 0 80px 0;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: center;
  align-items: center;
`;

const Card = styled.div``;

const CardContent = styled.div`
  padding: 15px 15px 50px;
`;

const CardTitle = styled.h4`
  text-align: center;
`;

const CardDescription = styled.p``;

const CardImage = styled.img`
  width: 100%;
`;

const AirPackCard = styled.div`
  background: #fff;
  box-shadow: 0 5px 10px #828282;
  width: 80%;
  position: relative;
  margin: 40px 0;
`;

const AirPackPrice = styled.p`
  position: absolute;
  right: 20px;
  bottom: 5px;
`;

const CTAParagraph = styled.p`
  font-size: 1.2rem;
  padding: 0 20px;
  margin-bottom: 70px;
`;

const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 1.2rem;
  margin-right: 15px;
`;

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
      <FlexRow>
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
      </FlexRow>
    </Section>

    <FlexRow>
      {[1, 2, 3, 4, 5, 6].map(num => (
        <AirPackCard key={num}>
          <CardImage src="https://via.placeholder.com/600" />{' '}
          <CardContent>
            <CardTitle>1 Week Adventurer Pack</CardTitle>
            <CardDescription>
              You know, it really doesn’t matter what you write as long as
              you’ve got a young, and beautiful, piece of text. I’m the best
              thing that ever happened to placeholder text.
            </CardDescription>
          </CardContent>
          <AirPackPrice>59.99</AirPackPrice>
        </AirPackCard>
      ))}
    </FlexRow>
    <Section>
      <Title>Why use AirPack?</Title>
      <FlexRow>
        <Card>
          <CardTitle>Support Local Vendors</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>

        <Card>
          <CardTitle>Give Back</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>

        <Card>
          <CardTitle>Travel Light</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>

        <Card>
          <CardTitle>Experience Culture</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>
      </FlexRow>
    </Section>
    <Section>
      <Title>Why use AirPack></Title>
      <FlexRow>
        <Card>
          <CardTitle>Support Local Vendors</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>

        <Card>
          <CardTitle>Give Back</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>

        <Card>
          <CardTitle>Travel Light</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>

        <Card>
          <CardTitle>Experience Culture</CardTitle>
          <CardImage src="https://via.placeholder.com/300" />
        </Card>
      </FlexRow>
    </Section>

    <Section>
      <Title>Join the AirPack Movement</Title>

      <CTAParagraph>
        I will write some great placeholder text – and nobody writes better
        placeholder text than me, believe me – and I’ll write it very
        inexpensively. I will write some great, great text on your website’s
        Southern border, and I will make Google pay for that text. Mark my
        words.
      </CTAParagraph>
      <FlexRow direction="row">
        <Input type="text" placeholder="mike@gmail.com" />
        <Button>Subscribe</Button>
      </FlexRow>
    </Section>
  </>
);

export default Home;
