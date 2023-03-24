export default () => ({
  verseMasterNodeUrl:
    process.env.VERSE_MASTER_NODE_URL ?? 'http://localhost:8545',
  verseReadNodeUrl: process.env.VERSE_READ_NODE_URL,
  datastore: process.env.DATASTORE ?? '',
  allowedMethods: [
    /^net_version$/,
    /^web3_clientVersion$/,
    /^eth_get.*$/,
    /^eth_sendRawTransaction$/,
    /^eth_chainId$/,
    /^eth_blockNumber$/,
    /^eth_call$/,
    /^eth_estimateGas$/,
    /^eth_gasPrice$/,
    /^eth_maxPriorityFeePerGas$/,
    /^eth_feeHistory$/,
    /^eth_.*Filter$/,
  ],
  inheritHostHeader: true,
});
