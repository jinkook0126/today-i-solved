import NextLink from 'next/link';
import LogoSvg from '/public/assets/logo.svg';

type LogoProps = {
  width: number;
};

const Logo = ({ width }: LogoProps) => {
  return (
    <NextLink href='/'>
      <LogoSvg width={width} />
    </NextLink>
  );
};

export default Logo;
