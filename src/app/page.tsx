import Image from "next/image";

import logo from "../../public/logo.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      {/* Header Section */}
      <div className="lg:grid lg:grid-cols-2 xs:flex xs:flex-col items-center justify-center flex-1 text-center gap-4">
        <div className="flex flex-col w-full xs:text-center justify-start lg:text-left">
          <h1 className="text-6xl font-bold text-white">Climat Compass</h1>
          <p className="mt-3 text-gray-300">
            A gamified prediction market platform designed to empower
            individuals and communities to address climate change.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-lg">
          <Image src="/logo.png" width={250} height={250} alt="logo" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* Features Section */}
      <div className="w-full py-8  text-white text-center">
        <h2 className="text-4xl font-semibold">What can we do?</h2>
        <br />
        <div className="flex flex-col lg:flex-row justify-around mt-6 gap-6 lg:divide-x divide-slate-600">
          <div className="flex flex-col items-center p-4">
            <h3 className="text-2xl font-bold">Gather Data</h3>
            <p className="mt-2">
              We collect vast amounts of climate data from scientific sources
              and IoT sensors to feed our prediction models.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <h3 className="text-2xl font-bold">Incentivize Forecasts</h3>
            <p className="mt-2">
              Users can make predictions on future climate events and earn
              rewards for accurate forecasts, driving engagement and insight.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <h3 className="text-2xl font-bold">Drive Action</h3>
            <p className="mt-2">
              The prediction market provides real-time feedback on climate
              risks, empowering individuals and organizations to take informed
              action.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* How It Works Section */}
      {/* Example Section */}
      <div className="w-full py-8 text-center">
        <h2 className="text-4xl font-semibold">Example</h2>
        <div className="flex flex-col items-center justify-center mt-6 gap-4">
          <p className="text-lg">
            <strong>Prediction Category:</strong> Number of Heatwaves in Paris
            During Summer 2024 (compared to the previous 5 years)
          </p>
          <p className="text-lg">
            Users can buy CLIMATE tokens and choose from these Prediction
            Options:
          </p>
          <div className="flex flex-col lg:flex-row justify-around mt-6 gap-6">
            <div className="flex flex-row items-start justify-between p-10 gap-4 bg-gray-700 rounded-lg">
              <p className="italic">
                Increase: The number of heatwaves will go up
              </p>
              <span className="text-2xl">👍</span>
            </div>
            <div className="flex flex-row items-start justify-between p-10 gap-4 bg-gray-700 rounded-lg">
              <p className="italic">
                Decrease: The number of heatwaves will go down
              </p>
              <span className="text-2xl">👎</span>
            </div>
            <div className="flex flex-row items-start justify-between p-10 gap-4 bg-gray-700 rounded-lg">
              <p className="italic">
                Similar to Average: Paris 2024 summer heatwaves are at typical
                range.
              </p>
              <span className="text-2xl">🫤</span>
            </div>
          </div>

          <p className="mt-4 font-thin">
            *If correct, users can keep the token and win additional tokens. If
            wrong, the tokens return into the system.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="w-full py-8  text-white text-center">
        <h2 className="text-4xl font-semibold">Benefits</h2>
        <br />
        <div className="flex flex-col lg:flex-row justify-around mt-6 gap-6 lg:divide-x divide-slate-600">
          <div className="flex flex-col items-center p-4">
            <h3 className="text-2xl font-bold">Crowd-Sourced Insights</h3>
            <p className="mt-2">
              By leveraging the wisdom of the crowd, our prediction market taps
              into a diverse range of perspectives and expertise to generate
              accurate forecasts.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <h3 className="text-2xl font-bold">Decentralized Design</h3>
            <p className="mt-2">
              Our platform is built on Ethereum, ensuring transparency,
              security, and the equitable distribution of rewards.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <h3 className="text-2xl font-bold">Actionable Intelligence</h3>
            <p className="mt-2">
              The real-time data and insights from our prediction market empower
              individuals and organizations to make informed decisions and take
              meaningful climate action.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <section className="py-12 px-4 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Implementation of Token Engineering
          </h2>
          <p className="text-lg mb-8">
            Welcome to the forefront of token engineering where every
            transaction fuels the future. At the heart of our prediction market
            platform lies the CLIMATE token, the catalyst for transformative
            change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-20 rounded-xl px-6 py-8">
              <h3 className="text-xl font-bold mb-4">
                CLIMATE Token (Fungible)
              </h3>
              <p className="mb-4">
                Functions as the primary utility token. Holding CLIMATE grants
                various rights and allows specific actions. Predetermined supply
                & staking rewards (future) might aid stability.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-white text-blue-500 rounded-full font-bold transition duration-300 hover:bg-blue-200 hover:text-blue-600"
              >
                Learn More
              </a>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl px-6 py-8">
              <h3 className="text-xl font-bold mb-4">
                Data Tokens (Non-Fungible)
              </h3>
              <p className="mb-4">
                These represent ownership to specific datasets within the
                marketplace. Data providers create them when tokenizing their
                data for sharing.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-white text-blue-500 rounded-full font-bold transition duration-300 hover:bg-blue-200 hover:text-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Conclusion
          </h2>
          <span className="font-thin">Navigate with CLIMATE COMPASS</span>
          <p className="text-lg my-4">
            CLIMATE COMPASS is designed to be a versatile ecosystem where users
            can contribute climate data, engage in prediction markets,
            participate in governance, and earn rewards. By understanding the
            key aspects of tokenomics, users can fully harness the platform's
            capabilities and contribute to its ongoing success while driving
            positive environmental attention.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full font-bold transition duration-300 hover:bg-blue-600 hover:text-white"
          >
            Vote!
          </a>
        </div>
      </section>
    </div>
  );
}
