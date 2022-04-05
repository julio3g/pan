import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.scss';

export function Slide() {
  const responsive = {
    desktop: {
      breakpoint: { max: 1000, min: 1024 },
      items: 1.5,
    },
  };
  return (
    <section className={`container`}>
      <div className={`${styles.content}`}>
        {/* <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
        >
          <Link href="/servicos/epoxi">
            <a>
              <div className={styles.item}>
                <Image
                  src="/shared/slide/image-1.jpg"
                  alt="Image 1"
                  width={354}
                  height={354}
                  // layout="fill"
                  objectFit="cover"
                />
                <h2>Epóxi</h2>
                <p>
                  O Piso Epóxi Autonivelante é desenvolvido para aplicação em
                  áreas onde é necessário grande nível de assepsia (facilidade
                  de limpeza), assim como alta resistência a ataques químicos e
                  abrasivos, suportando
                </p>
              </div>
            </a>
          </Link>

          <Link href="/servicos/uretano-a-n">
            <a>
              <div className={styles.item}>
                <Image
                  src="/shared/slide/image-2.jpg"
                  alt="Image 2"
                  width={354}
                  height={354}
                  // layout="fill"
                  objectFit="cover"
                />
                <h2>Uretano A.N</h2>
                <p>
                  O Piso Uretano Monolítico Autonivelante oferece alta proteção
                  contra produtos químicos, utilizado para pisos de tráfego
                  constante e pesado, possui resistência mecânica a impactos e
                  choques térmicos
                </p>
              </div>
            </a>
          </Link>
          <Link href="">
            <a>
              <div className={styles.item}>
                <Image
                  src="/shared/slide/image-3.jpg"
                  alt="Image 3"
                  width={354}
                  height={354}
                  // layout="fill"
                  objectFit="cover"
                />
                <h2>Uretano Argamassado</h2>
                <p>
                  Da mesma família do Uretano A.N, contempla as mesmas
                  características anteriormente descritas, tais como resistência
                  física, química e térmica, se enquadrando as necessidades do
                  ambiente
                </p>
              </div>
            </a>
          </Link>
        </Carousel> */}
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className={styles.item}>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Carousel>
      </div>
    </section>
  );
}

// import React, { useState } from 'react';
// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import Image from 'next/image';

// interface ImageSliderProps {
//   slides: any;
// }

// const ImageSlider = ({ slides }: ImageSliderProps) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <section className={styles.slider}>
//       <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
//       <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
//       {SliderData.map((slide, index) => {
//         return (
//           <div
//             className={index === current ? 'slide active' : 'slide'}
//             key={index}
//           >
//             {index === current && (
//               <>
//                 <Image
//                   src="/shared/slide/image-1.jpg"
//                   alt="image"
//                   layout="fill"
//                 />
//                 <Image
//                   src="/shared/slide/image-2.jpg"
//                   alt="image"
//                   layout="fill"
//                 />
//                 <Image
//                   src="/shared/slide/image-3.jpg"
//                   alt="image"
//                   layout="fill"
//                 />
//               </>
//             )}
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default ImageSlider;
