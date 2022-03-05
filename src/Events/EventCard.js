import rightArrow from "./assets/right.svg";

const EventCard = ({ event }) => {
  return (
    <div id={`event-card-${event.id}`} className="event-card-wrapper">
      <div className="event-card-details">
        <div className="event-card-text-container">
          <h2>{event.name}</h2>
          <p>
            {event.location}, {event.date}
          </p>
        </div>
        <button>
          <span>Book A Meeting</span>
          <img src={rightArrow} className="event-card-btn-icon" />
          <img />
        </button>
      </div>
      <img src={event.image} />
    </div>
  );
};
export default EventCard;
