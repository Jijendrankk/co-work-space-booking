import React, { Component } from "react";
import LeadCards from "./LeadCards";
import Select from "react-select";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "./index.scss";

class LandingPage extends Component {
  state = {
    colourStyles: {
      control: styles => ({
        ...styles,
        width: "100%",
        cursor: this.props.disable ? "not-allowed" : "pointer"
      }),
      option: styles => ({ ...styles, width: "100%" }),
      menu: styles => ({ ...styles, width: "100%", zIndex: 1000 }),
      input: styles => ({ ...styles, width: "100%" })
    },
    cityOptions: [
      { label: "Bengaluru", value: "Bengaluru" },
      { label: "Chennai", value: "Chennai" },
      { label: "abc", value: "abc" }
    ],
    categoryOptions: [
      { label: "private cabin", value: "private cabin" },
      { label: "co-working", value: "co-working" },
      { label: "managed", value: "managed" }
    ],
    selectedDate: new Date("0" - "00" - "0000")
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <div className="landing-container">
        <div className="search-block">
          <div className="city-block">
            <Select
              className="basic-single"
              isDisabled={false}
              placeholder={"City"}
              isClearable={true}
              styles={this.state.colourStyles}
              isSearchable={true}
              name="color"
              options={this.state.cityOptions}
            />
          </div>
          <div className="category-block">
            <Select
              className="basic-single"
              isDisabled={false}
              placeholder={"Category"}
              isClearable={true}
              styles={this.state.colourStyles}
              isSearchable={true}
              name="color"
              options={this.state.categoryOptions}
            />
          </div>
          <div className="date-block">
            <MuiPickersUtilsProvider
              utils={DateFnsUtils}
              className="data-picker-block"
            >
              <KeyboardDatePicker
                id="date-picker-dialog"
                label="Select date"
                format="dd-mm-yyyy"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
        <div className="total-lead-main-container">
          <LeadCards />
          <LeadCards />
          <LeadCards />
        </div>
      </div>
    );
  }
}

export default LandingPage;
