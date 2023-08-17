import { NextPage } from 'next';
import NextLink from 'next/link';
import ServiceLayout from '@/components/layout/service_layout';
import { Link } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
  return (
    <ServiceLayout>
      <Link as={NextLink} href='/tmp'>
        Temp 페이지 잠~~깐만 이동
      </Link>
    </ServiceLayout>
  );
};

export default IndexPage;
