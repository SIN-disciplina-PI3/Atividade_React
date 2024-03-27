import styles from './Ods.module.css'
import ods from '/image/ods.jpg'

function Ods(){
    return(
        
        <section className={styles.ods}>
            <div className={styles.descricao}>
        <img src={ods} alt="ods" className={styles.ods}/>
        <div className={styles.textos}>
        <h2>Sobre</h2>
        <p>ODS-<span>Objetivos de Desenvolvimento Sustentável</span> </p><br/>
        <p> São um conjunto de 17 metas globais estabelecidas pela ONU <br/>
            para abordar desafios socioeconômicos e ambientais até 2030. <br/>
            Eles visam promover a prosperidade, proteger o planeta e garantir <br/>
            o bem-estar para todos, buscando um desenvolvimento sustentável e <br/>
            equitativo em nível global.</p>
        <p>ODS 4-<span>Educação de Qualidade </span> </p><br/>  
        <p>  visa garantir o acesso universal à educação inclusiva, equitativa e <br/> 
            de qualidade, promovendo oportunidades de aprendizado ao longo da vida <br/> 
            para todos. Busca eliminar disparidades de gênero, melhorar a qualidade <br/> 
            da educação e fornecer ambientes de aprendizado seguros e inclusivos, <br/> 
            contribuindo assim para o desenvolvimento humano, social e econômico <br/> 
            sustentável em todo o mundo. </p>
            
       </div>
       </div>
    </section>
        
    )
}
export default Ods

