import Card from "./Card";

let Token = ({ data }) => {

  let baseToken = {
    name: data?.baseToken?.name,
    symbol: data?.baseToken?.symbol,
    address: data?.baseToken?.address,
  }
  let basicInfo  = {
    "Pair created at":data?.pairCreatedAt,
    symbol:data?.baseToken?.symbol,
    "Dex Id":data?.dexId,
    "Pair Address":data?.pairAddress
    
  }
  let quoteToken = {
    name: data?.quoteToken?.name,
    symbol: data?.quoteToken?.symbol,
    address: data?.quoteToken?.address,
  }
  let price = {
    "Price Native":data?.priceNative,
    "Price USD": data?.priceUsd
  }
  return (
    <>
      <Card header="Basic info" obj={basicInfo} />
      <Card header="Base Token" obj={baseToken} />
      <Card header="Quote Token" obj={quoteToken} />
      <Card header="price" obj={price} />
    </>
  );
};

export default Token;
