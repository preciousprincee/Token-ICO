import React, {useState, useEffect} from "react";

const Header = ({
  account,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  setOwnerModel,
  shortenAddress,
  detail,
  currency,
  ownerModel,
}) => {

  const [isMetaMaskInstalled,
  setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined"){
      setIsMetaMaskInstalled(true);

      window.ethereum.on("accountsChanged",
        handleAccountsChanged);
      
    }
    return() =>{
      if(typeof window.ethereum !== "undefined"){
        window.ethereum.removeListener(
          "accountsChanged", handleAccountsChanged
        );
      }
       
    };
  }, []);

  const handleAccountsChanged = (accounts) =>{
    setAccount(accounts[0]); 
  };
   const connectMetamask = async() => {
    if (typeof window.ethereum !== "undefined") {
      try{
        const accounts = await window.ethereum.request({
          method:"eth_requestAccounts",
        });
        setAccount(accounts)
      }catch (error) {
        console.log(error);
      }

    }else{
      console.log("Metamask isn't installed");
    }
   };

  return (<header className="site-header header--transparent ico-header">
       <div className="header__mail-wrap">
        <div className="container mxm_1640">
          <div className="header__main ul_li_between">
            <div className="header__left ul_li">
              <div className="header__logo">
                <a href="/">
                <img src="assets/img/logo/logo.svg" alt="" /></a>
              </div>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active has-mega-menu">
                    <a href="/">Home</a>
                  </li>
                  <li >
                    <a className="scrollspy-btn" href="#about">About</a>
                  </li>
                  {/* <li >
                    <a className="scrollspy-btn" href="#roadmap">Roadmap</a>
                  </li> */}
                  <li >
                    <a className="scrollspy-btn" href="#team">Team</a>
                  </li>
                  <li >
                    <a className="scrollspy-btn" href="#faq">Faq</a>
                  </li>
                  <li >
                    <a className="scrollspy-btn" href="#contact">contact</a>
                  </li>
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
            </div>
            <div className="header__action ul_li">
              <div className="d-xl-none">
                <a className="header__bar hamburger_menu" >
                <div className="header__bar-icon">
                  <span/>
                  <span/>
                  <span/>
                  <span/>
                </div>
                </a>
              </div>
              {
                account ? <div
                className="header__account">
                  <a href="#" onClick={() => 
                    navigator.clipboard.writeText
                    (detail?.address)}
                  >
                    {
                      shortenAddress( detail?.address )
                    } : {" "}
                    {
                      detail?.maticBal.slice(0, 6)
                    }
                    {
                      currency
                    }

                  </a>
                  </div>: (
                    <div className="header__account">
                      <a onClick={() => connectMetamask()}>
                        Connect wallet
                      </a>
                    </div>
                  )
              }
            </div>
          </div>
        </div>
       </div>
  </header>
  );
};

export default Header;

