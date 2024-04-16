import { useEffect, useState } from "react";

function GetTime() {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  return (
    <div className="TmShow">
      This is the Cutternt Time:
      {time.toDateString()} {time.toLocaleTimeString()}
    </div>
  );
}

export default GetTime;
