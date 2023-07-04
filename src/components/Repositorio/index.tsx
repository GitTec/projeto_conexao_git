import { IRepository } from "../../interfaces/repository"
import api from "../../services/backapi";
//@ts-ignore
import styles from "./index.module.css"
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

interface IRepositoriosProps {
    usr: string;
}

export function Repositorios(props: IRepositoriosProps) {
    let navigate = useNavigate();
    const [repos, setRepos] = useState<IRepository[]>([])

    useEffect(() => {
        api.get(`/users/${props.usr}/repos`).then((resp) => {
            setRepos(resp.data)
        })
    })

    return <div className={styles.Container}>
        <h1 className={styles.Title}>Repositórios de {props.usr}</h1>
        <button
            className={styles.ButtonBack}
            onClick={() => {
                navigate("/")
            }}>
            <FaArrowLeft />
        </button>
        {
            repos.map((repository) => {
                return <section
                    className={styles.ContainerListRepos}>
                    <h2>{repository.name}</h2>
                    <label>Linguagem: {repository.language}</label><br />
                    <label>Criado em: {repository.created_at}</label><br />
                    <label>Descrição: {repository.description}</label>
                </section>
            })
        }
    </div>
}

