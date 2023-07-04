import { IUsers } from "../../interfaces/user"
//@ts-ignore
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom"

export function Usuario(user: IUsers) {
    let navigate = useNavigate();

    return <div className={styles.UserContainer}>
        <section className={styles.UserContainerProfile}>
            <img className={styles.UserProfile} src={user.avatar_url} alt="imagemPerfil" />
        </section>

        <section className={styles.UserDetails}>
            <h1 className={styles.name}>{user.name}</h1>
            <h2 className={styles.login}>{user.login}</h2>
            <p className={styles.description}>{user.bio}</p>
        </section>

        <div className={styles.UserContainerQtd}>
            <section
                className={styles.UserSectionQtd}
                onClick={() => {
                    navigate(`/repositories/${user.login}`)  //passo o nome do login(usuario) dentro da url
                }}>
                <h1 className={styles.h1}>{user.public_repos}</h1>
                <h2 className={styles.h2}>Repositórios</h2>
            </section>

            <section className={styles.UserSectionQtd}>
                <h1 className={styles.h1}>{user.followers}</h1>
                <h2 className={styles.h2}>Seguidores</h2>
            </section>

            <section className={styles.UserSectionQtd}>
                <h1 className={styles.h1}>{user.following}</h1>
                <h2 className={styles.h2}>Seguindo</h2>
            </section>
        </div>
    </div>
}

