import React, { useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";


import {
    CHECK_WALLET_CONNECTED,
    CONNECT_WALLET,
    GET_BALANCE,
    CHECK_ACCOUNT_BALANCE,
    TOKEN_ICO_CONTRACT,
    ERC20,
    ERC20_CONTRACT,
    TOKEN_ADDRESS,
    addtokenToMetamask,

} from "./constants";
import { Contract } from "ethers";

export const TOKEN_ICO_Context = React.createContext();

export const TOKEN_ICO_Provider = ({ children }) =>{
    const DAPP_NAME = "TOKEN ICO DAPP";
    const currency = "ETH";
    const network = "Holesky";

    const [loader, setLoader] = useState(false);
    const [account, setAccount] = useState();
    const [count, setCount] = useState(0);

    const notifySuccess = (msg) => toast.success(msg, { duration: 2000});
    const notifyError = (msg) => toast.error(msg, { duration: 2000});


    const TOKEN_ICO = async () =>{
        try {
            const address = await CHECK_WALLET_CONNECTED();
            if (address){
                setLoader(true);
                setAccount(address);
                const contract = await TOKEN_ICO_CONTRACT();

                const tokenDetails = await contract.getTokenDetails();
                const contractOwner = await contract.owner();
                const soldToken = await contract.soldTokens();

                const ethBal = await GET_BALANCE();

                const token = {
                    tokenBal:ethers.utils.formatEther(tokenDetails.balance.toString()),
                    name: tokenDetails.name,
                    symbol:tokenDetails.symbol,
                    supply: ethers.utils.formatEther(tokenDetails.supply.toString()),
                    tokenPrice: ethers.utils.formatEther(
                        tokenDetails.tokenPrice.toString()
                    ),
                    tokenAddr: tokenDetails.tokenAddr,
                    maticBal: ethBal,
                    address: address.toLowerCase(),
                    owner: contractOwner.toLowerCase(),
                    soldToken: soldToken.toNumber(),
                };
                setLoader(false);
                return token;  
            }

    }catch (error){
        console.log(error);
        notifyError("error try Again later"); 
        setLoader(false); 
    }


    };

    const BUY_TOKEN = async (amount) => {
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();
            if (address) {
                const contract = await TOKEN_ICO_CONTRACT();
                const tokenDetails = await contract.getTokenDetails();
    
                // Get available tokens and price
                const availableToken = ethers.utils.formatEther(
                    tokenDetails.balance.toString()
                );
    
                if (parseFloat(availableToken) > 1) {
                    // Calculate the price
                    const tokenPrice = ethers.BigNumber.from(tokenDetails.tokenPrice); // Token price in Wei
                    const totalPrice = tokenPrice.mul(ethers.BigNumber.from(amount)); // Multiply by amount
    
                    // Convert price to string for parsing to Ether units
                    const payAmount = ethers.utils.parseEther(
                        ethers.utils.formatEther(totalPrice)
                    );
    
                    // Send transaction
                    const transaction = await contract.buyToken(amount, {
                        value: payAmount.toString(),
                        gasLimit: ethers.utils.hexlify(8000000),
                    });
    
                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("Transaction completed successfully");
                    window.location.reload();
                } else {
                    setLoader(false);
                    notifyError("Not enough tokens available for purchase.");
                }
            } else {
                setLoader(false);
                notifyError("Wallet not connected.");
            }
        } catch (error) {
            console.error("Error in BUY_TOKEN:", error.message || error);
            notifyError("An error occurred. Please try again later.");
            setLoader(false);
        }
    };
    

    // const BUY_TOKEN = async (amount ) =>{
    //     try{
    //         setLoader(true);
    //         const address = await CHECK_WALLET_CONNECTED();
    //         if (address){
    //            const contract = await TOKEN_ICO_CONTRACT();
    //            const tokenDetails = await contract.getTokenDetails();

    //            const avaliableToken = ethers.utils.formatEther(
    //             tokenDetails.balance.toString()
    //            );

    //            if (avaliableToken > 1){
    //             const price = ethers.utils.formatEther(
    //                 tokenDetails.tokenPrice.toString() * Number(amount)
    //             );

    //             const payAmount = ethers.utils.parseUnits(price.toString(),"ether" );
    //             const transaction = await contract.buyToken(Number(amount),{
    //                 value: payAmount. toString(),
    //                 gasLimit: ethers.utils.hexlify(8000000),
    //             });

    //             await transaction.wait();
    //             setLoader(false);
    //             notifySuccess("transaction completed successfully");
    //             window.location.reload();
    //            }

    //         }

    //     } catch (error){
    //       console.log(error);
    //       notifyError("error try Again later"); 
    //       setLoader(false);       
    //      }


    // };


    // const BUY_TOKEN = async (amount) => {
    //     try {
    //         setLoader(true);
    //         const address = await CHECK_WALLET_CONNECTED();
    //         if (address) {
    //             const contract = await TOKEN_ICO_CONTRACT();
    //             const tokenDetails = await contract.getTokenDetails();
    
    //             const availableToken = ethers.utils.formatEther(
    //                 tokenDetails.balance.toString()
    //             );
    
    //             if (parseFloat(availableToken) > 1) {
    //                 const price = ethers.utils.formatEther(
    //                     tokenDetails.tokenPrice.toString()
    //                 );
    
    //                 const payAmount = ethers.utils.parseUnits(price.toString(), "ether");
    //                 const transaction = await contract.buyToken(Number(amount), {
    //                     value: payAmount.toString(),
    //                 });
    
    //                 await transaction.wait();
    //                 setLoader(false);
    //                 notifySuccess("Transaction completed successfully");
    //                 window.location.reload();
    //             } else {
    //                 notifyError("Not enough tokens available");
    //                 setLoader(false);
    //             }
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         notifyError("Error: Try again later");
    //         setLoader(false);
    //     }
    // };
    
    const TOKEN_WITHDRAW = async () =>{
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();

            if (address){
               const contract = await TOKEN_ICO_CONTRACT();
               const tokenDetails = await contract.getTokenDetails();

               const avaliableToken = ethers.utils.formatEther(
                tokenDetails.balance.toString()
               );

               if (avaliableToken > 1){
                
               
                    const transaction = await contract.withdrawAllToken();

                    await transaction.wait();
                    setLoader(false);
                    notifySuccess("transaction completed successfully");
                    window.location.reload();
                }


              
            }

            
        }catch (error){
            console.log(error);
            notifyError("error try Again later"); 
            setLoader(false); 
        }
    };

    

    const UPDATE_TOKEN = async (_address) =>{
        try{
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();

            if (address){
                const contract = await TOKEN_ICO_CONTRACT();
                
                const transaction = await contract.updateToken(_address);

                await transaction.wait();
                setLoader(false);
                notifySuccess("transaction completed successfully");
                window.location.reload();
                }


              
            
        } catch (error){
            console.log(error);
            notifyError("error try Again later"); 
            setLoader(false); 
        }
        

    };

    const UPDATE_TOKEN_PRICE = async (price) =>{
        try{
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();

            if (address){
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount = ethers.utils.parseUnits(price.toString(), "ether");

                
                const transaction = await contract.updateTokenSalePrice(payAmount);

                await transaction.wait();
                setLoader(false);
                notifySuccess("transaction completed successfully");
                window.location.reload();
                }

        }catch (error){
            console.log(error);
            notifyError("error try Again later"); 
            setLoader(false); 
            }
        

    };

    const DONATE = async (AMOUNT) =>{
        try {
            setLoader(true);
            const address = await CHECK_WALLET_CONNECTED();

            if (address){
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount = ethers.utils.parseUnits(AMOUNT.toString(), "ether");


                
                const transaction = await contract.transferToOwner(payAmount,{
                    value: payAmount.toString(),
                    gasLimit:ethers.utils.hexlify(8000000),
                });
                   

                await transaction.wait();
                setLoader(false);
                notifySuccess("transaction completed successfully");
                window.location.reload();
                }
        } catch (error){
          console.log(error);
          notifyError("error try Again later"); 
          setLoader(false); 
        }

    };

    const TRANSFER_ETHER= async (transfer) =>{
        try {
            setLoader(true);

            const {_receiver, _amount } = transfer;
            const address = await CHECK_WALLET_CONNECTED();

            if (address){
                const contract = await TOKEN_ICO_CONTRACT();
                const payAmount = ethers.utils.parseUnits(_amount.toString(), "ether");


                
                const transaction = await contract.transferEther( _receiver, payAmount,{
                    value: payAmount.toString(),
                    gasLimit: ethers.utils.hexlify(8000000),
                });
                   

                await transaction.wait();
                setLoader(false);
                notifySuccess("transaction completed successfully");
                window.location.reload();
                }
            
        } catch (error){
            console.log(error);
            notifyError("error try Again later"); 
            setLoader(false); 
            
        }

    };

    const TRANSFER_TOKEN = async (transfer) =>{
        try {
            setLoader(true);

            const {_tokenAddress, _sendTo, _amount } = transfer;
            const address = await CHECK_WALLET_CONNECTED();

            if (address){
                const contract = await ERC20_CONTRACT(_tokenAddress);
                const payAmount = ethers.utils.parseUnits(_amount.toString(), "ether");


                
                const transaction = await contract.transfer( _sendTo, payAmount,{
                    
                    gasLimit: ethers.utils.hexlify(8000000),
                });
                   

                await transaction.wait();
                setLoader(false);
                notifySuccess("transaction completed successfully");
                window.location.reload();
                }
            
        } catch (error){
            console.log(error);
            notifyError("error try Again later"); 
            setLoader(false); 
            
        }

    };

    return(
        <TOKEN_ICO_Context.Provider 
          value={{
            TOKEN_ICO,
            BUY_TOKEN,
            DONATE,
            UPDATE_TOKEN,
            TRANSFER_ETHER,
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

          }}
        >
           
            {children}
        </TOKEN_ICO_Context.Provider>
        );



};