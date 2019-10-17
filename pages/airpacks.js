import Head from 'next/head';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPacks } from '../redux/actions/airpackActions';
import { Container, Section, FlexRow } from '../styles/landing';

import AirpackCard from '../components/airpackCard/AirpackCard';
import nextCookie from 'next-cookies';
import cookies from 'js-cookie';

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
            {packs &&
              packs.map(pack => <AirpackCard key={pack._id} pack={pack} />)}
          </FlexRow>
        </Container>
      </Section>
    </div>
  );
};

Airpacks.getInitialProps = async ({ reduxStore, ...ctx }) => {
  let token;

  if (ctx) {
    const { token } = nextCookie(ctx);

    await reduxStore.dispatch(getPacks());
  }

  return { token };
};

const mapStateToProps = state => ({
  packs: state.airpackReducer.packs,
  loading: state.airpackReducer.packs
});

export default connect(
  mapStateToProps,
  { getPacks }
)(Airpacks);
