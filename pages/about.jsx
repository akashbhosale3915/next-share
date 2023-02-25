import Head from "next/head";
import React from "react";
import { FacebookIcon, FacebookShareButton } from "react-share";
import img from "../public/quotes-about-change-1580500675.jpg";

const About = ({ meta }) => {
  return (
    <>
      <Head>
        <title>ESSTE</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content="https://dev.estatier.com" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content="ESSTTE" />
        <meta name="description" content={meta.description} />
        <meta property="image" content={meta.imgLink.src} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imgLink.src} />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content="dev.estatier.com" />
        <meta property="og:site_name" content="ESSTE" />
        <meta property="og:description" content={meta.description} />
      </Head>
      <FacebookShareButton url="https://next-share-rouge.vercel.app/about">
        <FacebookIcon size={36} />
      </FacebookShareButton>
      <img src={meta.imgLink.src} alt="" height={300} width={300} />
    </>
  );
};

export function getServerSideProps() {
  const meta = {
    imgLink: img,
    title: "ABOUT NEXT SHARE",
    description:
      "This is a preview of the next ABOUT PAGE share on Facebook server side of the site you are viewing right now on the site you are viewing right now on the site you are viewing right now on the site you are viewing right now on the site you are  viewing right now on the site you are viewing right now on the site you are",
  };
  return {
    props: { meta },
  };
}

export default About;
