import { IUsers } from '../../interfaces/user'
//@ts-ignore
import styles from "./index.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

interface ICabecalhoProps {
    onPesquisarClick: (username: string) => void;
}

export function Cabecalho(props: ICabecalhoProps) {
    const [username, setUsername] = useState("")

    return <div className={styles.HeaderContainer}>
        <label className={styles.HeaderTitle}>Github Profile</label><br />
        <section className={styles.HeaderInputSearch}>
            <input
                value={username}
                className={styles.HeaderSearch}
                type='text'
                placeholder='Informe um username'
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
                className={styles.HeaderButtonSearch}
                onClick={() => {
                    props.onPesquisarClick(username);
                }}>
                <BsSearch />
            </button>
        </section>
    </div>
}
