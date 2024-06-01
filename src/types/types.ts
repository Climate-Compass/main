// types.ts
export interface Challenge {
    name: string;
    apiUrl: string;
    lastExecutionTime: number;
    delay: number;
    totalFunds: number;
    executed: boolean;
    answers: string[];
  }
  