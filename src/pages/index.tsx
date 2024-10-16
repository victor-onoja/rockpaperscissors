import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import GameCreation from "../components/GameCreation";
import GamePlay from "../components/GamePlay";
import GameResult from "../components/GameResult";
import { useRockPaperScissors } from "../hooks/useRockPaperScissors";

const Home: NextPage = () => {
  const [gameState, setGameState] = useState("creation");
  const [gameData, setGameData] = useState(null);

  const handleGameCreated = useCallback((gameId, player1, stake, gameType) => {
    setGameData((prev) => ({ ...prev, gameId, player1, stake, gameType }));
    setGameState("play");
  }, []);

  const handleGameJoined = useCallback((gameId, player2) => {
    setGameData((prev) => ({ ...prev, player2 }));
  }, []);

  const handleRoundPlayed = useCallback(
    (gameId, roundNumber, player1Choice, player2Choice) => {
      setGameData((prev) => ({
        ...prev,
        roundNumber,
        player1Choice,
        player2Choice,
      }));
    },
    []
  );

  const handleGameEnded = useCallback((gameId, winner, payout) => {
    setGameData((prev) => ({ ...prev, winner, payout }));
    setGameState("result");
  }, []);

  useRockPaperScissors(
    handleGameCreated,
    handleGameJoined,
    handleRoundPlayed,
    handleGameEnded
  );
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-5 text-center">
            Rock Paper Scissors DApp
          </h1>
          <ConnectButton />

          {gameState === "creation" && (
            <GameCreation
              setGameState={setGameState}
              setGameData={setGameData}
            />
          )}
          {gameState === "play" && (
            <GamePlay
              gameData={gameData}
              setGameState={setGameState}
              setGameData={setGameData}
            />
          )}
          {gameState === "result" && (
            <GameResult gameData={gameData} setGameState={setGameState} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
