import { useOutSide } from "@/hooks/useOutSide";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IAuthField } from "./login_form.interface";
import { useAuth } from "@/hooks/useAuth";

import styles from "./login_form.module.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { Field } from "../../field/field";
import { Button } from "../../button/button";
import { validEmail } from "./login_auth.constant";
import { UserAvatar } from "../../user_avatar/user_avatar";
import { MENU_ANIMATION } from "@/utils/animation/fade";
import { motion } from "framer-motion";

const LoginForm: FC = () => {
  const { ref, setIsShow, isShow } = useOutSide(false);

  const [type, setType] = useState<"login" | "registar">("login");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IAuthField>({
    mode: "onChange",
  });

  const { user, setUser } = useAuth();

  const onSubmit: SubmitHandler<IAuthField> = (data) => {
    if (type === "login")
      setUser({
        id: 1,
        email: "nazarii@gmail.com",
        avatarPath: "/avatar.avif",
        name: "VanNic",
      });
    reset();
    setIsShow(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      {user ? (
        <UserAvatar
          link="/dashboard"
          title="Go to dashboard"
          avatarPath={user.avatarPath || ""}
        />
      ) : (
        <button onClick={() => setIsShow(!isShow)} className={styles.button}>
          <FaRegUserCircle />
        </button>
      )}

      <motion.div
        animate={isShow ? "open" : "closed"}
        variants={MENU_ANIMATION}
      >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: validEmail,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Email"
            error={errors.email}
            autoComplete="username"
          />
          <Field
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Min length should more 6 symbols",
              },
            })}
            placeholder="Password"
            error={errors.password}
            type={"password"}
            autoComplete="current-password"
          />
          <div className={styles.loginButton}>
            <Button onClick={() => setType("login")}>Login</Button>
          </div>
          <button
            className={styles.register}
            onClick={() => setType("registar")}
          >
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginForm;
