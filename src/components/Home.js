import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";
import Spinner from 'react-bootstrap/Spinner';
import Header from './Header';
import TableCellEditing from './TableCellEditing';
import Table from 'react-bootstrap/Table';
import Notification from './Notification';

const Home = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  useEffect(() => {
    if (document.querySelector('Table')) {
      const editing = new TableCellEditing(document.querySelector('table'));
      editing.init()
    }
  });

  let content;

  content = (
    <div>
      <Header />
      {
        props.data ?
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                props.data.map(user => {
                  return (
                    <tr data-id={user.id}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          : <div style={{ textAlign: 'center', verticalAlign: 'middle', lineHeight: '90px' }}><Spinner animation="grow" /></div>
      }
      {props.updateStatus ? <Notification updateStatus={props.updateStatus} /> : null}

    </div>
  );

  return content;
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    updateStatus: state.updateStatus
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => {
    dispatch(getData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
