import { IRepository } from "../../interfaces/repository"

export function Repositorio(repository: IRepository) {
    return <div style={{
        flex: 1
    }}>
        <label>Linguagem: {repository.language}</label>
        <label>Criado em: {repository.created_at}</label>
        <label>Descrição: {repository.description}</label>
    </div>
}