"use client";

import { Button } from "../ui/button";

const ProviderSelfExclusion = () => {
  const handleHelloThere = () => console.log("hello there.- owk");
  return <Button onClick={handleHelloThere}>Hello there.- owk</Button>;
};

export default ProviderSelfExclusion;
