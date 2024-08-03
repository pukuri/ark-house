import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Teams from './components/Teams/Teams';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Projects />
      <Teams />
    </>
  )
}