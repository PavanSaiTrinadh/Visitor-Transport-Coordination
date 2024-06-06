import mongoose from "mongoose";
// This schema includes details about the rides offered by employees.
const RideSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    picturePath: {
      type: String,
      default: " ",
    },
    visitorId: String,
    availableSeats: Number,
    vehicleType: String,
    departureTime: String,
    startPoint: string,
    endPoint: string,
    pickupPoint: string,
  },
  { timestamps: true }
);

const Ride = mongoose.model("Ride", RideSchema);
export default Ride;