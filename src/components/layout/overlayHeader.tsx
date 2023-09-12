import { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';

const OverlayHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  let prevScroll = 0;
  let pos = -200;
  let init = true;

  const initPosition = () => {
    if (headerRef.current) {
      init = true;
      pos = -200;
      headerRef.current.style.marginTop = String(`-200px`);
      headerRef.current.style.opacity = String(0);
    }
  };
  const handleScroll = () => {
    if (!headerRef.current) {
      return;
    }
    let currrentScroll = window.scrollY;
    if (currrentScroll <= 0) {
      initPosition();
    } else {
      if (prevScroll > currrentScroll) {
        if (currrentScroll > 200) {
          init = false;
        }
        if (init === false) {
          if (currrentScroll <= 20) {
            initPosition();
          } else {
            pos = Math.min(Math.max(-200, pos) + Math.abs(currrentScroll - prevScroll), 0);
            headerRef.current.style.marginTop = String(`${pos}px`);
            headerRef.current.style.opacity = '';
          }
        }
      } else {
        if (init === false) {
          pos += -(currrentScroll - prevScroll);
          headerRef.current.style.marginTop = String(`${pos}px`);
          headerRef.current.style.opacity = '';
        }
      }
    }

    prevScroll = currrentScroll;
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box
      ref={headerRef}
      bg={'green'}
      w={'100%'}
      pos='fixed'
      zIndex={10}
      boxShadow='rgba(0, 0, 0, 0.08) 0px 0px 8px'
      h='200px'
      top='0'
      mt='-200px'
    >
      <Text>This is Overlay Header !! </Text>
    </Box>
  );
};

export default OverlayHeader;
