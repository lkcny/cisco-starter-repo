import { useEffect, useRef, useState } from 'react';

function WebSocketLatency() {
  const socketRef = useRef(null);
  const prevTimestampRef = useRef(null); 
  const [currentTimestamp, setCurrentTimestamp] = useState(null);
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:55455');
    socketRef.current = socket;

    socket.onmessage = (event) => {
        const data = event.data;
        const unixTime = parseInt(data);

        setCurrentTimestamp(unixTime);

        if (prevTimestampRef.current !== null) {
          const diff = unixTime - prevTimestampRef.current;
          setLatency(diff);
        }

        prevTimestampRef.current = unixTime;
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return (
    latency + ' ms'
  );
};

export default WebSocketLatency;


