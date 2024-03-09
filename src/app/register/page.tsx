
import styles from '@/app/register/styles.module.css'

export default function Register(){
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.title}>Crie uma conta!</h1>
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

                    <button className={styles.button} type="submit">Registrar-se!</button>
                </form>
            </div>
        </div>
    )
}