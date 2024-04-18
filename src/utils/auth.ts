import axiosInstance from './axiosInstance';

export interface SocialProfile {
  uid: number;
  email: string;
  name: string;
  thumbnail: string;
  username: string;
}

export const getSocialProfile = async () => {
  const response = await axiosInstance.get<SocialProfile>('/auth/social/profile');
  return response.data;
};
