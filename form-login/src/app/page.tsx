import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button";
import TextField from "@/components/TextField";

export default function Home() {
  return (
    <>
      <form className={styles.formLogin} action="">

          <TextField/>
          <input type="password" placeholder="Senha" />
          <Button />
      </form>
    </>

  );
}
