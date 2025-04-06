import { useEffect, useState } from "react";

const HomePage = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <div>
        <h1>If you see a message below, the API is working!</h1>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default HomePage;
