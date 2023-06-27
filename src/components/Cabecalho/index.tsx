// import { IUsers } from '../../interfaces/user'
//@ts-ignore
import styles from "./index.module.css";

export function Cabecalho() {
    // return <div className='container'>
    //     <img src={props.avatar_url} alt={props.login} />
    //     <label>Github Search</label>
    // </div>

    return <>
        <label className='header-title'>Github Profile</label><br />
        <input className={styles.containerBusca} />
    </>
}
