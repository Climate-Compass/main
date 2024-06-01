import { useReadContracts } from 'wagmi';
import { abiClimatCompass } from '../abi/abi';
import { contractAddress } from '@/config/contract';

export const useGetChallengeDetails = (challengeNames: string[]) => {

  const contracts = challengeNames.map((name) => {
    return {
      address: contractAddress,
      abi: abiClimatCompass,
      functionName: 'challenges',
      args: [name],
    }
  });

  const { data, isError, isLoading } = useReadContracts({
    contracts,
  });

  return [
    data,
  ];
};
