interface Id {
  id: number
}

export interface Image {
  fileName: string
  authorName: string
  authorLink: string
  platformName: string
  platformLink: string
}

export interface TreatmentsProps extends Id {
  name: string
  durationInMinutes: number
  image: Image
  description: string
}

export interface IStaff extends Id {
  name: string;
  treatmentNames: string[];
  image: Image;
}

export interface NewUser {
  email: string;
  name?: string;
  address?: string;
  phone?: string;
  token?: string;
}

export interface Appointment extends Id {
  dateTime: Date;
  treatmentName: string;
  userId: number
}

export type User = NewUser & Id;

