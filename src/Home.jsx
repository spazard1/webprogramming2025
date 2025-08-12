import { useEffect, useMemo, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";

import "./Home.css";

//const baseGithubUrl =
//  "https://github.com/spazard1/softwareprocess2025/raw/refs/heads/main/files/";

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
        date: "February 4",
      },
      {
        date: "February 11",
      },
      {
        date: "February 18",
      },
      {
        date: "February 25",
      },
      {
        date: "March 4",
      },
      {
        date: "March 11",
      },
      {
        date: "March 25",
      },
      {
        date: "April 1",
      },
      {
        date: "April 8",
      },
      {
        date: "April 15",
      },
      {
        date: "April 22",
      },
      {
        date: "April 29",
      },
      {
        date: "May 6",
      },
      {
        date: "May 13",
      },
      {
        date: "May 20",
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
      <div className="title">Bethel Web Programming 2025</div>

      {schedules.map((schedule) => (
        <Accordion
          key={schedule.date}
          className="scheduleContainer"
          data-bs-theme="dark"
          defaultActiveKey={
            new Date(Date.parse(schedule.date + " 2025 23:00")) > new Date()
              ? "1"
              : ""
          }
        >
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div
                ref={schedule === closest ? scrollRef : null}
                className="classScheduleHeader"
              >
                <div className="classDate">{schedule.date}</div>
                {schedule.tags?.map((tag) => (
                  <div className={"roundedTag " + tag.type} key={tag.title}>
                    {tag.title}
                  </div>
                ))}
              </div>
            </Accordion.Header>
            {schedule.slots && (
              <Accordion.Body>
                {schedule.slots?.map((slot, index) => (
                  <div className="classScheduleItem" key={index}>
                    <div className="classScheduleItemTime">{slot.time}</div>
                    {slot.title && (
                      <div className="lectureTitle">{slot.title}</div>
                    )}
                    {slot.link && (
                      <div className="lectureNotesLink">
                        <a
                          href={
                            typeof slot.link === "string"
                              ? slot.link
                              : slot.link.url
                          }
                        >
                          {slot.link.title ? slot.link.title : "Slides"}
                        </a>
                      </div>
                    )}
                    {slot.links?.map((link) => (
                      <div key={link} className="lectureNotesLink">
                        <a href={typeof link === "string" ? link : link.url}>
                          {link.title ? link.title : "Slides"}
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </Accordion.Body>
            )}
          </Accordion.Item>
        </Accordion>
      ))}
    </>
  );
};

export default Home;
