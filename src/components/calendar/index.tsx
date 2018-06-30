import '!style-loader!css-loader!./calendar.css';
import moment from 'moment';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import { connect } from 'react-redux';
import { openModal } from 'state/modal/actions';

BigCalendar.momentLocalizer(moment);

interface Props {
  dates: {};
  dataIsLoaded: boolean;
  renderModalFn: () => void;
}

export class CalendarComponent extends Component<Props> {
  private views = ['month'];

  constructor(props) {
    super(props);
  }

  public handleSelectEvent = event => {
    if (event) {
      return this.props.renderModalFn();
    }
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

const renderModal = renderModalFn => event => {
  if (event) {
    event.preventDefault();
  }
  return renderModalFn();
};

export const mapDispatchToProps = {
  renderModalFn: renderModal(openModal),
};

export const mapStateToProps = ({ user: { dates, dataIsLoaded } }) => ({
  dates,
  dataIsLoaded,
});

const connectedCalendar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarComponent);

export default connectedCalendar;
