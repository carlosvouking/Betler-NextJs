import type { NextPage } from "next"
import Head from "next/head"
import { useMoralis } from "react-moralis"

import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners"
import { ethers } from "ethers"

import Header from "../components/Header"
import ylogo from "../images/Y_logo.png"
import Login from "../components/Login"
import CountdownTimer from "../components/CountdownTimer"
//import toast from "react-hot-toast"
import Marquee from "react-fast-marquee"
import AdminControls from "../components/AdminControls"
import NextPick from "../components/NextPick"
import RaffleEntrance from "../components/RaffleEntrance"

const Home: NextPage = () => {
    const { enableWeb3, account, isWeb3Enabled, isWeb3EnableLoading } = useMoralis()
    const [quantity, setQuantity] = useState<number>(1)

    //const {data: remainingEntries } = useContractData(deployedContract, "RemainingEntries")
    //const {data: currentWinnigReward} = useContractData(deployedContract, "CurrentWinningReward")
    //const {data: entryPrice} = useContractData(deployedContract, "entryPrice")
    //const {data: entryCommission} = useContract(deployedContract, "entryCommission")
    //const {data: expiration} = useContract(deployedContract, "expiration")
    //const { muteAsync: EnterLottery} useContractCall(deployedContract, "EnterLottery")
    //const {data: lastWinner} = useContractData(deployedContract, "lastWinner")
    //const {data: lastWinnerAmount } = useContractData(deployedContract, "lastWinnerAmount")
    //const {data, isRaffleOperator} = useContractData(deployedContract, "isRaffleOperator")

    const handleParticipation = async () => {
        const entryPrice = 0.01 // normally it should comme from the sol contract...
        if (!entryPrice) return

        //const entryNotification = toast.loading("Entering the lottery....")

        try {
            //const data = await EnterLottery([ {value: ethers.utils.parseEther(Number(ethers.utils.formatEther(entryPrice))*quantity).toString()),},])
            // toast.success("Successfully enterd the lottery !", {
            //     id: entryNotification,
            // })
            // console.info("contract called successfully", data)
        } catch (err) {
            // toast.error("A??yaya??ii, something went wrong !", {
            //     id: entryNotification,
            // })

            console.error("contract call failure !", err)
        }
    }

    const adminAccount = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

    return (
        <div className="bg-[#1a1a0c] min-h-screen flex flex-col">
            <Head>
                <title>Decentralized Raphl</title>
                {/* <link rel="icon" href="favicon" /> */}
            </Head>

            <div className="flex-1">
                {!account ? (
                    <Login />
                ) : (
                    <div>
                        <Header />
                        {account === adminAccount ? (
                            <div>
                                <h3 className="text-center text-red-200 text-2xl">
                                    Admin control deactivated
                                </h3>
                            </div>
                        ) : (
                            <div className="flex justify-center mt-5 mb-5 ml-20 mr-20">
                                <AdminControls />
                            </div>
                        )}

                        <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5 md:ml-20 md:mr-20">
                            <RaffleEntrance />
                            {/* <NextPick /> */}
                        </div>
                    </div>
                )}

                {/* <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5">
                    <button className="p-5 bg-gradient-to-tr from-orange-500 to-emerald-600 animate-pulse text-center rounded-xl w-full">
                        <p className="font-bold">Winner winner</p>
                        <p>Total earned: 0.0018 ETH</p>
                        <br />
                        <p className="font-semibold">Withdraw your earnings here</p>
                    </button>
                </div> */}
                {/* {!account ? null : (
                    <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5 md:ml-20 md:mr-20">
                        <RaffleEntrance />
                        <NextPick />
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default Home
