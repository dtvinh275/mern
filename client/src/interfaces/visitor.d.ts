import { BaseKey } from "@refinedev/core";

export interface FormFieldVisitor {
  fullName: string;
  plateNumber: string;
}

export interface FormVisitorValues {
  fullName: string;
  phoneNumber: string;
  city: string;
  property: string;
  company: string;
  plateNumber: string;
}

export interface VisitorCardProps {
  id?: BaseKey | undefined;
  fullName: string;
  phoneNumber: string;
  city: string;
  property: string;
  company: string;
  plateNumber: string;
}

// import { BaseKey } from "@refinedev/core";

// export interface VisitorCardProps {
//   id?: BaseKey | undefined;
//   fullName: string;
//   phoneNumber: string;
//   city: string;
//   property: string;
//   company: string;
//   plateNumber: string;
// }

// export interface InfoBarProps {
//   icon: ReactNode;
//   fullName: string;
//   plateNumber: string;
// }
