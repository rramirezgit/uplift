import {
  FutureEntretainment,
  Home,
  Ilustration,
  Parnerships,
  PastExperiences,
  TokenizenConquer,
  WhyUplify
} from "views";
import 'styles.css'
import { Footer } from "components";


const Landing = () => {
  return (
    <div className="landing">
      <Home />
      <FutureEntretainment />
      <TokenizenConquer />
      <WhyUplify />
      <PastExperiences />
      <Parnerships />
      <Ilustration />
      <Footer />
    </div>
  );
}

export default Landing;
