import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import Header from './Header';

const Home = (props) => {
  console.log(props);

useEffect(() => {
  props.getData();
}, []);

let content;

  content = (
    <div>
      <Header />
      <ListGroup>
        {props.data ? props.data.map(element => <ListGroup.Item>{element.title}</ListGroup.Item>) : 
        <div style={{textAlign:'center', verticalAlign:'middle', lineHeight:'90px'}}><Spinner animation="grow" /></div>  }
      </ListGroup>
    </div>
  );

return content;
};

const mapStateToProps = state => {
    return {
        data: state.data,
        isLoading: state.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => {
    dispatch(getData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
