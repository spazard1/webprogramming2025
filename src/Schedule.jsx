import { useMemo } from "react";

import "./Schedule.css";

const Schedule = () => {
  const schedules = useMemo(
    () => [
      {
        date: "September 2",
        lectures: ["HTML/CSS/Javascript/JSON"],
      },
      {
        date: "September 9",
        announcement: "No class - Steven out of town",
      },
      {
        date: "September 16",
        lectures: ["Web Requests"],
        assignment: {
          url: "/assignments/HTMLCSSJavascript",
          title: "HTML/CSS/Javascript",
        },
      },
      {
        date: "September 23",
        lectures: ["Web API"],
        assignment: {
          url: "/assignments/WebRequests",
          title: "Web Requests",
        },
      },
      {
        date: "September 30",
        lectures: ["Dependency Injection"],
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
    <div>
      <div className="title">Schedule</div>

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
                        {typeof lecture === "string" && <>{lecture}</>}
                        {typeof lecture !== "string" && (
                          <a href={lecture.url}>{lecture.title}</a>
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
