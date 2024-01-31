import React, { useState } from 'react';

function Aabhushan() {
  const [count, setCount] = useState(0);

  const handleSubscribeClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleSubscribeClick}>
      Subscribe {count}
    </button>
  );
}

export default Aabhushan;
