import styles from "./Home.module.css"
function Home() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.cardone}>
                    <h1 className={styles.company}><span className={styles.largeK}>K</span>aia</h1>
                    <h1 className={styles.type}>INTERIOR DESIGN</h1>
                    <hr className={styles.line}/>
                    <p>“Transforming Spaces, Elevating Lifestyles.”</p>
                </div>
                <div className={styles.cardtwo}>
                    <img src={"https://github.com/san12003/SCT_WD_1/blob/main/src/assets/roberto-nickson-rEJxpBskj3Q-unsplash.jpg?raw=true"}/>
                </div>
                <div className={styles.cardthree}>
                    <h1>WELCOME TO OUR COMPANY</h1>
                    <hr className={styles.linetwo}/>
                    <p>Based in Bangalore, our renowned interior designing company has been transforming spaces for over
                        a decade, delivering innovative and customized design solutions that seamlessly blend aesthetic
                        appeal with functional excellence, redefining the art of interior design in every project we
                        undertake. With 10+ years of expertise, we have had the privilege of collaborating with a
                        diverse clientele, including both domestic and international projects, catering to residential,
                        commercial, and luxury spaces that reflect a deep understanding of global design trends while
                        honoring local sensibilities.
                    </p>
                    <p>Our portfolio showcases successful partnerships with prominent builders and developers, ensuring
                        high-quality execution that reflects elegance, functionality, and creativity, while consistently
                        setting benchmarks in the industry for timeless craftsmanship and cutting-edge innovation.
                        Whether creating timeless interiors that exude sophistication or modern, cutting-edge designs
                        that push the boundaries of contemporary aesthetics, we are committed to exceeding client
                        expectations with unmatched professionalism, meticulous attention to detail, and an unwavering
                        passion for perfection that makes every space uniquely extraordinary.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home
