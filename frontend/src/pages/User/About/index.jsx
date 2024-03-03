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
            <label style={{fontWeight:"600",fontSize:"18px"}}>Haqqımızda</label>
          </div>
          <div>
            <label>
              Nanoplastica.az  saytı saça qulluq vasitələrinin,boyalarının,düzləçdiricilərinin və saç üçün elektron alətlərin bu kontekstdə ən yaxşısını təqdim edir.
              Məhsullarımız istehsalçı ölkələrin lisenziyası və beynalxalq setifikatsiyadan keçmiş Azərbaycan Respublikası tərəfindən Səhiyyə nazirliyinin gigiyenik sertifikatını almış 100% orjinallığını təmin etmişdir.

              Şaçlarınızın mükəmməl düzlüyünü əldə edib onları qorumaq üçün keyfiyyətli məhsul axtarışındasınız?
              Saç prosedurları üçün keyfiyyətli elektron alətiniz yoxdur?
              Bir sözlə saçınıza zərər verməyən məhsullara sahib olmaq istəyirsiniz?
              Saç boyalarından istədiyiniz tonları ala bilmirsiniz?

              Nanoplastica.az saytı mekəmməl seçimdir və nüfuzlu brendlərin məhsullarını Azərbaycan bazarına çatdırılmasında inqilab edir.
              Bu online məkan peşəkarların seçimidir!

              Sizə xidmət etmək üçün hər zaman ixtiyarınızda bir komandaya sahibik.
            </label>
            <p style={{paddingTop:"20px",fontWeight:"500"}}>Hörmətlə Nanoplastica.az komandası
            </p>
          </div>
        </div>
      </div>
      <WhyUs />
    </>
  )
}

export default About
