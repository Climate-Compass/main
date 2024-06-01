import { useReadContract } from 'wagmi';
import { abiClimatCompass } from '../abi/abi';
import { contractAddress } from '@/config/contract';

export const useGetAllChallengeNames = () => {
  const { data, isError, isLoading } = useReadContract({
    address: contractAddress,
    abi: abiClimatCompass,
    functionName: 'getAllChallengeNames',
    query: {
        refetchInterval: 5000,
    }
    // watch: true,
  });

  return { data: data as string[], isError, isLoading };
};
