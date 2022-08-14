import {
  FutureEntretainment,
  Home,
  Ilustration,
  Parnerships,
  PastExperiences,
  TokenizenConquer,
  WhyUplify
} from "views";
import { Footer, ScrollUplift } from "components";
import 'styles.css'

const Landing = () => {
  return (
    <div className="landing">
      <ScrollUplift  horizontal
      >
        <Home />
        <FutureEntretainment />
        <TokenizenConquer />
        <WhyUplify />
        <PastExperiences />
        <Parnerships />
        <Ilustration />
        <Footer />
      </ScrollUplift>
    </div>
  );
}

export default Landing;
