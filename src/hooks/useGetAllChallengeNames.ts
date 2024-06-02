import { useReadContract } from 'wagmi';
import { abiClimatCompass } from '../abi/abi';
import { contractAddress } from '@/config/contract';

export const useGetAllChallengeNames = () => {
  const information = useReadContract({
    address: contractAddress,
    abi: abiClimatCompass,
    functionName: 'getAllChallengeNames',
    query: {
        refetchInterval: 5000,
    }
    // watch: true,
  });


  const { data, isError, isLoading } = information

  console.log(data)


  return { data: data as string[], isError, isLoading };
};
