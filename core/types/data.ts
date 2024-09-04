export type TBookType = 'audio' | 'text';
export type TBook = {
  title: string;
  rate: number;
  image: any;
  off: number;
  type: TBookType;
  price: number;
};

export type TUser = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};
