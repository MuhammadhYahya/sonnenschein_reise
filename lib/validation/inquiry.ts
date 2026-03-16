export type InquiryFormValues = {
  fullName: string;
  email: string;
  phone?: string;
  requestedTourId?: string;
  requestedDuration?: string;
  travelerCount?: number;
  travelMonth?: string;
  message: string;
};

export const inquiryFieldRules = {
  fullName: "Required. Use the traveler's full name.",
  email: "Required. Must be a valid email address.",
  phone: "Optional. Helpful for manual follow-up.",
  requestedTourId: "Optional. Attach to a tour when inquiry starts from a package page.",
  requestedDuration: "Optional. Useful for custom itinerary requests.",
  travelerCount: "Optional. Should be a positive whole number.",
  travelMonth: "Optional. Store as YYYY-MM when possible.",
  message: "Required. Keep the raw traveler message for staff review.",
} as const;
