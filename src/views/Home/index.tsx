import { IRepository } from '../../interfaces/repository';
import { IUsers } from '../../interfaces/user';
import { useState } from 'react';
//@ts-ignore
import styles from "./index.module.css";
import { Cabecalho } from '../../components/Cabecalho';

export default function Home() {
    const [usuario, setUsuario] = useState<IUsers>()
    const [repositorios, setRepositorios] = useState<IRepository[]>([])
    const [text, setText] = useState("");

    return (
        <div className='headerSection'>
            <Cabecalho />
            <h1>testando pagina home</h1>
            <title className='HeaderTitle'>Github Profile</title>
        </div>
    )
}