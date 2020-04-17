import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation: deleteEducationAction }) => {
  const educations = education.map((ed) => (
    <tr key={ed._id}>
      <td>{ed.company}</td>
      <td className="hide-sm">{ed.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{moment.utc(ed.from)}</Moment>
        {' '}
        -
        {' '}
        {ed.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{moment.utc(ed.to)}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteEducationAction(ed._id)} type="submit" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
