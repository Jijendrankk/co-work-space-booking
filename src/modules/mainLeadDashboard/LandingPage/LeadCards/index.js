import React, { useState } from "react";
import hsImg from "../../../../assets/springboard.png";
import LabelCard from "../../../../shared/Components/LabelCard";
import ScrollDialog from "../../../../shared/Components/ScrollDialog";
import "./index.scss";
const LeadCards = (props) => {
  const { locations, workSpaceImg } = props;
  const [areaList, setAreaList] = useState([
    "Bengaluru",
    "Koramangala 4th Block",
  ]);
  const [showViewModal, setShowViewModal] = useState(false);
  const renderModal = () => () => {
    setShowViewModal(true);
  };
  const handleScrollDialogClose = () => () => {
    setShowViewModal(false);
  };
  return (
    <div
      className={
        areaList.length < 3
          ? "lead-card-container"
          : "lead-card-container lead-card-container-height-lg"
      }
    >
      <div className="locations-and-workspace-block">
        <div className="locations-and-workspace-verify-block">
          <div className="verify-block">
            <img src={hsImg} className="verify-img" />
            <span className="verify-label">Verified Lead</span>
          </div>
          <div className="expiriy-block">
            <img src={hsImg} className="verify-img" />
            <span className="verify-label">Expiring Soon</span>
          </div>
        </div>
        <div className="location-block">
          <div className="location-label">Location</div>
          <div className="location-and-area-block">
            <img src={hsImg} className="verify-img" />
            <div className="area-list-block">
              {areaList.map((area) => (
                <LabelCard
                  label={area}
                  background={"#CFF3F3"}
                  margin={"2% 0% 2% 5%"}
                  fontSize={window.innerWidth > "950" ? "17px" : "10px"}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="workspace-block">
          <div className="workspace-label">Workspace Type</div>
          <img src={hsImg} className="workspace-type-img" />
        </div>
      </div>
      <div className="lead-divider"></div>
      <div className="seats-and-lead-details">
        <div className="view-and-claim-details">
          <LabelCard
            label={"Claim Lead"}
            background={"#3073C7"}
            //margin={"1% 0% 1% 5%"}
            color={"#ffffff"}
            fontSize={"12px"}
            cursor={"pointer"}
          />
          <div className="view-lead-details" onClick={renderModal()}>
            View lead details
          </div>
        </div>
        <div className="available-seats-data-container">
          <img src={hsImg} className="seat-img" />
          <div className="seats-available-label-block">
            <span className="number-of-seats-label">Number of Seats:</span>
            <LabelCard
              label={"Starting"}
              background={"#CFF3F3"}
              //margin={"1% 0% 1% 5%"}
              fontSize={window.innerWidth > "950" ? "17px" : "10px"}
            />
          </div>
          <div className="available-seats-count">07</div>
        </div>
        <div className="available-seats-data-container">
          <img src={hsImg} className="seat-img" />
          <div className="seats-available-label-block">
            <span className="number-of-seats-label">Number of Seats:</span>
            <LabelCard
              label={"Eventually"}
              background={"#CFF3F3"}
              //margin={"1% 0% 1% 5%"}
              fontSize={window.innerWidth > "950" ? "17px" : "10px"}
            />
          </div>
          <div className="available-seats-count">21</div>
        </div>
        <div className="summary-block">
          <div className="summary-label">Summary</div>
          <div className="seats-details">
            7 Seater dedicated desks to be extended to 21 seats over next 6
            months
          </div>
        </div>
      </div>
      <ScrollDialog
        scrollDialogTitle={"Lead Details"}
        scrollDialogOpen={showViewModal}
        handleScrollDialogClose={handleScrollDialogClose()}
      >
        <div className="view-lead-container">
          <div className="view-lead-block">
            <div className="view-lead-inner-label">Name</div>
            <div>:</div>
            <div className="view-lead-inner-detail">My Name</div>
          </div>
        </div>
      </ScrollDialog>
    </div>
  );
};

export default LeadCards;
