import './CardTemp7.css';
import DataTemp7 from './DataTemp7';
import FooterTemp7 from './FooterTemp7';
import MainTemp7 from './MainTemp7';

function CardTemp7() {
  const data = {
    name: 'Robert Fox',
    skill: 'Web Development',
    title: 'Lorem, ipsum dolor.',
    aboutme:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ad veniam perferendis est vero modi?',
    techskills: {
      react: 'React',
      js: 'JavaScript',
      angular: 'Angular',
    },
  };
  return (
    <div className="card temp7">
      <DataTemp7 infoDetails={data} />
      <MainTemp7 infoDetails={data} />
      <FooterTemp7 />
    </div>
  );
}

export default CardTemp7;
