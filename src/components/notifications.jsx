import React from "react";
import Notifications from "./jsonfiles/notifications.json";

function NotificationsTab() {
  return (
    <div className="ptb5 plr6">
      {Notifications.map((msg, idx) => (
        <div className="box-shadow bg-white bdr-radius-10 flx mtb2 ptb2 plr4 gap-100 align-center">
          <img src={msg.img} alt={`notification${idx + 1}`} height="80" width="80"/>
          <div className="font18">
            <div>{msg.title}</div>
            <div className="time-txt pt0-5">{msg.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotificationsTab;
