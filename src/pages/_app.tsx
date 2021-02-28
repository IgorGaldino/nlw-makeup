import { ChallengesProvider } from "../contexts/CallengesContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
