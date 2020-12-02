import {ImageSourcePropType} from 'react-native';
import {Images} from '../assets';

export interface Card {
  id: string;
  bgUrl: string;
  logo: ImageSourcePropType;
  title: string;
  description: string;
}

export const cardsList: Card[] = [
  {
    id: '1',
    bgUrl:
      'https://images.unsplash.com/photo-1562527340-527317c2a53b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80',
    logo: Images.stranger,
    title: 'Stranger Things',
    description:
      'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
  },
  {
    id: '2',
    bgUrl: 'https://scx2.b-cdn.net/gfx/news/hires/2019/1-thebigbangth.jpg',
    logo: Images.bigBangTheory,
    title: 'Friends',
    description:
      'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
  },
  {
    id: '3',
    bgUrl:
      'https://images.unsplash.com/photo-1600885094287-94258fe8a91c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2165&q=80',
    logo: Images.friends,
    title: 'Friends',
    description:
      'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.',
  },
];
