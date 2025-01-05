import React, {useState, useEffect, useContext} from "react";

import {
  Footer,
  Header,
  About,
  Brand,
  Contact,
  Faq,
  Features,
  Hero,
  Loader,
  Progress,
  SideBar, 
  Team, 
  Token, 
  TokenInfo,
  Roadmap, 
  Popup,
  TransferToken,
  Owner, 
  TransferCurrency,
  Donate,
  UpdateAddress,
  UpdatePrice,
} from "../Components/index";
import {TOKEN_ICO_Context} from "../context/index";
import {shortenAddress} from "../Utils/index";

const index = () => {

  const {
    TOKEN_ICO,
    BUY_TOKEN,
    TRANSFER_ETHER, 
    DONATE,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    TOKEN_WITHDRAW,
    TRANSFER_TOKEN,
    CONNECT_WALLET,
    ERC20,
    CHECK_ACCOUNT_BALANCE,
    setAccount,
    setLoader,
    addtokenToMetamask,
    TOKEN_ADDRESS,
    loader,
    account,
    currency,
  } = useContext(TOKEN_ICO_Context);

  const [ownerModel, setOwnerModel] = useState(false);
  const [buyModel, setBuyModel] = useState(false);
  const [transferModel, setTransferModel] = useState(false);
  const [transferCurrency, settransferCurrency] = useState(false);
  const [openDonate, setopenDonate] = useState(false)
  const [openUpdatePrice, setOpenUpdatePrice] = useState(false);
  const [openUpdateAddress, setOpenUpdateAddress] = useState(false);
  const [detail, setDetail] = useState();
  
  useEffect (()=>{
    const fetchData = async()=> {
      const items = await TOKEN_ICO();
      console.log(items)

      setDetail(items);
    };
    fetchData();
  }, [account]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const items = await TOKEN_ICO();
  //       console.log(items); // Debug response
  //       setDetail(items);
  //     } catch (error) {
  //       console.error("Failed to fetch token details:", error);
  //     }
  //   };
  //   fetchData();
  // }, [account]);
  
  return (
  <> 
    <div className="body_wrap">{ownerModel && (
      <Owner setOwnerModel={setOwnerModel}
      currency={currency} 
      detail={detail} 
      account={account}
      setTransferModel={setTransferModel}
      settransferCurrency={settransferCurrency}
      setopenDonate={setopenDonate}
      TOKEN_WITHDRAW={TOKEN_WITHDRAW}
      setOpenUpdatePrice={setOpenUpdatePrice}
      setOpenUpdateAddress={setOpenUpdateAddress}
      
      />
      )}

      
        {
        buyModel && (
          <Popup
            setBuyModel={setBuyModel}
            BUY_TOKEN={BUY_TOKEN}
            currency={currency}
            detail={detail}
            account={account}
            ERC20={ERC20}
            TOKEN_ADDRESS={TOKEN_ADDRESS}
            setLoader={setLoader}
            />
            

        )}
        {
          transferModel && (
            <TransferToken 
            setTransferModel={setTransferModel}
            TRANSFER_TOKEN={TRANSFER_TOKEN}
            ERC20={ERC20}
            setLoader={setLoader}
            
            />
          )
        }
        {
          transferCurrency && (
            <TransferCurrency
              settransferCurrency=
              {settransferCurrency}
              TRANSFER_ETHER={TRANSFER_ETHER}
              detail={detail}
              currency={currency}
              CHECK_ACCOUNT_BALANCE=
              {CHECK_ACCOUNT_BALANCE}
              setLoader={setLoader}
            />
          )
        }
        {
          openDonate && (
            <Donate 
            detail={detail}
            currency={currency}
            setopenDonate={setopenDonate}
            DONATE={DONATE}
            
            />
          )
        }
        {
          openUpdatePrice && (
            <UpdatePrice
             detail={detail}
             currency={currency}
             setOpenUpdatePrice={setOpenUpdatePrice}
             UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
             />
          )
        }
        {
          openUpdateAddress && (
            <UpdateAddress 
              detail={detail}
              currency={currency}
              setOpenUpdateAddress={setOpenUpdateAddress}
              UPDATE_TOKEN={UPDATE_TOKEN}
              ERC20={ERC20}
              setLoader={setLoader}
              />
              
          )
        }
        {loader && <Loader/>}

        <Header 
         account={account}
         CONNECT_WALLET={CONNECT_WALLET}
         setAccount={setAccount}
         setLoader={setLoader}
         setOwnerModel={setOwnerModel}
         shortenAddress={shortenAddress}
         detail={detail}
         currency={currency}
         ownerModel={ownerModel}
         />
         <SideBar 
         
         setOwnerModel={setOwnerModel}
         
         />
         
         <Hero setBuyModel={setBuyModel}
         account={account}
         CONNECT_WALLET={CONNECT_WALLET}
         setAcccount={setAccount}
         setLoader={setLoader}
         detail={detail}
         addtokenToMetamask={addtokenToMetamask}

         />
         <About/>
         <Features/>
         <Token/>
         <TokenInfo detail={detail} currency={currency}/>
         <Team/>
         <Faq/>
         <Contact/>
         <Footer/>

      
      </div>
  
  </>
  );
};


export default index;
