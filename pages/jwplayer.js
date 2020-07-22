import ReactJWPlayer from "react-jw-player";
import styled from "styled-components";

const playlist = [
  {
    file:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    image:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
  },
];

const PlayerContainer = styled("div")`
  background-color: #f8f8f8;
  margin: 10px;
`;

const Container = styled("div")`
  background-color: #f8f8f8;
  display: flex;
  flex-wrap: wrap;
`;

const JWPlayer = () => {
  return (
    <Container>
      <PlayerContainer>
          <h2>Simple React JWPlayer</h2>
          <ReactJWPlayer
            playerId="my-unique-id"
            playerScript="https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"
            playlist={playlist}
            customProps={{
              width: 400,
              height: 400,
            }}
          />
      </PlayerContainer>
      <PlayerContainer>
          <h2>HLS playlist with React JWPlayer</h2>
          <ReactJWPlayer
            playerId="my-unique-id-2"
            playerScript="https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"
            playlist="https://cdn.jwplayer.com/v2/playlists/ZTs6tMfb?sources=hls"
            customProps={{
              width: 400,
              height: 400,
            }}
          />
      </PlayerContainer>
      <br />
    </Container>
  );
};

export default JWPlayer;
