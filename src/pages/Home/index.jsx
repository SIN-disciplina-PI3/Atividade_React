import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>Atividade de React Route - Programação Frontend<br/>
            Objetivo da Atividade<br/>
            <span>Criar uma página principal, uma descrição da ODS escolhida 
                e uma página com informações sobre você, com algum link externo, 
                perfil do linkedin, por exemplo.</span>
            </p>
            <Link href='https://teams.microsoft.com/v2/' className={'${styles.btn} ${btn_blue}'}>
              Ver no Teams
            </Link>
            <figure>
              <img className={styles.img_home} src="\undraw_Programmer_re_owql.png" alt="Imagem de Home"/>
            </figure>
          </div>
        </section>
        </>
    )
}
export default Home