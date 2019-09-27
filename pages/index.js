import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/layout/nav/nav';
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
  StyledLink,
  CTAParagraph,
  Input
} from '../styles/landing';
import { connect } from 'react-redux';
import Accordion from '../components/accordion/Accordion';
import AirpackCard from '../components/airpackCard/AirpackCard';
import Modal from '../components/modal/Modal';

import { getPacks } from '../redux/actions/airpackActions';

import SuitCases from '../static/svgs/suitcases.svg';
import Clipboard from '../static/svgs/clipboard.svg';
import WomanSuitcase from '../static/svgs/woman_suitcase.svg';
import Woman from '../static/svgs/woman.svg';
import Heart from '../static/svgs/heart.svg';
import Feather from '../static/svgs/feather.svg';
import WomanPosing from '../static/svgs/posingwoman.svg';

const Home = ({ packs }) => {
  useEffect(() => {
    getPacks();
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Airpack</title>
      </Head>
      <Nav />
      <Hero>
        <Title className='title'>
          Get your travel essentials packed and delivered by locals
        </Title>
        <Link href='/airpacks' passHref>
          <StyledLink>See Packs</StyledLink>
        </Link>
      </Hero>
      <Section>
        <Container>
          <Title>How does it work?</Title>
          <FlexRow align='stretch'>
            <Card>
              <CardTitle>1. Select the perfect Airpack</CardTitle>
              <SuitCases />
            </Card>

            <Card>
              <CardTitle>2. Confirm address and payment</CardTitle>
              <Clipboard />
            </Card>

            <Card>
              <CardTitle>3. Enjoy your trip with your AirPack</CardTitle>
              <WomanSuitcase />
            </Card>
          </FlexRow>
        </Container>
      </Section>
      <Section>
        <Title>Find an AirPack in Bangkok</Title>
        <Container>
          <FlexRow>
            {packs ? (
              packs.map((pack, idx) => (
                <AirpackCard key={pack._id} pack={pack} />
              ))
            ) : (
              <h4>Loading...</h4>
            )}
          </FlexRow>
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>Why use AirPack</Title>
          <FlexRow align='stretch'>
            <Card>
              <CardTitle>Support Local Vendors</CardTitle>
              <Woman />
            </Card>

            <Card>
              <CardTitle>Give Back</CardTitle>
              <Heart />
            </Card>

            <Card>
              <CardTitle>Travel Light</CardTitle>
              <Feather />
            </Card>

            <Card>
              <CardTitle>Experience Culture</CardTitle>
              <WomanPosing />
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
          <FlexRow direction='row'>
            <Input type='text' placeholder='mike@gmail.com' />
            <Button>Subscribe</Button>
          </FlexRow>
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>Frequently Asked Questions</Title>
          <Accordion
            title='Frequently Asked Question'
            content='I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively?'
          />{' '}
          <Accordion
            title='Frequently Asked Question'
            content='I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively?'
          />{' '}
          <Accordion
            title='Frequently Asked Question'
            content='I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively?'
          />{' '}
          <Accordion
            title='Frequently Asked Question'
            content='I will write some great placeholder text – and nobody writes better placeholder text than me, believe me – and I’ll write it very inexpensively?'
          />
        </Container>
      </Section>
    </Wrapper>
  );
};

Home.getInitialProps = async ({ reduxStore, req }) => {
  const isServer = !!req;

  await reduxStore.dispatch(getPacks());

  return {};
};

const mapStateToProps = state => ({
  packs: state.airpackReducer.packs
});

export default connect(
  mapStateToProps,
  { getPacks }
)(Home);
