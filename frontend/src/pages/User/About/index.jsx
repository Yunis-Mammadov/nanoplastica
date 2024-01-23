import React from 'react'
import styles from "./index.module.css"
import WhyUs from '../Home/WhyUs'

const About = () => {
  return (
    <>
      <div className={styles.parentAbout}>
        <div className={styles.imgParent}>
          <img src="" alt="" />
        </div>
        <div className={styles.aboutText}>
          <div>
            <label>Haqqımızda</label>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae vero velit nesciunt nostrum optio commodi deleniti perspiciatis laborum, maxime sint dicta ex est. Molestiae aspernatur consectetur illo amet saepe.
              Doloremque magni totam ad ratione nihil tempora deleniti nulla blanditiis suscipit quam magnam harum atque dolores veniam culpa, assumenda dicta voluptatibus ab velit necessitatibus. Sint doloremque fugit ipsa earum! Enim!
              Sequi nam, incidunt maxime corrupti saepe quibusdam ea quaerat repellendus dolores ab? Doloribus exercitationem ducimus ab molestias iusto vitae voluptatum libero aliquid. Ut ducimus impedit temporibus! Vel laborum iure sed!
              Dolore, eum quo dignissimos, quasi, et saepe sequi sapiente veritatis magni laboriosam voluptatum? Enim nesciunt dicta, praesentium quos porro quia error, voluptate qui deserunt in tenetur velit itaque iusto voluptates!
              Ipsum officiis aspernatur soluta necessitatibus incidunt, aliquid, placeat eos quibusdam corrupti iste minus doloribus unde distinctio ratione sit suscipit voluptate ipsam quos possimus impedit in vitae earum repellat. Culpa, quam?</p>
          </div>
        </div>
      </div>
      <WhyUs/>
    </>
  )
}

export default About
