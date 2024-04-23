import Masonry from 'react-masonry-css';
import './App.css';
import CardTemp1 from './components/CardTemp1/CardTemp1';
import CardTemp2 from './components/CardTemp2/CardTemp2';
import CardTemp3 from './components/CardTemp3/CardTemp3';
import CardTemp4 from './components/CardTemp4/CardTemp4';
import CardTemp5 from './components/CardTemp5/CardTemp5';
import CardTemp6 from './components/CardTemp6/CardTemp6';
import CardTemp7 from './components/CardTemp7/CardTemp7';
import CardTemp8 from './components/CardTemp8/CardTemp8';
import CardTemp9 from './components/CardTemp9/CardTemp9';
import CardTemp10 from './components/CardTemp10/CardTemp10';
import CardTemp11 from './components/CardTemp11/CardTemp11';
import CardTemp12 from './components/CardTemp12/CardTemp12';
import CardTemp13 from './components/CardTemp13/CardTemp13';
import CardTemp14 from './components/CardTemp14/CardTemp14';
import CardTemp15 from './components/CardTemp15/CardTemp15';
import CardTemp16 from './components/CardTemp16/CardTemp16';
import CardTemp17 from './components/CardTemp17/CardTemp17';
import CardTemp18 from './components/CardTemp18/CardTemp18';
import CardTemp19 from './components/CardTemp19/CardTemp19';
import CardTemp20 from './components/CardTemp20/CardTemp20';
import CardTemp21 from './components/CardTemp21/CardTemp21';
import CardTemp22 from './components/CardTemp22/CardTemp22';
import CardTemp23 from './components/CardTemp23/CardTemp23';
import CardTemp24 from './components/CardTemp24/CardTemp24';
import CardTemp25 from './components/CardTemp25/CardTemp25';

function App() {
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <div className="app-wrapper">
        <h1 className="unique-h1">Cards Layout</h1>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <CardTemp1 />
          <CardTemp2 />
          <CardTemp3 />
          <CardTemp4 />
          <CardTemp5 />
          <CardTemp6 />
          <CardTemp7 />
          <CardTemp8 />
          <CardTemp9 />
          <CardTemp10 />
          <CardTemp11 />
          <CardTemp12 />
          <CardTemp13 />
          <CardTemp14 />
          <CardTemp15 />
          <CardTemp16 />
          <CardTemp17 />
          <CardTemp18 />
          <CardTemp19 />
          <CardTemp20 />
          <CardTemp21 />
          <CardTemp22 />
          <CardTemp23 />
          <CardTemp24 />
          <CardTemp25 />
        </Masonry>
      </div>
    </>
  );
}

export default App;
