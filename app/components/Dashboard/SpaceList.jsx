import React, {PropTypes, Component} from 'react';
import styles from 'css/components/dashboard';
import classNames from 'classnames/bind';
import AddSpace from './AddSpace'
import {Link} from 'react-router';
import {Glyphicon} from 'react-bootstrap';

const cx = classNames.bind(styles);

const SpaceList = (props) => {

   const spaces = !props.spaces ? [] : props.spaces;

   const spacesToDisplay =
   spaces.map((el) => {
     const route=`space/${el._id}`;
      return <div key={el._id} className={cx('iconForSheet') + ' col-xs-4'}>
                  <Link to={route}>
                    <Glyphicon glyph="glyphicon glyphicon-folder-open" />
                  </Link>
                <h6> {el.name} </h6>
              </div>
    });

    return (
      <div className={cx('spacesDiv')}>
        <strong>Your Spaces</strong>
        <div className={cx('spaces')}>
        {spacesToDisplay}
        <AddSpace createSpace={props.createSpace}/>
        </div>
      </div>
    );
  }

export default SpaceList;
