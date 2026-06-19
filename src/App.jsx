import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biens from './components/Biens';
import StatBreak from './components/StatBreak';
import Agence from './components/Agence';
import Quartiers from './components/Quartiers';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Biens />
        <StatBreak />
        <Agence />
        <Quartiers />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
