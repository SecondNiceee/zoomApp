import React from "react";
import FirstBlock from "../FirstMain/FirstBlock";
import FullDescription from "./FullDescription"
import Dedline from './Dedline'
import Status from './Status'
import Customer from './Customer'
const TaskDetailsContainer = ({orderInformation}) => {
  return (
    <div className="Task__container-one">
      <FirstBlock {...orderInformation} isButton = {false} />
      <FullDescription fullDescription={orderInformation.fullDescription} />
      <Dedline dedline={orderInformation.dedline} />
      <div className="TaskDetails-row">
        <Customer rate={orderInformation.rate} customerName={orderInformation.customerName} />
        <Status isActive={orderInformation.isActive} />
      </div>
    </div>
  );
};

export default TaskDetailsContainer;
