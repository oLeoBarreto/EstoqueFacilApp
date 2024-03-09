//css
import styles from '@/components/Header/styles.module.css'

//imports
import Link from 'next/link' 

export default function  Header(){
    return(
        <header>
            <section className={styles.total}>
                <div className={styles.title}>
                <Link className={styles.logo} href="/">Estoque <span>facil</span></Link>
                </div>

                <nav className={styles.nav}>
                <div className={styles.register}>
                <Link href="/register">Registrar</Link>
                </div>
                <div className={styles.enter}>
                <Link href="/login">Entrar</Link>
                </div>
                </nav>
                
                
            </section>
        </header>
    )
}