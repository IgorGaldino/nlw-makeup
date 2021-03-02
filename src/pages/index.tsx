import Head from "next/head";

import { GetServerSideProps } from "next";

import { Profile } from "../components/Profile";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChanllenges } from "../components/CompletedChallenges";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/CallengesContext";
import { Login } from "../components/Login";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const isLogging = true;

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Head>
        <title>WakeUp</title>
      </Head>
      {isLogging ? (
        <div className={styles.containerLogin}>
          <Login />
        </div>
      ) : (
        <div className={styles.container}>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChanllenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      )}
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  console.log("iuuuu");
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
