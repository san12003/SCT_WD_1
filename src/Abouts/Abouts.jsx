import styles from './Abouts.module.css'
function  Abouts (){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.stair}>

                </div>
                <div className={styles.vision}>
                    <h1>OUR VISION</h1>
                    <hr className={styles.line}/>
                    <p>
                    <span  className={"square"}>
                    01
                </span> To redefine interior spaces with innovative designs that blend functionality and aesthetics.
                    </p>
                    <p>
                    <span className={"square"}>
                    02
                </span> To become a global leader in creating timeless and sustainable interiors.
                    </p>
                    <p>
                    <span className={"square"} >
                    03
                </span> To exceed client expectations through exceptional craftsmanship and personalized solutions.
                    </p>
                </div>
                <div className={styles.mission}>
                    <h1>OUR MISSION</h1>
                    <hr className={styles.line}/>

                        <span className={"square"}>01</span>
                    <p>
                        To deliver innovative and customized interior design solutions that transform spaces into
                        functional and aesthetically pleasing environments. We strive to create designs that reflect our
                        clients’ unique personalities and needs while maintaining the highest standards of quality.
                    </p>

                        <span className={"square"}>02</span>
                    <p>
                        To build lasting relationships with our clients through transparent communication, exceptional
                        service, and attention to detail. Our mission is to ensure every project is executed seamlessly,
                        from concept to completion, exceeding client expectations.
                    </p>

                        <span className={"square"}>03</span>
                    <p>
                        To promote sustainable and eco-friendly design practices that contribute to a healthier planet.
                        We aim to incorporate environmentally conscious materials and energy-efficient solutions into
                        every project.
                    </p>
                </div>
                <div className={styles.livingroom}>


                </div>
            </div>
        </>
    )
}

export default Abouts