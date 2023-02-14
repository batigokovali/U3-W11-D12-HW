import { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getJobsActionAsync } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()
  const jobsFromTheReduxStore = useSelector((state) => state.jobs.stock.data)
  console.log(jobsFromTheReduxStore)

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsActionAsync(query))
  };



  return (
    <Container>
      <Row>
        <Col xs={8} className="mr-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Link to="/favorites">
          <Col xs={4} className="ml-auto my-3 d-flex justify-content-end">
            <h1>Favorites</h1>
          </Col>
        </Link>
        <Col xs={12} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={12} className="mx-auto mb-5">
          {jobsFromTheReduxStore ? (
            jobsFromTheReduxStore.map((jobData, i) => (
              <Job key={jobData._id} i={i} data={jobData} />))
          ) : (<h1>Loading...</h1>)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
