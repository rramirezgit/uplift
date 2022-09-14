import { Scrollbars } from 'react-custom-scrollbars';
import './styles.css';
import { useState } from 'react';

const ScrollUplift = ({
  children,
  vertical = false,
  horizontal = false,
  className,
}: any) => {

  return (

    <Scrollbars
      className={className}
      style={{
        width: '100%',
        position: 'relative',
        height: '100vh',
        display: vertical ? '-webkit-inline-box' : 'block',
      }}
      // onScrollFrame={(e) => {
      //   const div = document.querySelector('.monedaW') as HTMLElement
      //   if (e.scrollTop >= 1950 && !div.className.includes('-click')) div.click()
      //   else if (div.className.includes('-click') && e.scrollTop <= 1950) div.click()
      // }}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: 'rgb(141, 131, 97)',
            borderRadius: '10px',
            display: `${horizontal ? 'block' : 'none'}`,
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};
export default ScrollUplift
