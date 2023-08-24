import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'NEXON-Gothic';
        font-style: normal;
        font-display: swap;
        font-weight: 300;
        src: url('/fonts/nexon/NEXON-Lv1-Gothic-OTF-Light.woff2') format('woff2'),
              url('/fonts/nexon/NEXON-Lv1-Gothic-OTF-Light.woff') format('woff'),
              url('/fonts/nexon/NEXON-Lv1-Gothic-OTF-Light.ttf') format('truetype');
      }
      @font-face {
        font-family: 'NEXON-Gothic';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: url('/fonts/nexon/NEXON-Lv1-Gothic-OTF.woff2') format('woff2'),
              url('/fonts/nexon/NEXON-Lv1-Gothic-OTF.woff') format('woff'),
              url('/fonts/nexon/NEXON-Lv1-Gothic-OTFt.ttf') format('truetype');
      }
      @font-face {
        font-family: 'NEXON-Gothic';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: url('/fonts/nexon/NEXON-Lv1-Gothic-OTF-Bold.woff2') format('woff2'),
              url('/fonts/nexon/NEXON-Lv1-Gothic-OTF-Bold.woff') format('woff'),
              url('/fonts/nexon/NEXON-Lv1-Gothic-OTF-Bold.ttf') format('truetype');
      }
      `}
  />
);

export default Fonts;
