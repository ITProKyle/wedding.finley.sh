import React, { useContext, useEffect, useState, useRef } from 'react';
import moment from 'moment';
import 'src/components/countdown/CountdownClock.scss';
import { ThemeContext } from 'src/context/ThemeContext';

interface Props {
  size: 'large' | 'medium' | 'small';
  endAt: string;
  hideYear: boolean;
  hideMonth: boolean;
  hideDay: boolean;
  hideHour: boolean;
  hideMinute: boolean;
  hideSecond: boolean;
  titlePosition: 'top' | 'bottom';
}

const CountdownClock: React.FC<Props> = (props): JSX.Element => {
  const [completed, setCompleted] = useState(false);
  const { theme } = useContext(ThemeContext);

  const clock = {
    year: {
      title: 'Years',
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<HTMLSpanElement>(null)
    },
    month: {
      title: 'Months',
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<HTMLSpanElement>(null)
    },
    day: {
      title: 'Days',
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<HTMLSpanElement>(null)
    },
    hour: {
      title: 'Hours',
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<HTMLSpanElement>(null)
    },
    minute: {
      title: 'Minutes',
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<HTMLSpanElement>(null)
    },
    second: {
      title: 'Seconds',
      value: useState(0),
      prevValue: useState(0),
      ref: useRef<HTMLSpanElement>(null)
    }
  };

  const {
    size = 'medium',
    endAt = moment(),
    hideYear,
    hideMonth,
    hideDay,
    hideHour,
    hideMinute,
    hideSecond,
    titlePosition = 'top'
  } = props;

  let interval: ReturnType<typeof setTimeout>
  let prev = moment.duration(moment().diff(moment()));

  useEffect(() => {
    processClock();
    // eslint-disable-next-line
    interval = setInterval(() => {
      processClock();
    }, 1000);

    return () => {
      if (interval) {
          clearInterval(interval);
      }
    };
  }, [endAt]);

  const processClock = () => {
    const then = moment(endAt);
    let value = moment.duration(then.diff(moment()));

    if (value.milliseconds() < 0) {
      setCompleted(true);
      clearInterval(interval);
      return;
    }

    // Year
    if (!hideYear) {
      clock.year.value[1](value.years());
      clock.year.prevValue[1](prev.years());

      if (
        parseInt((value.years() / 10).toString()) !==
          parseInt((prev.years() / 10).toString()) &&
        clock.year.ref.current
      ) {
        const section = clock.year.ref.current.querySelector(
          '.flip-countdown-card-sec.one'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }

      if (
        parseInt((value.years() % 10).toString()) !==
          parseInt((prev.years() % 10).toString()) &&
        clock.year.ref.current
      ) {
        const section = clock.year.ref.current.querySelector(
          '.flip-countdown-card-sec.two'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }
    }

    // Months
    if (!hideMonth) {
      clock.month.value[1](value.months());
      clock.month.prevValue[1](prev.months());

      if (
        parseInt((value.months() / 10).toString()) !==
          parseInt((prev.months() / 10).toString()) &&
        clock.month.ref.current
      ) {
        const section = clock.month.ref.current.querySelector(
          '.flip-countdown-card-sec.one'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }

      if (
        parseInt((value.months() % 10).toString()) !==
          parseInt((prev.months() % 10).toString()) &&
        clock.month.ref.current
      ) {
        const section = clock.month.ref.current.querySelector(
          '.flip-countdown-card-sec.two'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }
    }

    // Days
    if (!hideDay) {
      clock.day.value[1](value.days());
      clock.day.prevValue[1](prev.days());

      if (
        parseInt((value.days() / 10).toString()) !==
          parseInt((prev.days() / 10).toString()) &&
        clock.day.ref.current
      ) {
        const section = clock.day.ref.current.querySelector(
          '.flip-countdown-card-sec.one'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }

      if (
        parseInt((value.days() % 10).toString()) !==
          parseInt((prev.days() % 10).toString()) &&
        clock.day.ref.current
      ) {
        const section = clock.day.ref.current.querySelector(
          '.flip-countdown-card-sec.two'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }
    }

    // Hours
    if (!hideHour) {
      clock.hour.value[1](value.hours());
      clock.hour.prevValue[1](prev.hours());

      if (
        parseInt((value.hours() / 10).toString()) !==
          parseInt((prev.hours() / 10).toString()) &&
        clock.hour.ref.current
      ) {
        const section = clock.hour.ref.current.querySelector(
          '.flip-countdown-card-sec.one'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }

      if (
        parseInt((value.hours() % 10).toString()) !==
          parseInt((prev.hours() % 10).toString()) &&
        clock.hour.ref.current
      ) {
        const section = clock.hour.ref.current.querySelector(
          '.flip-countdown-card-sec.two'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }
    }

    // Minutes
    if (!hideMinute) {
      clock.minute.value[1](value.minutes());
      clock.minute.prevValue[1](prev.minutes());

      if (
        parseInt((value.minutes() / 10).toString()) !==
          parseInt((prev.minutes() / 10).toString()) &&
        clock.minute.ref.current
      ) {
        const section = clock.minute.ref.current.querySelector(
          '.flip-countdown-card-sec.one'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }

      if (
        parseInt((value.minutes() % 10).toString()) !==
          parseInt((prev.minutes() % 10).toString()) &&
        clock.minute.ref.current
      ) {
        const section = clock.minute.ref.current.querySelector(
          '.flip-countdown-card-sec.two'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }
    }

    // Seconds
    if (!hideSecond) {
      clock.second.value[1](value.seconds());
      clock.second.prevValue[1](prev.seconds());

      if (
        parseInt((value.seconds() / 10).toString()) !==
          parseInt((prev.seconds() / 10).toString()) &&
        clock.second.ref.current
      ) {
        const section = clock.second.ref.current.querySelector(
          '.flip-countdown-card-sec.one'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }

      if (
        parseInt((value.seconds() % 10).toString()) !==
          parseInt((prev.seconds() % 10).toString()) &&
        clock.second.ref.current
      ) {
        const section = clock.second.ref.current.querySelector(
          '.flip-countdown-card-sec.two'
        ) as HTMLSpanElement;
        section.classList.remove('flip');
        void section.offsetWidth;
        section.classList.add('flip');
      }
    }

    prev = value;
  };

  const getPiece = (data: any) => {
    const [value] = data.value;
    const [prevValue] = data.prevValue;
    const part1 = parseInt((value / 10).toString());
    const part2 = parseInt((value % 10).toString());
    let prev1 = parseInt((prevValue / 10).toString());
    let prev2 = parseInt((prevValue % 10).toString());

    return (
      <span className='flip-countdown-piece' ref={data.ref}>
        {'top' === titlePosition && (
          <span className='flip-countdown-title'>{data.title}</span>
        )}
        <span className='flip-countdown-card'>
          <span className={`flip-countdown-card-sec one`}>
            <span className='card__top'>{part1}</span>
            <span className='card__bottom' data-value={prev1} />
            <span className='card__back' data-value={prev1}>
              <span className='card__bottom' data-value={part1} />
            </span>
          </span>
          <span className={`flip-countdown-card-sec two`}>
            <span className='card__top'>{part2}</span>
            <span className='card__bottom' data-value={prev2} />
            <span className='card__back' data-value={prev2}>
              <span className='card__bottom' data-value={part2} />
            </span>
          </span>
        </span>
        {'bottom' === titlePosition && (
          <span className='flip-countdown-title'>{data.title}</span>
        )}
      </span>
    );
  };

  if (completed) {
    return <div className='flip-countdown'>{props.children || endAt}</div>;
  }

  return (
    <div className={`ui flip-countdown theme-${theme} size-${size}`}>
      {!hideYear && getPiece(clock.year)}
      {!hideMonth && getPiece(clock.month)}
      {!hideDay && getPiece(clock.day)}
      {!hideHour && getPiece(clock.hour)}
      {!hideMinute && getPiece(clock.minute)}
      {!hideSecond && getPiece(clock.second)}
    </div>
  );
};

export default CountdownClock;
