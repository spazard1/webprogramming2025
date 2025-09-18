import "./OfficeHours.css";

const StretchLevels = () => {
  return (
    <div className="contentContainer">
      <div className="officeHoursContainer">
        <div className="title">Office Hours</div>

        <div>
          Office hours are on Fridays at 1:30pm-2:00pm CST and are hosted online
          with Microsoft Teams.
        </div>
        <div>
          Use these details to join the meeting:
          <br />
          <a
            href="https://teams.microsoft.com/meet/2174900691214?p=aq6FJAYVhsXpAEayPP"
            target="_blank"
          >
            https://teams.microsoft.com/meet/2174900691214?p=aq6FJAYVhsXpAEayPP
          </a>
          <br />
          Meeting ID: 217 490 069 121 4
          <br />
          Passcode: H2Jn3FK2
        </div>
      </div>
    </div>
  );
};

export default StretchLevels;
