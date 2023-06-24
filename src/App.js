import React from 'react'
import Nav from './component/nav/Nav';
import Home from './component/home/Home';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Experience from './component/experience/Experience';
import Projects from './component/projects/Project';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';


function App() {
  return (
    <div className="App">
<Nav />
<Home />
<About />
<Experience />
<Skills />
<Projects />
<Contact />
<Footer />

    </div>
  );
}

export default App;
