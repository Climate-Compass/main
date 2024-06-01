import { useReadContract } from 'wagmi';
import { abiClimatCompass } from '../abi/abi';
import { contractAddress } from '@/config/contract';

export const useGetChallengeDetails = (challengeName: string) => {
  const { data, isError, isLoading } = useReadContract({
    address: contractAddress,
    abi: abiClimatCompass,
    functionName: 'challenges',
    args: [challengeName],
    // watch: true,
  });

  return { data, isError, isLoading };
};
