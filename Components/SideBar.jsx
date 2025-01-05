import React from "react";

const SideBar = ({
  
  setOwnerModel,
  ownerModel, 
}) => {
  
  return (
    <aside className="slide-bar">
      <div className="close-mobile-menu">
        <a href="/" className="tx-close"></a>
      </div>

      <nav className="side-mobile-menu">
        <a href="/" className="header__logo mb-30">
        <img src="assets/img/logo/logo.svg" alt="" /></a>
        <div className="header-mobile-search">
          <form action="#" role="search">
            <input type="text" placeholder="search keyword"/>
            <button type="submit">
              <i className="ti-search"/>
            </button>
          </form>
        </div>
        <ul id="mobile-menu-active">
          <li><a href="home"></a></li>
          <li className="scrollspy-btn"><a href="#">Home</a></li>
          <li className="scrollspy-btn"><a href="#about">About</a></li>
          <li className="scrollspy-btn"><a href="#team">Team</a></li>
          <li className="scrollspy-btn"><a href="#contact">Get in touch</a></li>
          <li >
                    <a className="scrollspy-btn"
                    style={{
                      cursor:"pointer",
                    }}
                    onClick={() =>ownerModel ? 
                      setOwnerModel(false):
                      setOwnerModel(true)
                    }>
                      Tools 
                    </a>
                  </li>
        </ul>
      </nav>

    </aside>
  )
};

export default SideBar;
