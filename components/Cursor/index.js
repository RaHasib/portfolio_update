import React, { useEffect, useState } from 'react';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { useTheme } from 'next-themes';

const Cursor = () => {
  const { theme } = useTheme();
  const [mount, setMount] = useState(false);

  const getCustomColor = () => {
    if (theme === 'dark') {
      return '#fff';
    } else if (theme === 'light') {
      return '#000';
    } else {
      // Handle other cases here
      return '#fff';  // for example, default to '#fff'
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);

  return (
      <>
        {mount && (
            <CustomCursor
                targets={['.link']}
                customClass='custom-cursor'
                dimensions={30}
                fill={getCustomColor()}
                smoothness={{
                  movement: 0.1,
                  scale: 0.05,
                  opacity: 0.1,
                }}
                targetOpacity={0.5}
                targetScale={2}
            />
        )}
      </>
  );
};

export default Cursor;