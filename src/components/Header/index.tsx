//css
import styles from '@/components/Header/styles.module.css'

//imports
import Link from 'next/link' 

export default function  Header(){
    return(
        <header>
            <section className={styles.total}>
                <div className={styles.title}>
                    <h1>Estoque <span>Facil</span></h1>
                </div>

                <nav className={styles.nav}>
                <div className={styles.register}>
                <Link href="/register">Registrar</Link>
                </div>
                <div className={styles.enter}>
                <Link href="/enter">Entrar</Link>
                </div>
                </nav>
                
                
            </section>
        </header>
    )
}