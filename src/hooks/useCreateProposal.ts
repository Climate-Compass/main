import { useWriteContract } from 'wagmi';
import { abiClimatCompass } from '@/abi/abi';


// answers from solidity: JSON.stringify(answers)
    /*
        _name,
        string_apiUrl,
        uint256 _delay,
        uint256 _totalFunds,
        string[] memory _answers
    */

export const useCreateProposal = () => {

    const { writeContract } = useWriteContract();


    return (name: string, totalFunds: string) => {

        // return writeContract()
    }

} 

