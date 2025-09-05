import * as S from './styles';

import bootstrap from '../../assets/svg/bootstrap.svg';
import cypressio from '../../assets/svg/cypressio.svg';
import eslint from '../../assets/svg/eslint.svg';
import git from '../../assets/svg/git.svg';
import grunt from '../../assets/svg/grunt.svg';
import gulp from '../../assets/svg/gulp.svg';
import html5 from '../../assets/svg/html5.svg';
import java from '../../assets/svg/java.svg';
import javascript from '../../assets/svg/javascript.svg';
import jest from '../../assets/svg/jest.svg';
import jquery from '../../assets/svg/jquery.svg';
import less from '../../assets/svg/less.svg';
import nodejs from '../../assets/svg/nodejs.svg';
import npm from '../../assets/svg/npm.svg';
import react from '../../assets/svg/react.svg';
import redux from '../../assets/svg/redux.svg';
import sass from '../../assets/svg/sass.svg';
import typescript from '../../assets/svg/typescript.svg';

type data = { name: string; img: string };

const data: data[] = [
  { name: 'Git', img: git },
  { name: 'Html5', img: html5 },
  { name: 'JavaScript', img: javascript },
  { name: 'TypeScript', img: typescript },
  { name: 'Jquery', img: jquery },
  { name: 'React', img: react },
  { name: 'Redux', img: redux },
  { name: 'Java', img: java },
  { name: 'Nodejs', img: nodejs },
  { name: 'npm', img: npm },
  { name: 'ESlint', img: eslint },
  { name: 'Cypress', img: cypressio },
  { name: 'Jest', img: jest },
  { name: 'Grunt', img: grunt },
  { name: 'Gulp', img: gulp },
  { name: 'Bootstrap', img: bootstrap },
  { name: 'Sass', img: sass },
  { name: 'Less', img: less },
];

const Slide = () => {
  return (
    <S.ContainerSlide>
      <div className="slide">
        <div className="images">
          {data.map((res, index) => (
            <img key={index} src={res.img} alt={res.name} title={res.name} />
          ))}
        </div>
        <div className="images">
          {data.map((res, index) => (
            <img key={index} src={res.img} alt={res.name} title={res.name} />
          ))}
        </div>
      </div>
    </S.ContainerSlide>
  );
};

export default Slide;
