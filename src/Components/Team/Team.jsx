import React from "react";
import { teamsData } from "../../Common/Data";

const Team = () => {
  return (
    <React.Fragment>
      <p className="sections_heading" id="team">
        Meet the team
      </p>
      <div className="flex flex-wrap justify-around my-5">
        {teamsData?.map((item, index) => (
          <div key={index} className="w-80">
            <img src={item.image} className="w-80 h-96 rounded" />
            <p className="h2 text-center text-orange-800">{item.name}</p>
            <p className="h3 text-center text-orange-700">{item.designation}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Team;
