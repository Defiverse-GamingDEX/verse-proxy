export interface ComparisonOperation {
  eq?: string; // txValue == condition is allowed
  nq?: string; // txValue != condition is allowed
  gt?: string; // txValue > condition is allowed
  gte?: string; // txValue >= condition is allowed
  lt?: string; // txValue < condition is allowed
  lte?: string; // txValue <= condition is allowed
}

export interface RateLimit {
  name: string;
  perFrom?: boolean;
  perTo?: boolean;
  perMethod?: boolean;
  interval: number;
  limit: number;
}

export interface TransactionAllow {
  fromList: Array<string>;
  toList: Array<string>;
  value?: ComparisonOperation;
  rateLimit?: RateLimit;
}

export const getTxAllowList = (): Array<TransactionAllow> => {
  return [
    {
      fromList: ['*'],
      toList: ['*'],
    },
  ];
};

export const getDeployAllowList = (): Array<string> => {
  return [
    '0x68C297EDdd953961E81532202e48b048e459c7c3',
    '0xA9670dC72Edc9f4FB01f4DC0ba7F85CC62a152ff',
    '0xDd55AcB0f5305040F4242EA8DBa5417b5b76c20f',
    '0x5E07339ef374E362E597AED56786F9D3FfA44C99',
    '0x7fA458110953C5D41e2cb4B398A20c1A28247F47',
    '0xcAeCa39050EE6F1c45f4a320D218b00156a08e07',
    '0xC5D9DB4A42447c1B2856B41c433B01f1f8c353A0',
    '0xc5d9db4a42447c1b2856b41c433b01f1f8c353a0',
    '0xBb7788BF80955E7A5B809cfD3869170985410A70',
    '0xcB9CeF1D2E83e143eA9ce576A5F0C8710dA2F60b',
    '0x322a60D8c965479229b13881B3298aC20BBe8aF8',
    '0xefb98d7283252d4f6f913e153688C015C18Fa396',
    '0xEF8DB6F738C348B36ce8Ab00B041701450F8D2b0',
    '0xef8db6f738c348b36ce8ab00b041701450f8d2b0',
    '0x75c0c766c7a4d0744544b4f8d37c8362f64219ec',
    '0x75c0C766C7a4D0744544B4f8D37C8362f64219eC',
    '0xE940F61CAADcDC4F30359f6A736fa8C416296880',
    '0x868B7D7F338eC83B3c92471Aa632642609814F95',
    '0xe940f61caadcdc4f30359f6a736fa8c416296880',
    '0x868b7d7f338ec83b3c92471aa632642609814f95',
    //
    '0x3fb5DDa6aa59E0Cb467D4156387a2faf4E61dc2c',
    '0xC8BDd0BeF5eBAdfE2B22926c6DeF8c98773Bf8c9',
    '0xe6247ab848195b83FB50D19cbC2fa9d287bAb96e',
    '0x2e131a941b9d07200F8ce2646Da97Cf12b5a758D',
    '0x46e04743cF76382cF0E81275eD46Cc8eF35e921b',

    '0x3fb5dda6aa59e0cb467d4156387a2faf4e61dc2c',
    '0xc8bdd0bef5ebadfe2b22926c6def8c98773bf8c9',
    '0xe6247ab848195b83fb50d19cbc2fa9d287bab96e',
    '0x2e131a941b9d07200f8ce2646da97cf12b5a758d',
    '0x46e04743cf76382cf0e81275ed46cc8ef35e921b',

    '0x56E5962ff79092318156665c2a1C30A6d77A1cd0',
    '0x56e5962ff79092318156665c2a1c30a6d77a1cd0',

    '0x7a362d7cb7882d1d39c44569fA002d35ad497d7e',
    '0x7a362d7cb7882d1d39c44569fa002d35ad497d7e',

    '0x05f1121E58ef00eeFBc0C804AAF6cD58f7Ff0f26',
    '0x17F547ae02a94a0339c4CFE034102423907c4592',
    '0x05f1121e58ef00eefbc0c804aaf6cd58f7ff0f26',
    '0x17f547ae02a94a0339c4cfe034102423907c4592',

    '0x2fc1f4EC9d5B4756357e960e5BC9b2eef3395e57',
    '0x2fc1f4ec9d5b4756357e960e5bc9b2eef3395e57',

    '0x6543076E4315bd82129105890Bc49c18f496a528',
    '0x6543076e4315bd82129105890bc49c18f496a528',
  ];
};

export const getUnlimitedTxRateAddresses = (): Array<string> => {
  return [''];
};
