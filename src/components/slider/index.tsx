import '!style-loader!css-loader!./carrousel.css';
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
  return (
    <article className={styles.imgWrapper}>
      <img
        alt={`Peter on ${date}`}
        className={styles.img}
        src={`${baseUrl}${file.url}`}
      />
    </article>
  );
};

export const Carrousel = ({ date, files }: Props) => {
  return (
    <CarouselProvider
      naturalSlideHeight={0}
      naturalSlideWidth={100}
      totalSlides={files.length}
    >
      <Slider>
        {files &&
          files.map((file, index) => (
            <Slide index={index}>
              <SlideWrapper date={date} file={file} key={file.url} />
            </Slide>
          ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Carrousel;
