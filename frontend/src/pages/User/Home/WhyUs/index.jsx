import React from 'react';
import './styles.css';
import { useMediaQuery } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

export default function WhyUs() {

  const isExtraLarge = useMediaQuery('(min-width:1200px)');
  const isLarge = useMediaQuery('(min-width:270px)');

  if (isExtraLarge) {
    return (
      <>
        <div class="desktop-media-scroller">
          <div class="desktop-media-element">
            <div class="desktop-media-icon">
              <StarIcon />
            </div>
            <div>
              <h6>Qapıda Rəsmiləşdirmə</h6>
              <p class="title">Müştərilərimizin saç qayğısında etibarlı şəkildə istifadə edə biləcəyi məhsulları təqdim edirik</p>
            </div>
          </div>
          <div class="desktop-media-element">
            <div class="desktop-media-icon">
              <InfoIcon />
            </div>
            <div>
              <h6>6 ay ödənişsiz zəmanət</h6>
              <p class="title">Keratin sahəsində uzun illərin təcrübəsi ilə müştərilərimizə saç qayğısı üzrə mütəxəssis rəhbərliyi təmin edirik</p>
            </div>
          </div>
          <div class="desktop-media-element">
            <div class="desktop-media-icon">
              <TagFacesIcon />
            </div>
            <div>
              <h6>Qızıl zəmanət +15% 18 ay</h6>
              <p class="title">Müştəri dəstək komandamız hər zaman sizin qənaətiniz üçün bütün sual və təkliflərinizi dinləməyə hazırdır</p>
            </div>
          </div>
          <div class="desktop-media-element">
            <div class="desktop-media-icon">
              <TwoWheelerIcon />
            </div>
            <div>
              <h6>Pulsuz və Sürətli Çatdırılma</h6>
              <p class="title">Sifarişlərinizi sürətli şəkildə qəbul edir, etibarlı çatdırılma vasitəsilə ünvanınıza çatdırırıq.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isLarge && !isExtraLarge) {
    return (
      <>
        <div class="media-scroller">
          <div class="media-element">
            <div class="media-icon">
              <StarIcon />
            </div>
            <div>
              <h6>Qapıda Rəsmiləşdirmə</h6>
              <p class="title">Müştərilərimizin saç qayğısında etibarlı şəkildə istifadə edə biləcəyi məhsulları təqdim edirik</p>
            </div>
          </div>
          <div class="media-element">
            <div class="media-icon">
              <InfoIcon />
            </div>
            <div>
              <h6>6 ay ödənişsiz zəmanət</h6>
              <p class="title">Keratin sahəsində uzun illərin təcrübəsi ilə müştərilərimizə saç qayğısı üzrə mütəxəssis rəhbərliyi təmin edirik</p>
            </div>
          </div>
          <div class="media-element">
            <div class="media-icon">
              <TagFacesIcon />
            </div>
            <div>
              <h6>Qızıl zəmanət +15% 18 ay</h6>
              <p class="title">Müştəri dəstək komandamız hər zaman sizin qənaətiniz üçün bütün sual və təkliflərinizi dinləməyə hazırdır</p>
            </div>
          </div>
          <div class="media-element">
            <div class="media-icon">
              <TwoWheelerIcon />
            </div>
            <div>
              <h6>Pulsuz və Sürətli Çatdırılma</h6>
              <p class="title">Sifarişlərinizi sürətli şəkildə qəbul edir, etibarlı çatdırılma vasitəsilə ünvanınıza çatdırırıq.</p>
            </div>
          </div>
        </div>
      </>
    );
  }

}
