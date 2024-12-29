export interface ApiResponse {
  message: string;
  userData: UserData;
}

export interface UserData {
  city: string;
  email: string;
  isVerified: boolean;
  isWorker: boolean;
  phoneNumber: string;
  profilePicture: string;
  state: string;
  totalPointsEarned: number;
  userDescription: string;
  username: string;
  wasteDumped: any[]; // You might want to define a type for wasteDumped if it has a specific structure
}