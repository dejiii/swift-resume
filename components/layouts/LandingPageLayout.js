/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { navBarSection } from '../../lib/framerMotion';

export const LandingPageLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>SwiftResume.xyz | Create an amazing resume in few clicks!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="SwiftResume.xyz | Create an amazing resume in few clicks!"
        />
        <meta name="author" content="Abdul-Azeez Adeyiga" />
        <meta property="og:site_name" content="SwiftResume.xyz" />
        <meta property="og:site" content="https://www.swiftresume.xyz" />
        <meta property="og:title" content="SwiftResume.xyz" />
        <meta
          property="og:description"
          content="Create an amazing resume in few clicks!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dejithecoder/image/upload/v1661512717/test/social-image.png"
        />
        <meta property="og:url" content="https://www.swiftresume.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="SwiftResume.xyz" />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dejithecoder/image/upload/v1661512717/test/social-image.png"
        />
        <meta
          property="twitter:description"
          content="Create an amazing resume in few clicks!"
        />
        <meta property="twitter:creator" content="@1stdeji" />
      </Head>
      <div className="bg-[#100EB0">
        <header className="w-full z-40 bg-[#EDEEF1] relative top-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={navBarSection}
            className="container flex justify-between items-center px-4 py-4"
          >
            <img
              src="/logo3.svg"
              alt="SwiftResume"
              style={{ height: '40px', padding: 'p-4' }}
            />
            <span>MENUBAR</span>
          </motion.div>
        </header>
        <div>{children}</div>
      </div>
      <footer className="w-full bg-[#EDEEF1]">
        <div className="container px-4">
          <p className="py-4 text-[#3d3d3d] text-center">
            Designed and Developed by @1stdeji
          </p>
        </div>
      </footer>
    </div>
  );
};
