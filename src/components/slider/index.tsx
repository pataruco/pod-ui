import cx from 'classnames';
import Arrow from 'components/icons/arrow';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import React from 'react';
import styles from './style.css';

const baseUrl = 'https://peter-of-the-day.s3.amazonaws.com/';

interface Props {
  date: string;
  files: any[];
}

interface SlideProps {
  date: string;
  file: {
    url: string;
  };
}

export const SlideWrapper = ({ date, file }: SlideProps) => {
  return <img alt={`Peter on ${date}`} src={`${baseUrl}${file.url}`} />;
};

export const Carrousel = ({ date, files }: Props) => {
  if (Array.isArray(files) && files.length > 0) {
    return (
      <CarouselProvider
        naturalSlideHeight={0}
        naturalSlideWidth={100}
        totalSlides={files.length}
      >
        <Slider classNameTray={styles.slider}>
          {files &&
            files.map((file, index) => (
              <Slide
                index={index}
                key={index}
                innerClassName={styles.innerSlide}
              >
                <SlideWrapper date={date} file={file} key={index} />
              </Slide>
            ))}
        </Slider>
        <aside className={styles.footer}>
          <ButtonBack className={cx(styles.button, styles.buttonBack)}>
            <Arrow />
          </ButtonBack>
          <ButtonNext className={cx(styles.button, styles.buttonNext)}>
            <Arrow />
          </ButtonNext>
        </aside>
      </CarouselProvider>
    );
  }
  return null;
};

export default Carrousel;
