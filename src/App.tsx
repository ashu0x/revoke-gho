import "./App.css";
import { WagmiConfig, createConfig, sepolia } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import { useState } from "react";
// require('dotenv').config()
// console.log(process.env)

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    // alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,
    chains: [sepolia],
    // Required
    appName: "Your App Name",
    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);
function App() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    amount: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
      <> <h1> Revoke GHO </h1> </>
        <ConnectKitButton />
        <form className="my-form" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="Send GHO to "
              value={formData.receiver}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
