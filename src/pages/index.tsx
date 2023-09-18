import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";
import styles from "./index.module.css";
import Link from "next/link";

export default function Home() {
  const user = useUser();

  const {data} = api.posts.getAll.useQuery();
  return (
    <>
      <div className="font-inter antialiased bg-white text-slate-600">
        <div className={styles.welcome}>
          <div className={styles.logoblock}>
            <a href="https://demetra.ru" className={styles.logo}></a>
          </div>
          <div className={`${styles.blockwelcome}`}>
            {!user.isSignedIn && 
            <SignInButton>
              <button className="btn-primary px-4" >Войти в личный кабинет</button>
            </SignInButton>}
            {!!user.isSignedIn && <SignOutButton>
              <button className="btn-primary px-4" >Выйти из личного кабинета</button>
            </SignOutButton>}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-slate-800 font-bold leading-8 sm:leading-10 md:leading-[3.5rem] lg:leading-[3.5rem] mt-8">
              664040, Россия, Иркутская область
              <br />
              г.Иркутск, ул. Тухачевского, 2
              <br />
              <a className="hover:underline" href="email:office@demetra.ru">office@demetra.ru</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
