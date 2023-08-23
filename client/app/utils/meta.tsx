import Head from "next/head";
import { FC } from "react";
import { IMeta } from "./meta.interface";

const Meta: FC<IMeta> = ({ description, title }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="" />
        <link rel="icon" href="/favicon.ico?v=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=4"
        />
        <link rel="shortcut icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{title}</title>
        {description ? (
          <meta
            itemProp="description"
            name="description"
            content={description}
          />
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
    </>
  );
};

export { Meta };
