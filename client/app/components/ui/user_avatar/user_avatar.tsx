import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./user_avatar.module.scss";

const UserAvatar: FC<{ avatarPath: string }> = ({ avatarPath }) => {
  return (
    <Link href="/dashboard">
      <a>
        <Image
          className={styles.avatar}
          src={avatarPath}
          width={40}
          height={40}
          alt=""
        />
      </a>
    </Link>
  );
};

export { UserAvatar };