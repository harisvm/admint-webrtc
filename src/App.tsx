import { useState } from 'react'
import './App.css'
import AgoraUIKit from "agora-react-uikit";

function App() {
  const [videoCall, setVideoCall] = useState(true);

const rtcProps = {
    appId: "b7213686005b4882be7de581c0140281",
    channel: "test",
    token: "007eJxTYOhYc7RlmjR3U0Hi8Ts9jC/vC4VGLFp/+/rCW+sWbYg8OcNZgSHJ3MjQ2MzCzMDANMnEwsIoKdU8JdXUwjDZwNDEwMjCsNr1S1pDICNDfJ0NCyMDBIL4LAwlqcUlDAwAvN4gag==<Your channel token>",
};

const callbacks = {
  EndCall: () => setVideoCall(false),
};

return videoCall ? (
  <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  </div>
) : (
  <h3 onClick={() => setVideoCall(true)}>Join</h3>
);
}

export default App
