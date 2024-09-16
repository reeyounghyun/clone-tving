import Header from './Header';
import ReviewList from './ReviewList';
import BannerList from './BannerList';
import ReviewTop from './ReviewTop';
import banner from '../banner.json';
import items from '../mock.json';
import listMock from '../listMock.json';

function App() {
  return (
    <div className='px-[4rem]'>
        <Header/>
        <BannerList items={banner} />
        <ReviewTop items={items} />
        <ReviewList items={listMock} />
    </div>
  );
}

export default App;
