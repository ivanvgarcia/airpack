import Head from 'next/head';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPacks } from '../redux/actions/airpackActions';
import { Container, Section, FlexRow } from '../styles/landing';

import AirpackCard from '../components/airpackCard/AirpackCard';

const Airpacks = ({ packs, loading }) => {
  useEffect(() => {
    getPacks();
  }, []);

  if (loading) {
    <p>loading</p>;
  }
  return (
    <div>
      <Head>
        <title>Packs</title>
      </Head>
      <h1>Airpacks</h1>
      <Section>
        <Container>
          <FlexRow>
            {packs.map(pack => (
              <AirpackCard key={pack._id} pack={pack} />
            ))}
          </FlexRow>
        </Container>
      </Section>
    </div>
  );
};

Airpacks.getInitialProps = async ({ reduxStore, req }) => {
  const isServer = !!req;

  await reduxStore.dispatch(getPacks());

  return {};
};

const mapStateToProps = state => ({
  packs: state.airpackReducer.packs,
  loading: state.airpackReducer.packs
});

export default connect(
  mapStateToProps,
  { getPacks }
)(Airpacks);
