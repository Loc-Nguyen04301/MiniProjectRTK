import React from "react";
import { useCountDown } from "@/hooks/useCountDown";
import styles from "@/assets/styles/CountDownTimer.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? cx("countdown-danger") : cx("countdown")}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

const ExpiredNotice = () => {
  return <></>;
};

const ShowCounter = ({ days, hours, minutes, seconds, countdown }) => {
  return (
    <div className={cx("flash-sale-header")}>
      {countdown > 0 && (
        <>
          <div className={cx("flash-sale-image")}></div>
          <div className={cx("show-counter")}>
            <a
              href="/"
              target="_blank"
              rel="noopener-noreferrer"
              className={cx("countdown-link")}
            >
              <DateTimeDisplay
                value={days}
                type={"DAYS"}
                isDanger={days <= 3}
              />
              <p>:</p>
              <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
              <p>:</p>
              <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
              <p>:</p>
              <DateTimeDisplay
                value={seconds}
                type={"Seconds"}
                isDanger={false}
              />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds, countdown] = useCountDown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        countdown={countdown}
      />
    );
  }
};

export default CountDownTimer;
