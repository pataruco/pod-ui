import '!style-loader!css-loader!./calendar.css';
import moment from 'moment';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  private views = ['month'];

  private events = [
    {
      start: new Date(),
      end: new Date(),
      title: 'Some title',
      files: ['banana', 'orangess'],
    },
  ];

  public handleSelectEvent = event => {
    // console.log('event', event);
  };

  public render() {
    return (
      <section className={styles.calendarWrapper}>
        <BigCalendar
          events={this.events}
          selectable={false}
          views={this.views}
          onSelectEvent={this.handleSelectEvent}
        />
      </section>
    );
  }
}

export default Calendar;
