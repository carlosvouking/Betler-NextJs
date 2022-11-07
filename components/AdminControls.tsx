//import toast from "react-hot-toast"
import React, { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import { useWeb3Contract } from "react-moralis"
import { contractAddresses, contractABI, networkExtraData } from "../constants/constant_files"
import { useNotification } from "web3uikit"

import {
    StarIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    ArrowUturnLeftIcon,
    ArrowDownOnSquareStackIcon,
    ArrowUturnDownIcon,
    ArrowUturnUpIcon,
    CurrencyEuroIcon,
} from "@heroicons/react/24/solid"

function AdminControls() {
    //const {deployedContract, isLoading} = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)

    // const {data: totalCommission} = useContractData(
    //     deployedContract, "raffleOperatorTotalCommission"
    // )

    // const {muteAsync: PickWinner} = useContractCall(deployedContract, "PickWinner")
    // const {muteAsync: WithDrawCommission} = useContractCall(deployedContract, "WithDrawCommission")
    // const {muteAsync: RestartPicking} = useContractCall(deployedContract, "RestartPicking")
    // const {muteAsync: RefundEveryone} = useContractCall(deployedContract, "RefundEveryone")

    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    const networkName = chainId in networkExtraData ? networkExtraData[chainId][0] : null

    const [participationFee, setParticipationfee] = useState("0")
    const [numberParticipants, setNumberParticipants] = useState("0")
    const [participants, setParticipants] = useState([])

    const pickWinner = async () => {
        try {
            const recentWinnerFromCall = await getRecentRandomWinner()
            setRecentWinner(recentWinnerFromCall)
        } catch (error) {}
    }

    const rewindLottery = async () => {
        try {
            await restartLottery()
            await updateContractDataOnUI()
        } catch (error) {}
    }

    async function updateContractDataOnUI() {
        const numberParticipantsFromCall = (await getNumberOfParticipants()).toString()
        const listParticipantsFromCall = (await getParticipants()).toString()

        setNumberParticipants(numberParticipantsFromCall)
        setParticipants(listParticipantsFromCall) // set the list of participants
    }

    const [recentWinner, setRecentWinner] = useState("0")

    const dispatch = useNotification()

    const { runContractFunction: getRecentRandomWinner } = useWeb3Contract({
        abi: contractABI, // does not really change per network or blockchain...can be hardcoded
        contractAddress: lotteryAddress, // address of the deployed contract which doesn't really change.
        functionName: "getRecentRandomWinner",
        params: {},
    })

    const { runContractFunction: restartLottery } = useWeb3Contract({
        abi: contractABI, // does not really change per network or blockchain...can be hardcoded
        contractAddress: lotteryAddress, // address of the deployed contract which doesn't really change.
        functionName: "restartLottery",
        params: {},
    })

    // make list of participants available to Frontend
    const { runContractFunction: getParticipants } = useWeb3Contract({
        abi: contractABI, // does not really change per network or blockchain...can be hardcoded
        contractAddress: lotteryAddress, // address of the deployed contract which doesn't really change.
        functionName: "getParticipants",
        params: {},
    })

    // make 'getNumberOfParticipants()'  available to Frontend
    const { runContractFunction: getNumberOfParticipants } = useWeb3Contract({
        abi: contractABI, // does not really change per network or blockchain...can be hardcoded
        contractAddress: lotteryAddress, // address of the deployed contract which doesn't really change.
        functionName: "getNumberOfParticipants",
        params: {},
    })

    const handleSuccess = async (transaction) => {
        await transaction.wait(1)
        handleNewNotification(transaction)
    }

    const handleNewNotification = () => {
        dispatch({
            type: "success",
            message: "Successfully entered the Lottery",
            title: "Winner picked",
            position: "bottomL",
            //icon: "bell",
        })
    }

    return (
        <div className="text-white text-center px-5 py-3 rounded-md border-stone-300/10 border flex-1">
            <h2 className="font-bold text-center">ADMIN</h2>
            <p className="text-white text-left text-sm mb-2">
                Current Network: <span className="text-amber-200 text-sm">{networkName}</span>
            </p>
            <p className="mb-4 text-left text-sm">
                Lottery Operator:{" "}
                <span className="text-stone-500">0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266</span>
            </p>

            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <button className="admin-button" onClick={pickWinner}>
                    <div>
                        <StarIcon className="h-6 mx-auto mb-2" /> Pick A Random Winner
                    </div>
                </button>

                {/* <button className="admin-button">
                    <CurrencyEuroIcon className="h-6 mx-auto mb-2" />
                    Withdraw Commission Fee
                </button> */}
                <button className="admin-button">
                    <ArrowPathIcon className="h-6 mx-auto mb-2" onClick={rewindLottery} />
                    Restart Lottery
                </button>
                <button className="admin-button">
                    <ArrowUturnUpIcon className="h-6 mx-auto mb-2" />
                    Refund All Participants
                </button>
            </div>

            <div className="flex justify-between p-2 space-x-2">
                <div className="">
                    <h2 className="text-sm">
                        Recent Winner ::
                        <span className="text-sm text-green-200"> {recentWinner}</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default AdminControls
