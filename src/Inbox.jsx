
import checkbox from './icons/check_box_outline_blank_black_24dp.svg';
import drag from './icons/drag_indicator_black_24dp.svg';
import star from './icons/star_border_black_24dp.svg';
import archive from './icons/archive_black_24dp.svg';
import delet from './icons/delete_black_24dp.svg';
import mark from './icons/mark_as_unread_black_24dp.svg';
import time from './icons/access_time_filled_black_24dp.svg';
import useCustomHook from './useCustomHook';
const Inbox = () => {
  const data = useCustomHook('https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in:inbox');
  function convertTimestampToTime(timestamp) {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${meridiem}`;
  }

  return (
    <div>
      {data && data.map((value) => (

        <div className="inbox-message-item">
          {console.log(value)}
          <div className="checkbox">
            <button className="btn">
              <img src={checkbox} alt="Select" className="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
            </button>
          </div>
          <div className="message-group-hidden">
            <button className="btn-alt btn-nofill drag-indicator">
              <img src={drag} alt="Drag" className="btn-icon-sm btn-icon-alt btn-icon-disabled" />
            </button>
          </div>
          <button className="btn star">
            <img src={star} alt="Not starred" className="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
          </button>
          <div className="message-default">
            <div className="message-sender message-content unread">
              <span>{value.payload.headers.find(item => item.name == "From").value}</span>
            </div>
            <div className="message-subject message-content unread">
              <span>{value.payload.headers.find(item => item.name == "From").value}</span>

            </div>
            <div className="message-separator message-content"> - </div>
            <div className="message-body message-content">
              <span>{value.snippet}</span>
            </div>
            <div className="gap message-content">&nbsp;</div>
            <div className="message-date center-text unread">
              <span>{convertTimestampToTime(value.payload.headers.find(item => item.name == "Date").value)}</span>
              <span>{value.payload.headers.find(item => item.name == "Date").value}</span>
            </div>
          </div>
          <div className="message-group-hidden">
            <div className="inbox-message-item-options">
              <button className="btn">
                <img src={archive} alt="Archive" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
              </button>
              <button className="btn">
                <img src={delet} alt="Delete" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
              </button>
              <button className="btn">
                <img src={mark} alt="Mark as unread" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
              </button>
              <button className="btn">
                <img src={time} alt="Snooze" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Inbox;
