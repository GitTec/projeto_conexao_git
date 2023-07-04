import { useState } from 'react';
import { Cabecalho } from '../../components/Cabecalho';
import { Usuario } from '../../components/Usuario';
import { IUsers } from '../../interfaces/user';
import api from '../../services/backapi';

export default function Home() {
    const [user, setUser] = useState<IUsers>();

    return (
        <>
            <Cabecalho
                onPesquisarClick={(usuario: string) => {
                    api.get(`users/${usuario}`).then(res => {
                        setUser(res.data)
                    })
                }}
            />
            <Usuario
                avatar_url={user?.avatar_url || "https://cdn-icons-png.flaticon.com/512/1077/1077114.png?w=826&t=st=1688244095~exp=1688244695~hmac=4bca748e48ce361be82bbfbbb4b7b91709cd8d4f286be980c61e80eacc03097a"}   //se avatar for indefinido use a imagem
                name={user?.name || "nome"}
                login={user?.login || "login"}
                bio={user?.bio || "Um pouco de você . . ."}
                public_repos={user?.public_repos || 0}
                followers={user?.followers || 0}
                following={user?.following || 0}
            />
        </>
    )
}