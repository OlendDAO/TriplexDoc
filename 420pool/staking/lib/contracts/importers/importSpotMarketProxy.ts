export async function importSpotMarketProxy(
  chainId?: number,
  preset?: string
): Promise<{ address: string; abi: string[] }> {
  if (!preset) {
    throw new Error(`Missing preset`);
  }
  const deployment = `${Number(chainId).toFixed(0)}-${preset}`;
  switch (deployment) {
    case '1-main': {
      const [{ default: meta }, { default: abi }] = await Promise.all([
        import('@synthetixio/v3-contracts/1-main/meta.json'),
        import('@synthetixio/v3-contracts/1-main/SpotMarketProxy.readable.json'),
      ]);
      return { address: meta.contracts.SpotMarketProxy, abi };
    }
    case '10-main': {
      const [{ default: meta }, { default: abi }] = await Promise.all([
        import('@synthetixio/v3-contracts/10-main/meta.json'),
        import('@synthetixio/v3-contracts/10-main/SpotMarketProxy.readable.json'),
      ]);
      return { address: meta.contracts.SpotMarketProxy, abi };
    }
    default: {
      throw new Error(`Unsupported deployment ${deployment} for SpotMarketProxy`);
    }
  }
}
