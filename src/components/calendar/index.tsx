import '!style-loader!css-loader!./calendar.css';
import moment from 'moment';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';

BigCalendar.momentLocalizer(moment);

interface Props {
  dates: {};
  dataIsLoaded: boolean;
}

export class CalendarComponent extends Component<Props> {
  private views = ['month'];

  constructor(props) {
    super(props);
  }

  public handleSelectEvent = event => {
    // console.log('event', event);
  };

  public render() {
    const { dates, dataIsLoaded } = this.props;
    return (
      <section>
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

export const mapStateToProps = ({ user: { dates, dataIsLoaded } }) => ({
  dates,
  dataIsLoaded,
});

const connectedCalendar = connect(mapStateToProps)(CalendarComponent);

export default connectedCalendar;
