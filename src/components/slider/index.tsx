// import '!style-loader!css-loader!./slick.css';
// import '!style-loader!css-loader!./slick-theme.css';
// import '!style-loader!css-loader!./style.css';
import React from 'react';
import Slider from 'react-slick';
const baseUrl = 'https://peter-of-the-day.s3.amazonaws.com/';
// import styles from './style.css';

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

const Slide = ({ date, file }: SlideProps) => {
  return (
    <article>
      <img src={`${baseUrl}${file.url}`} alt={`Peter on ${date}`} />
    </article>
  );
};

const Carrousel = ({ date, files }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <h3>
        <time>{date}</time>
      </h3>
      {files.map(file => <Slide date={date} file={file} key={file.url} />)}
    </Slider>
  );
};

export default Carrousel;
