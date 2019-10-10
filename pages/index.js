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
import Mailchimp from '../components/mailchimp/Mailchimp';

const Home = ({ packs }) => {
  useEffect(() => {
    getPacks();
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Airpack</title>
      </Head>
      <Hero>
        <Title className="title">
          Get your travel essentials packed and delivered by locals
        </Title>
        <Link href="/airpacks" passHref>
          <StyledLink>See Packs</StyledLink>
        </Link>
      </Hero>
      <Section>
        <Container>
          <Title>How does it work?</Title>
          <FlexRow align="stretch">
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
          <FlexRow align="stretch">
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
            We’re a team of world-travelers and digital nomads just like you! We
            understand first-hand that packing and lugging around bags can suck,
            especially in a new environment. Subscribe to our newsletter to
            follow our journey. Together, we can remove the baggage out of
            travel!
          </CTAParagraph>
          <Mailchimp />
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>Frequently Asked Questions</Title>
          <Accordion
            title="What if my clothes don’t fit or I’m unhappy with the quality of my pack?"
            content="No worries! We have a dedicated support team that will personally work with you to quickly adjust your pack so you can relax and enjoy your trip!"
          />
          <Accordion
            title="Are these clothes new?"
            content="Yes. Our designers have carefully curated new clothes from high-quality local vendors to ensure you are always wearing awesome threads."
          />
          <Accordion
            title="How do I contact support?"
            content="When you purchase a pack, you will be emailed a special support code. With that, we can keep track of your pack and ensure that you receive any help you may need."
          />
          <Accordion
            title="How and when will I get my pack?"
            content="Once you provide the drop-off address, the Airpack delivery team will mail your pack by priority same-day mail. The cost is included when you book your pack."
          />
          <Accordion
            title="What do I do with my clothes when I’m done?"
            content="Two options: 1) Bring your clothes home with the nifty travel-bag we included 2) Donate your clothes and Airpack will pick-up and give them to local charities."
          />
          <Accordion
            title="How do I become a local partner vendor?"
            content="Contact hello@airpack.io with the subject line “Local Partner Vendor”"
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
