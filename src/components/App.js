import Header from './Header';
import ReviewList from './ReviewList';
import BannerList from './BannerList';
import ReviewTop from './ReviewTop';
import Movie from './movie';
import Entert from './Entert';
import banner from '../banner.json';
import items from '../mock.json';
import listMock from '../listMock.json';
import MovieList from '../movieList.json';
import EntertList from '../entert.json';

function App() {
  return (
    <div className='px-[4rem]'>
        <Header/>
        <BannerList items={banner} />
        <ReviewTop items={items} />
        <ReviewList items={listMock} />
        <Movie items={MovieList} />
        <Entert items={EntertList} />
    </div>
  );
}

export default App;
