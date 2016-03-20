import React, { PropTypes, Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/space-control';
import { connect } from 'react-redux';
import * as Actions from '../../actions/spacecontrols';

const cx = classNames.bind(styles);


class SheetsTab extends Component {
  constructor(props) {
    super(props);
    this.showSheet = this.showSheet.bind(this);
  }

  showSheet() {
    this.props.dispatch(Actions.getSheet(this.props.spaceId, this.props.sheet));
  }

  render() {
    return (
      <div onClick={this.showSheet}
      className={cx('SheetTab', 'SheetButton')}>{this.props.sheet}
      </div>
    );
  }
}


  // Will get sheet name from props
  // Props will be the sheet name and a reference if needed to know how to render the sheet
  // Link to space/sheetID
  // Will need action when clicked to show that sheet


export default connect()(SheetsTab);
