/* eslint-disable react/no-unescaped-entities */
import { useMemo } from "react";

import "./Schedule.css";

const Schedule = () => {
  const schedules = useMemo(
    () => [
      {
        date: "September 2",
        lectures: [
          {
            title: "HTML/CSS/Javascript/JSON",
            url: "https://youtu.be/N8d32ay-aFo",
          },
        ],
      },
      {
        date: "September 9",
        announcement: "No class - Steven out of town",
      },
      {
        date: "September 16",
        lectures: [
          {
            title: "Web Requests",
            url: "https://www.youtube.com/watch?v=IsGLJ-MIpY4",
          },
          {
            title: "Web Requests",
            url: "https://www.youtube.com/watch?v=w-lFWoSVero",
          },
        ],
        assignment: {
          url: "/assignments/HTMLCSSJavascript",
          title: "HTML/CSS/Javascript",
        },
      },
      {
        date: "September 23",
        lectures: [
          {
            title: "Web API",
            url: "https://youtu.be/ujFlwsut_W8",
          },
          {
            title: "Web API",
            url: "https://youtu.be/9wNW8DBJE68",
          },
        ],
        assignment: {
          url: "/assignments/WebRequests",
          title: "Web Requests",
        },
      },
      {
        date: "September 30",
        lectures: [
          {
            title: "Dependency Injection",
            url: "https://youtu.be/QQ_nNbOP1dE",
          },
          {
            title: "Dependency Injection",
            url: "https://youtu.be/duo6CwwvVi0",
          },
        ],
        assignment: {
          url: "/assignments/WebApi",
          title: "Web API",
        },
      },
      {
        date: "October 7",
        lectures: ["TFH async/await"],
        assignment: {
          url: "/assignments/DependencyInjection",
          title: "Dependency Injection",
        },
      },
      {
        date: "October 14",
        lectures: ["React"],
        assignment: {
          url: "/assignments/TFHAsyncAwait",
          title: "TFH async/await",
        },
      },
      {
        date: "October 21",
        lectures: ["Queues"],
        assignment: {
          url: "/assignments/React",
          title: "React",
        },
      },
      {
        date: "October 28",
        lectures: ["Cloud Storage"],
        assignment: {
          url: "/assignments/Queues",
          title: "Queues",
        },
      },
      {
        date: "November 4",
        lectures: ["If-Match"],
        assignment: {
          url: "/assignments/CloudStorage",
          title: "Cloud Storage",
        },
      },
      {
        date: "November 11",
        lectures: ["API Versioning"],
        assignment: {
          url: "/assignments/IfMatch",
          title: "If-Match",
        },
      },
      {
        date: "November 18",
        lectures: ["JWT"],
        assignment: {
          url: "/assignments/APIVersioning",
          title: "API Versioning",
        },
      },
      {
        date: "November 25",
        lectures: ["Immutable Stack"],
      },
      {
        date: "December 2",
        lectures: ["Responsive Design"],
        assignment: {
          url: "/assignments/JWT",
          title: "JWT",
        },
      },
      {
        date: "December 9",
        lectures: ["Logging", "Final Exam Review"],
        assignment: {
          url: "/assignments/ResponsiveDesign",
          title: "Responsive Design",
        },
      },
      {
        date: "December 16",
        announcement: "Final Exam",
      },
    ],
    []
  );

  return (
    <div className="contentContainer">
      <div className="title">Schedule</div>
      <div className="lectureCodeHeader">
        All lecture code is available at{" "}
        <a
          href="https://github.com/spazard1/webprogramming2025"
          target="_blank"
        >
          github.com/spazard1/webprogramming2025
        </a>{" "}
        in the "Lectures" folder. Lecture recordings are available as a{" "}
        <a
          href="https://www.youtube.com/playlist?list=PLar83IIzEy4qLw_guP9xIeQXolyaEqRVm"
          target="_blank"
        >
          YouTube playlist
        </a>{" "}
        or linked directly in the schedule on this page.
      </div>

      <div className="classSchedulesContainer">
        {schedules.map((schedule) => (
          <div className="classScheduleItem" key={schedule.date}>
            <div className="classScheduleHeader">
              <div className="classDate">{schedule.date}</div>
            </div>
            <div className="classScheduleContent">
              {schedule.lectures?.length > 0 && (
                <div className="lecturesContainer">
                  <span>Lecture - </span>
                  <div className="lecturesLinksContainer">
                    {schedule?.lectures?.map((lecture, index) => (
                      <div key={index}>
                        {index === 0 && (
                          <>
                            {typeof lecture === "string" && <>{lecture}</>}
                            {typeof lecture !== "string" && (
                              <a href={lecture.url} target="_blank">
                                {lecture.title}
                              </a>
                            )}
                          </>
                        )}
                        {index > 0 && (
                          <>
                            {typeof lecture === "string" && <>{lecture}</>}
                            {typeof lecture !== "string" && (
                              <a href={lecture.url} target="_blank">
                                Part {index + 1}
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {schedule.assignment && (
                <div className="scheduleAssignmentContainer">
                  <span>Assignment Due - </span>
                  <a href={schedule.assignment.url}>
                    {schedule.assignment.title}
                  </a>
                </div>
              )}
              {schedule.announcement && (
                <div className="scheduleAnnouncementContainer">
                  {schedule.announcement}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
