import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./user_avatar.module.scss";

const UserAvatar: FC<{ avatarPath: string; link: string; title?: string }> = ({
  avatarPath,
  link,
  title,
}) => {
  return (
    <Link href={link} legacyBehavior>
      <a title={title}>
        <Image
          className={styles.avatar}
          src={avatarPath}
          width={50}
          height={50}
          alt=""
        />
      </a>
    </Link>
  );
};

export { UserAvatar };
