import styles from './Sobre.module.css'
import minhaFoto from '/image/minhaFoto.jpeg'
function Sobre(){
    return(
        <section className={styles.sobre}>
            <div className={styles.bio}>
        <img src={minhaFoto} alt="minhaFoto" className={styles.minhaFoto}/>
        <div className={styles.textos}>
        <h2>Sobre</h2>
        <p>Sou <span>Giovanna Oliveira</span> </p>
       <p> Participo do programa Embarque Digital, onde tenho <br/>
        a oportunidade de mergulhar ainda mais fundo no universo da tecnologia. <br/>
        Estou em busca constante de conhecimentos e experiências na área de Tecnologia,<br/>
        visando aprimorar minhas habilidades. Estou ansiosa para explorar novas<br/> 
        oportunidades e enfrentar desafios que me permitam crescer<br/>
        profissionalmente e academicamente.<br/>

        Fui integrante de uma das 12 equipes selecionadas para o DemoDay 
        do Kick Off 2023.1 na Residência OnBoard do Porto Digital. </p>

        </div>
        <div className={styles.techs}>
            <h3>Hablidades</h3>
            <p>HTML</p><br/>
            <p>CSS</p><br/>
            <p>SQL</p><br/>
            <p>JAVA</p><br/>
            <p>FIGMA</p><br/>

        </div>
        </div>
        </section>
    )
}
export default Sobre