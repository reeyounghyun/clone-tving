import './ReviewList.css';
import './common.css';

// function formatDate(value) {
//   const date = new Date(value);
//   return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
// }

function ReviewListItem({ item }) {
  return (
    <>
      <div className="ReviewListItem">
        <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      </div>
    </>
  );
}

function ReviewList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ReviewListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
