import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  city: { type: String, required: true },
  property: { type: String, required: true },
  company: { type: String, required: true },
  plateNumber: { type: String, required: true },
});

const visitorModel = mongoose.model("Visitor", VisitorSchema);

export default visitorModel;
