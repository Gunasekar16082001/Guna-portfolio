import { useEffect } from 'react';
import './Nav.css';

function Nav() {
  useEffect(() => {
    const tabs = document.querySelectorAll('.header-nav-tab');
    const highlight = document.querySelector('.highlight');
    const mobileNavBarIcon = document.getElementById('mobile-nav-bar-icon');
    const headerNavList = document.getElementById('header-nav-list');
    const firstTab = tabs[0];


    // Calculate the position of the highlight element
    const left = firstTab.offsetLeft;
    const width = firstTab.offsetWidth;

    // Set the default position of the highlight element
    highlight.style.left = `${left}px`;
    highlight.style.width = `${width}px`;

    tabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        // Get the index of the selected tab
        // const index = this.dataset.index;

        // Calculate the position of the highlight element
        const left = this.offsetLeft;
        const width = this.offsetWidth;

        // Update the position of the highlight element
        highlight.style.left = `${left}px`;
        highlight.style.width = `${width}px`;

        // Add active class to the selected tab
        tabs.forEach((tab) => tab.classList.remove('active'));
        this.classList.add('active');
      });
    });

   

    mobileNavBarIcon.onclick = function () {
      if (mobileNavBarIcon.className === 'fa-solid fa-bars') {
        mobileNavBarIcon.className = 'fa-solid fa-close';
        headerNavList.style.display = 'flex';
        headerNavList.style.transform = 'translateX(0)';
      } else {
        headerNavList.style.display = 'none';
        mobileNavBarIcon.className = 'fa-solid fa-bars';
        headerNavList.style.transform = 'translateX(200%)';
      }
    };
  }, []);

  return (
    <div className="home-page" id="nav">
      {/* header section */}
      <div className="header-section">
        {/* header logo */}
        <div className="header-logo">
          <h1>Guna.</h1>
        </div>

        {/* header navigation */}
        <div className="header-nav">
          <div className="mobile-nav-bar">
            <i className="fa-solid fa-bars" id="mobile-nav-bar-icon"></i>
          </div>
          <ul className="header-nav-list" id="header-nav-list">
          
            <li className="header-nav-tab ">
              <a href="#about">About</a>
            </li>
            <li className="header-nav-tab">
              <a href="#experience">Experience</a>
            </li>
            <li className="header-nav-tab">
              <a href="#Skills">Skills</a>
            </li>
            <li className="header-nav-tab">
              <a href="#projects">Project</a>
            </li>
            <li className="header-nav-tab">
              <a href="#contact">Contact</a>
            </li>
            <span className="highlight"></span>
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Nav;
