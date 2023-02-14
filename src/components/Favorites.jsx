import { Col, Row, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavoritesAction } from '../redux/actions'
import { BsFillBookmarkPlusFill, BsBookmarkDashFill } from "react-icons/bs"

const Favorites = () => {
  let favorites = useSelector((state) => state.favorites.content);
  // now cart is a reference to the state.cart.content array

  const dispatch = useDispatch();

  return (
    <Container className="mt-3">
      <h1>Favorites</h1>
      <Col xs={12} className="d-flex flex-column justify-content-center">
        {favorites.map((job, i) => (
          <Row
            key={i}
            className="my-4 jobs"

            style={{ border: "1px solid #00000033", borderRadius: 4 }}
          >
            <Col className="d-flex align-items-center">
              <a href={job.url} target="_blank" rel="noreferrer">
                {job.company_name}
              </a>
              <p className="mx-4 my-0">|</p>
              <p className="my-0">{job.title}</p>
            </Col>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(removeFromFavoritesAction(job._id))
              }}
            >
              <BsBookmarkDashFill />
            </Button>
          </Row>
        ))}
      </Col>
    </Container>
  );
};

export default Favorites;
