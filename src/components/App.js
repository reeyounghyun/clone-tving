import Header from './Header';
import ReviewList from './ReviewList';
import ReviewTop from './ReviewTop';
import items from '../mock.json';
import listMock from '../listMock.json';

function App() {
  return (
    <div className='px-[4rem]'>
        <Header/>
        <ReviewTop items={items} />
        <ReviewTop items={items} />
        <ReviewList items={listMock} />
    </div>
  );
}

export default App;
