import moment from 'moment';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  private views = {
    month: true,
    week: false,
    agenda: false,
  };

  private events = [
    {
      start: new Date(),
      end: new Date(),
      title: 'Some title',
    },
  ];

  public handleSelectEvent = event => {
    // console.log('event', event);
  };

  public render() {
    return (
      <section>
        <BigCalendar
          events={this.events}
          defaultView="month"
          selectable={false}
          views={this.views}
          onSelectEvent={this.handleSelectEvent}
          // startAccessor="startDate"
          // endAccessor="endDate"
        />
      </section>
    );
  }
}

export default Calendar;
