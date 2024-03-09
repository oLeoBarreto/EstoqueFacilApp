import styles from '@/app/login/styles.module.css'

export default function Login(){
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.title}>Entre na sua conta!</h1>
                <form className={styles.form}>
                        <span className={styles.titleforms}>Email:</span>
                        <input className={styles.inputs}
                        type='email'
                        name='email'
                        placeholder='Insira seu email!'
                    />

                        <span className={styles.titleforms}>Senha:</span>
                        <input className={styles.inputs}
                        type='password'
                        name='senha'
                        placeholder='Insira sua senha!'
                        />

                    <button className={styles.button} type="submit">Entrar!</button>
                </form>
            </div>
        </div>
    )
}