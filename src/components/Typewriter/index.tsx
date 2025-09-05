import { useEffect, useState } from 'react';

import { TextStyle } from './styles';

const Typewriter = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <TextStyle key={key}>
        <div>
          <p>
            Solving problems <span>since</span> <br />
          </p>
          <p>
            <span> my first</span> Hello World.
          </p>
        </div>
      </TextStyle>
    </>
  );
};

export default Typewriter;
