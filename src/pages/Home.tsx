import Header from '../components/common/Header';
import { formatNumber } from '../utils/format';

const COUNT = 10000;

function Home() {
  return (
    <>
      <Header />
      <div>Home Body</div>
      <div>Count: {formatNumber(COUNT)}</div>
    </>
  );
}

export default Home;
