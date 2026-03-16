export type InquiryStatus =
  | "new"
  | "reviewed"
  | "contacted"
  | "qualified"
  | "closed";

export type BookingStatus =
  | "draft"
  | "pending"
  | "confirmed"
  | "cancelled"
  | "completed";

export type StaffRole = "owner" | "admin" | "agent" | "editor";

export type InquiryRecord = {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  preferredLanguage?: "EN" | "DE";
  requestedTourId?: string;
  requestedDuration?: string;
  travelerCount?: number;
  travelMonth?: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
};

export type TravelerRecord = {
  id: string;
  bookingId: string;
  fullName: string;
  birthDate?: string;
  passportNumber?: string;
};

export type BookingRecord = {
  id: string;
  inquiryId?: string;
  tourId: string;
  departureId?: string;
  status: BookingStatus;
  leadTravelerName: string;
  leadTravelerEmail: string;
  travelerCount: number;
  totalAmount: number;
  currency: "USD" | "EUR";
  createdAt: string;
};

export type AdminDashboardSnapshot = {
  openInquiries: number;
  pendingBookings: number;
  confirmedBookings: number;
  recentInquiries: InquiryRecord[];
  recentBookings: BookingRecord[];
};
