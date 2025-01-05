import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Hero = ({
  setBuyModel,
  account,
  CONNECT_WALLET,
  setAccount,
  setLoader,
  detail,
  addtokenToMetamask,  
}) => {
  const notifySuccess = (msg) =>
    toast.success(msg, { duration: 2000 });
  const notifyError = (msg) =>
    toast.error(msg, { duration: 2000 });

  const [percentage, setPercentage] = useState();

  const connectWallet = async () => {
    try {
      setLoader(true);
      const address = await CONNECT_WALLET();
      setAccount(address);
    } catch (error) {
      console.error("Connect Wallet Error:", error);
      notifyError("Failed to connect wallet");
    } finally {
      setLoader(false);
    }
  };

  const ADD_TOKEN_METAMASK = async () => {
    try {
      setLoader(true);
      const response = await addtokenToMetamask();
      notifySuccess(response);
    } catch (error) {
      console.error("Add MetaMask Error:", error);
      notifyError("Failed to add token to MetaMask");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const calculatePercentage = () => {
      const tokenSold = detail?.soldToken ?? 0;
      const tokenTotalSupply = tokenSold + Number(detail?.tokenBal ?? 1);

      if (tokenTotalSupply === 0) {
        console.warn("Token sale balance is zero, cannot calculate percentage");
        setPercentage(0);
        return;
      }

      const newPercentage = (tokenSold / tokenTotalSupply) * 100;
      setPercentage(newPercentage);
    };

    calculatePercentage();

    const timer = setInterval(calculatePercentage, 1000);
    return () => clearInterval(timer); // Clean up interval
  }, [detail]);

  return (
    <section className="hero hero__ico pos-rel">
      <div
        className="hero__bg"
        data-background="assets/img/bg/hero_bg.png"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero__content">
              <h1 className="title mb-45">
                Participate in the <span>Ongoing ICO Token</span> sale
              </h1>
              <div className="btns">
                {account ? (
                  <a
                    className="thm-btn"
                    onClick={() => setBuyModel(true)
                      
                    }
                  >
                    PURCHASE TOKEN
                  </a>
                ) : (
                  <a
                    className="thm-btn"
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </a>
                )}
                <a
                  className="thm-btn thm-btn--dark"
                  onClick={() => ADD_TOKEN_METAMASK()}
                >
                  Add MetaMask
                </a>
              </div>
              <div className="hero__progress mt-50">
                <div className="progress-title ul_li between ">
                  <span className="mr-120 lg:mr-190">
                    <span>Raised - </span>
                    {detail?.soldToken } Tokens
                  </span>  

                  <span className="">
                    <span className="">Total ICO - </span>
                    {detail?.soldToken + Number(detail?.tokenBal )}{" "}
                    {detail?.symbol}
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <ul className="ul_li_between">
                  <li>Pre Sell</li>
                  <li>Soft Cap</li>
                  <li>Bonus</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero__explore-wrap text-center">
              <div className="hero__explorer text-center">
                <div className="scroll-down" />
                <span>Explore Cause</span>
              </div>
              <div className="hero__countdown">
                <h6 className="text-center">
                  ICO Will start in...
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/h_shape.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/h_shape2.png" alt="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/h_shape3.png" alt="" />
        </div>
      </div>
      <div className="hero__coin">
        <div className="coin coin--1">
          <img src="assets/img/icon/coin1.png" alt="" />
        </div>
        <div className="coin coin--2">
          <img src="assets/img/icon/coin2.png" alt="" />
        </div>
        <div className="coin coin--3">
          <img src="assets/img/icon/coin3.png" alt="" />
        </div>
        <div className="coin coin--4">
          <img src="assets/img/icon/coin4.png" alt="" />
        </div>
        <div className="coin coin--5">
          <img src="assets/img/icon/coin5.png" alt="" />
        </div>
        <div className="coin coin--6">
          <img src="assets/img/icon/coin6.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
