import 'styles.css'
import { lazy, useEffect, useRef, Suspense } from 'react';
import { LazyLoad } from 'components/lazy';


const Home = lazy(() => import(/* webpackChunkName: "HomePage" */ './home'));
const FutureEntretainment = lazy(() => import(/* webpackChunkName: "FutureEntretainment" */ './futureEntretainment'));
const TokenizenConquer = lazy(() => import(/* webpackChunkName: "TokenizenConquer" */ './tokenizenConquer'));
const WhyUplify = lazy(() => import(/* webpackChunkName: "whyUplify" */ './whyUplify'));
const PastExperiences = lazy(() => import(/* webpackChunkName: "HomePage" */ './pastExperiences'));
const Parnerships = lazy(() => import(/* webpackChunkName: "HomePage" */ './parnerships'));
const Ilustration = lazy(() => import(/* webpackChunkName: "HomePage" */ './ilustration'));
const Footer = lazy(() => import(/* webpackChunkName: "Footer" */ '../../components/footer'));
const ScrollUplift = lazy(() => import(/* webpackChunkName: "Footer" */ '../../components/scroll'));

const Landing = () => {

  // const isFutureEntretainmentVisible = useIntersectionObserver(FutureEntretainment);
  return (
    <div className="landing">
      <ScrollUplift horizontal >
        <Home />
        <FutureEntretainment />
        <TokenizenConquer />
        <WhyUplify />
        <PastExperiences />
        <Parnerships />
        <Ilustration />
        <Footer />
      </ScrollUplift >
    </div >
  );
}

export default Landing


