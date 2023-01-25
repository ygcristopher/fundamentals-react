import { ThumbsUp } from 'phosphor-react'
import { Trash } from 'phosphor-react' 
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ygcristopher.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Juliana Silva</strong>
                            <time title="24 de Janeiro ás 00:12:23" dateTime="2023-01-24 00:12:23">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deleter comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom, parabéns !!! 😁😁</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}