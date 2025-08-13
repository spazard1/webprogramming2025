import { useEffect, useMemo, useRef } from "react";

import "./Home.css";

const Home = () => {
  const earlyTeamRef = useRef();
  const middleTeamRef = useRef();
  const lateTeamRef = useRef();
  const scrollRef = useRef();
  earlyTeamRef.current = 1;
  middleTeamRef.current = 2;
  lateTeamRef.current = 3;

  const schedules = useMemo(
    () => [
      {
        date: "September 2",
        lectures: ["HTML/CSS/Javascript/JSON"],
      },
      {
        date: "September 9",
        lectures: ["Web Requests"],
        assignment: {
          url: "/assignments/HTMLCSSJavascript",
          title: "HTML/CSS/Javascript",
        },
      },
      {
        date: "September 16",
        lectures: ["Web API"],
        assignment: {
          url: "/assignments/WebRequests",
          title: "Web Requests",
        },
      },
      {
        date: "September 23",
      },
      {
        date: "September 30",
      },
      {
        date: "October 7",
      },
      {
        date: "October 14",
      },
      {
        date: "October 21",
      },
      {
        date: "October 28",
      },
      {
        date: "November 4",
      },
      {
        date: "November 11",
      },
      {
        date: "November 18",
      },
      {
        date: "November 25",
      },
      {
        date: "December 2",
      },
      {
        date: "December 9",
      },
      {
        date: "December 16",
      },
    ],
    []
  );

  const now = new Date();
  const currentYear = now.getFullYear();
  const closest = schedules.reduce((closestItem, item) => {
    const itemDate = new Date(item.date + " " + currentYear);

    if (itemDate <= now) {
      return closestItem;
    }

    if (
      !closestItem ||
      itemDate - now < new Date(closestItem.date + " " + currentYear) - now
    ) {
      return item;
    }

    return closestItem;
  }, null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "instant",
        block: "center",
      });
    }
  }, []);

  return (
    <>
      <div className="classSchedulesContainer">
        {schedules.map((schedule) => (
          <div className="classScheduleItem" key={schedule.date}>
            <div
              ref={schedule === closest ? scrollRef : null}
              className="classScheduleHeader"
            >
              <div className="classDate">{schedule.date}</div>
            </div>
            <div className="classScheduleContent">
              {schedule?.lectures?.map((lecture, index) => (
                <div className="lectureTitle" key={index}>
                  <span>Lecture - </span>
                  {typeof lecture === "string" && <>{lecture}</>}
                  {typeof lecture !== "string" && (
                    <a href={lecture.url}>{lecture.title}</a>
                  )}
                </div>
              ))}
              {schedule.assignment && (
                <div className="scheduleAssignmentContainer">
                  <span>Assignment Due - </span>
                  <a href={schedule.assignment.url}>
                    {schedule.assignment.title}
                  </a>
                </div>
              )}
              {schedule.links?.map((link) => (
                <div key={link} className="lectureNotesLink">
                  <a href={typeof link === "string" ? link : link.url}>
                    {link.title ? link.title : "Slides"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
