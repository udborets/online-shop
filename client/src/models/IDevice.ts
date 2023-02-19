export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: [
    {
      id: number;
      title: string;
      description: string;
    }
  ];
}
