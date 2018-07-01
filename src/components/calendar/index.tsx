import '!style-loader!css-loader!./calendar.css';
import moment from 'moment';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';
import { saveDate } from 'state/date/actions';
import { openModal } from 'state/modal/actions';
import styles from './style.css';

BigCalendar.momentLocalizer(moment);

interface Props {
  dates: {};
  dataIsLoaded: boolean;
  renderModalFn: () => void;
  saveDateFn: (any) => void;
}

export class CalendarComponent extends Component<Props> {
  private views = ['month'];

  constructor(props) {
    super(props);
  }

  public handleSelectEvent = event => {
    if (event) {
      this.props.saveDateFn(event);
      return this.props.renderModalFn();
    }
  };

  public render() {
    const { dates, dataIsLoaded } = this.props;
    return (
      <section className={styles.calendarWrapper}>
        {dataIsLoaded && (
          <BigCalendar
            events={dates}
            selectable={false}
            views={this.views}
            onSelectEvent={this.handleSelectEvent}
          />
        )}
      </section>
    );
  }
}

const renderModal = renderModalFn => () => {
  return renderModalFn();
};

export const mapDispatchToProps = {
  saveDateFn: saveDate,
  renderModalFn: renderModal(openModal),
};

export const mapStateToProps = ({ user: { dates, dataIsLoaded } }) => ({
  dates,
  dataIsLoaded,
});

const connectedCalendar = connect(
  mapStateToProps,
  mapDispatchToProps,
  // @ts-ignore
)(CalendarComponent);

export default connectedCalendar;
