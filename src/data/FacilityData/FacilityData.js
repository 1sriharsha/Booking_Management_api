// TODO Get Facilities from Database
import axios from "axios";
const {
  REACT_APP_LOCAL_URL,
  REACT_APP_PRODUCTION_URL,
  REACT_APP_CLIENT_ID,
  REACT_APP_API_KEY,
} = process.env;
var FacilityData = [];
var api_url;
if (process.env.NODE_ENV === "production") {
  api_url = REACT_APP_PRODUCTION_URL;
  //console.log(api_url)
} else {
  api_url = REACT_APP_LOCAL_URL;
  //console.log(api_url)
}

axios({
  method: "GET",
  headers: {
    "Access-Control-Allow-Origin": api_url,
  },
  withCredentials: true,
  url: api_url + "/facilities/",
})
  .then((res) => {
    if (res.status === 200 || res.status === 304) {
      //console.log(res.data)
      let counter = 1;
      for (let temp of res.data) {
        //console.log(temp)
        const facData = {
          id: counter,
          facilityName: temp.facilityName,
          facilityLocation:
            temp.facilityLocation.city + "," + temp.facilityLocation.state,
          facilitySport: temp.facilitySports,
          facilityInfo: temp.facilityInformation,
          availableNow: false,
          reservationPeriodStart: parseInt(temp.reservationPeriodStart),
          reservationPeriodEnd: parseInt(temp.reservationPeriodEnd),
        };
        counter = counter + 1;
        //console.log(facData)
        FacilityData.push(facData);
      }
    }
    console.log(FacilityData);
  })
  .catch(function (err) {
    console.log(err);
    if (err.response) {
      if (err.response.status === 404) {
        console.log("Couldn't retrieve facilities");
      }
    } else if (err.request) {
      //Response not received from API
      console.log("Error: ", err.request);
    } else {
      //Unexpected Error
      console.log("Error", err.message);
    }
  });

const FacilityData3 = [
  {
    id: 1, // Primary Key
    facilityName: "Student Recreational Sports Center", // Recreation Center Name
    facilityLocation: "Bloomington, IN", // Recreation Center Location
    facilitySport: "Soccer", // Field/Court Type
    facilityInfo: "Soccer Field #02", // Field/Court Description
    availableNow: true, // Is the field/court not reserved during the current hour
    reservationPeriodStart: 6, // What time does the Recreation Center start accepting reservations
    reservationPeriodEnd: 17, // What time does the Recreation Center stop accepting reservations
  },
  {
    id: 2,
    facilityName: "Student Recreational Sports Center",
    facilityLocation: "Bloomington, IN",
    facilitySport: "Basketball",
    facilityInfo: "Basketball Court #01",
    availableNow: false,
    reservationPeriodStart: 6,
    reservationPeriodEnd: 21,
  },
  {
    id: 3,
    facilityName: "Student Recreational Sports Center",
    facilityLocation: "Bloomington, IN",
    facilitySport: "Volleyball",
    facilityInfo: "Volleyball Court #01",
    availableNow: false,
    reservationPeriodStart: 11,
    reservationPeriodEnd: 15,
  },
  {
    id: 4,
    facilityName: "Student Recreational Sports Center",
    facilityLocation: "Bloomington, IN",
    facilitySport: "Table Tennis",
    facilityInfo: "Table Tennis Table #05",
    availableNow: false,
    reservationPeriodStart: 5,
    reservationPeriodEnd: 22,
  },
  {
    id: 5,
    facilityName: "Student Recreational Sports Center",
    facilityLocation: "Bloomington, IN",
    facilitySport: "Squash",
    facilityInfo: "Squash Court #03",
    availableNow: true,
    reservationPeriodStart: 13,
    reservationPeriodEnd: 18,
  },
  {
    id: 6,
    facilityName: "Student Recreational Sports Center",
    facilityLocation: "Bloomington, IN",
    facilitySport: "Badminton",
    facilityInfo: "Badminton Court #01",
    availableNow: false,
    reservationPeriodStart: 15,
    reservationPeriodEnd: 19,
  },
  {
    id: 7,
    facilityName: "France A. Córdova Recreational Sports Center",
    facilityLocation: "West Lafayette, IN",
    facilitySport: "Volleyball",
    facilityInfo: "Volleyball Court C",
    availableNow: false,
    reservationPeriodStart: 9,
    reservationPeriodEnd: 15,
  },
  {
    id: 8,
    facilityName: "France A. Córdova Recreational Sports Center",
    facilityLocation: "West Lafayette, IN",
    facilitySport: "Soccer",
    facilityInfo: "Soccer Field A",
    availableNow: false,
    reservationPeriodStart: 12,
    reservationPeriodEnd: 18,
  },
  {
    id: 9,
    facilityName: "University Of Colorado Boulder Recreation Center",
    facilityLocation: "Boulder, CO",
    facilitySport: "Basketball",
    facilityInfo: "Basketball Court 1001",
    availableNow: false,
    reservationPeriodStart: 13,
    reservationPeriodEnd: 19,
  },
  {
    id: 10,
    facilityName: "Smith Center for Recreational Sports",
    facilityLocation: "Notre Dame, IN",
    facilitySport: "Squash",
    facilityInfo: "Squash Court 1A",
    availableNow: false,
    reservationPeriodStart: 15,
    reservationPeriodEnd: 18,
  },
  {
    id: 11,
    facilityName: "UCLA REC",
    facilityLocation: "Los Angeles, CA",
    facilitySport: "Badminton",
    facilityInfo: "Badminton Court #004",
    availableNow: false,
    reservationPeriodStart: 15,
    reservationPeriodEnd: 18,
  },
];

console.log(FacilityData3);

export default FacilityData;
