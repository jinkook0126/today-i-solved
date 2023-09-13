import { useEffect, useRef } from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import Logo from './logo';

const OverlayHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  let prevScroll = 0;
  let pos = -64;
  let init = true;

  const initPosition = () => {
    if (headerRef.current) {
      init = true;
      pos = -64;
      headerRef.current.style.marginTop = String(`${pos}px`);
      headerRef.current.style.opacity = String(0);
    }
  };
  const handleScroll = () => {
    if (!headerRef.current) {
      return;
    }
    let currrentScroll = window.scrollY;
    if (currrentScroll <= 0) {
      prevScroll = currrentScroll;
      initPosition();
      return;
    }
    if (prevScroll > currrentScroll) {
      if (currrentScroll > 64) {
        init = false;
      }
      if (init === false) {
        if (currrentScroll <= 64) {
          initPosition();
        } else {
          pos = Math.min(Math.max(-64, pos) + Math.abs(currrentScroll - prevScroll), 0);
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
      bg={'white'}
      w={'100%'}
      pos='fixed'
      zIndex={10}
      boxShadow='rgba(0, 0, 0, 0.08) 0px 0px 8px'
      h='4rem'
      top='0'
      mt='-64px'
    >
      <Flex
        bg={'white'}
        h={'100%'}
        w={{ base: 'calc(100% - 2rem)', '2xl': '1728px', xl: '1376px', lg: '1024px' }}
        marginX='auto'
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Logo width={220} />
        <Button colorScheme='teal' variant='ghost'>
          로그인
        </Button>
      </Flex>
    </Box>
  );
};

export default OverlayHeader;
