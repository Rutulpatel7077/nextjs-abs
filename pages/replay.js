import styled from "styled-components";
import dynamic from "next/dynamic";
import React from "react";

const Replay = dynamic(
  () => import("vimond-replay").then((mod) => mod.Replay),
  {
    ssr: false,
  }
);

const HlsjsVideoStreamer = dynamic(
  () => import("vimond-replay/video-streamer/hlsjs"),
  {
    ssr: false,
  }
);

const ShakaVideoStreamer = dynamic(
  () => import("vimond-replay/video-streamer/shaka-player"),
  {
    ssr: false,
  }
);

const PlayerContainer = styled("div")`
  background-color: #f8f8f8;
  margin: 10px;
  width: 500px;
`;

const ReplayPlayer = () => {
  return (
    <div style={{ display: "flex" }}>
      <PlayerContainer>
        <h2>Replay ( disabled SSR )</h2>
        <Replay source="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" initialPlaybackProps={{ isPaused: true }} />
      </PlayerContainer>
      <PlayerContainer>
        <h2>Replay HLS ( using Hlsjs )</h2>
        <Replay source="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" initialPlaybackProps={{ isPaused: true }}>
          <HlsjsVideoStreamer />
        </Replay>
      </PlayerContainer>
      <PlayerContainer>
        <h2>Replay MPEG-DASH with Shaka Player</h2>
        <Replay
          source="https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd"
          initialPlaybackProps={{ isPaused: true }}
        >
          <ShakaVideoStreamer />
        </Replay>
      </PlayerContainer>
    </div>
  );
};

export default ReplayPlayer;
