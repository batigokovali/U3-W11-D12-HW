import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavoritesAction, REMOVE_FROM_FAVORITES, addToFavoritesAction, ADD_TO_FAVORITES } from '../redux/actions'
import { BookmarkHeartFill } from "react-bootstrap-icons"
import { BsFillBookmarkPlusFill, BsBookmarkDashFill } from "react-icons/bs"

const Job = ({ data, i }) => {
  const dispatch = useDispatch();
  let favorites = useSelector((state) => state.favorites.content);

  return (
    <Row
      className="mx-0 mt-3 p-3 d-flex align-items-center jobs"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      {favorites.some((job) => data._id === job._id) ? (
        <div className="ml-auto justify-content-center">
          <Button
            variant="danger"

            onClick={() => {
              dispatch(removeFromFavoritesAction(data._id))
            }}
          >
            <BsBookmarkDashFill></BsBookmarkDashFill>
          </Button>
        </div>

      ) : (
        <div className="ml-auto justify-content-center">
          <Button

            xs={1}
            onClick={() => {
              dispatch(addToFavoritesAction(data))
            }}
          >
            <BsFillBookmarkPlusFill></BsFillBookmarkPlusFill>
          </Button>
        </div>

      )}
    </Row>
  );
};

export default Job;
