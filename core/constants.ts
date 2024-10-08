import images from '@/constants/Images';
import {TFlatListItem} from '@/core/types/ui';
import {TUser} from '@/core/types/data';

export const home_items: TFlatListItem[] = [
  {
    type: 'chips',
    data: [
      {text: 'تخفیف‌های ویژه‌ی امروز', link: ''},
      {text: 'پرفروش‌های ماه', link: ''},
      {text: 'کتاب‌های رایگان', link: ''},
      {text: 'کتاب برای شما', link: ''},
      {text: 'کتاب‌های صوتی', link: ''},
    ],
  },
  {
    type: 'banner',
    data: {
      text: ['تا ٪۵۰ تخفیف،', 'ویژه همه‌ی کتاب‌ها', 'با کد book50'],
      image: images.bannerOff,
      button: {
        text: 'مشاهده کتاب‌ها',
        onPress: e => {},
      },
    },
  },
  {
    type: 'list',
    data: {
      title: 'تازه‌های برگزیده',
      showMore: () => {},
      books: [
        {
          type: 'audio',
          off: 0,
          title: 'نشخوار رویاها',
          price: 252000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 0,
          title: 'بادیگارد',
          price: 53000,
          rate: 3.9,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 0,
          title: 'آنچه انتظار داریم رخ می‌دهد',
          price: 70000,
          rate: 0,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 50,
          title: 'رهایی، طریقت تسلیم',
          price: 45000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'audio',
          off: 30,
          title: 'هفت جن',
          price: 74000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'audio',
          off: 0,
          title: 'سمفونی مردگان (اجرای جدید)',
          price: 130000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 30,
          title: 'ایران در جنگ',
          price: 150000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 0,
          title: 'چگونه برای اولویت‌ها برنامه‌ریزی کنیم',
          price: 45000,
          rate: 0,
          image: 'https://placehold.co/125x175',
        },
      ],
    },
  },
  {
    type: 'list',
    data: {
      background: {color: '#5B6288', image: images.bookListBackground},
      title: 'بهترین‌ها را با نصف قیمت بخوانید!',
      subtitle: 'بهترین‌های داستانی، فلسفی، روانشناسی و ...',
      showMore: () => {},
      books: [
        {
          type: 'audio',
          off: 0,
          title: 'نشخوار رویاها',
          price: 252000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 0,
          title: 'بادیگارد',
          price: 53000,
          rate: 3.9,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 0,
          title: 'آنچه انتظار داریم رخ می‌دهد',
          price: 70000,
          rate: 0,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 50,
          title: 'رهایی، طریقت تسلیم',
          price: 45000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'audio',
          off: 30,
          title: 'هفت جن',
          price: 74000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'audio',
          off: 0,
          title: 'سمفونی مردگان (اجرای جدید)',
          price: 130000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 30,
          title: 'ایران در جنگ',
          price: 150000,
          rate: 4.5,
          image: 'https://placehold.co/125x175',
        },
        {
          type: 'text',
          off: 0,
          title: 'چگونه برای اولویت‌ها برنامه‌ریزی کنیم',
          price: 45000,
          rate: 0,
          image: 'https://placehold.co/125x175',
        },
      ],
    },
  },
];

export const userMock: TUser = {
  first_name: 'احسان',
  last_name: 'قربانی',
  email: 'ehsanghorbani190@gmail.com',
  phone: '09156646936',
};
