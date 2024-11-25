import styles from "./Services.module.css"
function Services (){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.service}>
                    <h1>OUR SERVICES</h1>
                    <hr className={styles.line}/>
                </div>
                <div className={styles.content}>
                    <p> • Residential and Commercial Interiors<br/>
                        • Luxury and Bespoke Designs<br/>
                        • Turnkey Solutions<br/>
                        • Renovation and Remodeling<br/>
                        • 3D Visualization<br/>
                        • Custom Furniture and Decor</p>
                </div>
                <div className={styles.statistics}>
                    <h1>100+</h1>
                    <p><i>service for client</i></p>
                </div>
                <div className={styles.first}>

                </div>
                <div className={styles.second}>

                </div>

            </div>
        </>
    )
}

export default Services;