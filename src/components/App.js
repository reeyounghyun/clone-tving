import Header from './Header';
import ReviewList from './ReviewList';
import ReviewTop from './ReviewTop';
import items from '../mock.json';

function App() {
  return (
    <div className='px-[4rem]'>
        <Header/>
        <ReviewTop items={items} />
        <ReviewList items={items} />
    </div>
  );
}

export default App;
