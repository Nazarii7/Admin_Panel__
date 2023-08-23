import React, { FC } from "react";
import Logo from "@/ui/layout/header/logo";
import LoginForm from "@/ui/layout/login_form/login_form";

import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <LoginForm />
    </header>
  );
};

export default Header;
