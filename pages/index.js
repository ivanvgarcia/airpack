import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import {
  Container,
  Wrapper,
  Hero,
  Title,
  Button,
  Section,
  FlexRow,
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardDescription,
  AirPackCard,
  AirPackPrice,
  CTAParagraph,
  Input
} from '../styles/landing';
import Accordion from '../components/accordion/Accordion';

const Home = () => (
  <Wrapper>
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
      <Container>
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
      </Container>
    </Section>
    <Section>
      <Title>Find an AirPack in Bangkok</Title>
      <Container>
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
      </Container>
    </Section>
    <Section>
      <Container>
        <Title>Why use AirPack</Title>
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
      </Container>
    </Section>
    <Section>
      <Container>
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
      </Container>
    </Section>
    <Section>
      <Container>
        <Title>Frequently Asked Questions</Title>
        <Accordion
          title="Frequently Asked Question"
          content="I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively?"
        />{' '}
        <Accordion
          title="Frequently Asked Question"
          content="I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively?"
        />{' '}
        <Accordion
          title="Frequently Asked Question"
          content="I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively?"
        />{' '}
        <Accordion
          title="Frequently Asked Question"
          content="I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively?"
        />
      </Container>
    </Section>
  </Wrapper>
);

export default Home;
