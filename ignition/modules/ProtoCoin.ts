import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ProtoCoinModule = buildModule("ProtoCoinModule", (m) => {
  const protocoin = m.contract("ProtoCoin");

  return { protocoin };
});

export default ProtoCoinModule;
