import { Product } from '../models/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 128GB',
    description: 'Apple iPhone 15 с отличной камерой и экраном.',
    price: 399990,
    rating: 5,
    categoryId: 1,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-f/wc1000/7669840299.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-f/wc1000/7669840227.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-6/wc1000/7669840218.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-n/7034086715.jpg'
    ]
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    description: 'Флагман Samsung с мощной камерой.',
    price: 449990,
    rating: 5,
    categoryId: 1,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116004286/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-b/wc1000/7361995727.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-i/wc1000/7149034854.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-y/wc1000/7148915422.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-z/wc1000/7148915459.jpg'
    ]
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 13 Pro',
    description: 'Большой экран и отличная батарея.',
    price: 129990,
    rating: 4,
    categoryId: 1,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-118366848/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-r/wc1000/7456597011.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/7456596701.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-9/wc1000/7456596777.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-t/wc1000/7456596761.jpg'
    ]
  },
  {
    id: 4,
    name: 'Google Pixel 8',
    description: 'Чистый Android и отличная камера.',
    price: 359990,
    rating: 5,
    categoryId: 1,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116004286/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-b/wc1000/7361995727.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-i/wc1000/7149034854.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-y/wc1000/7148915422.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-z/wc1000/7148915459.jpg'
    ]
  },
  {
    id: 5,
    name: 'POCO X6 Pro',
    description: 'Мощный смартфон для игр.',
    price: 179990,
    rating: 4,
    categoryId: 1,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116004286/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-b/wc1000/7361995727.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-i/wc1000/7149034854.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-y/wc1000/7148915422.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-z/wc1000/7148915459.jpg'
    ]
  },

  {
    id: 6,
    name: 'Lenovo IdeaPad 3',
    description: 'Отличный ноутбук для учёбы.',
    price: 299990,
    rating: 4,
    categoryId: 2,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-113362115/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-p/wc1000/8926695133.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-h/wc1000/8926797617.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-v/wc1000/8926797631.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-e/wc1000/8926797650.jpg'
    ]
  },
  {
    id: 7,
    name: 'MacBook Air M1',
    description: 'Лёгкий и мощный ноутбук Apple.',
    price: 599990,
    rating: 5,
    categoryId: 2,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-113362115/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-p/wc1000/8926695133.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-h/wc1000/8926797617.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-v/wc1000/8926797631.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-e/wc1000/8926797650.jpg'
    ]
  },
  {
    id: 8,
    name: 'ASUS VivoBook 15',
    description: 'Стильный ноутбук для работы.',
    price: 349990,
    rating: 4,
    categoryId: 2,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-113362115/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-p/wc1000/8926695133.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-h/wc1000/8926797617.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-v/wc1000/8926797631.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-e/wc1000/8926797650.jpg'
    ]
  },
  {
    id: 9,
    name: 'HP Pavilion 15',
    description: 'Надёжный ноутбук для дома.',
    price: 329990,
    rating: 4,
    categoryId: 2,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-113362115/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-p/wc1000/8926695133.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-h/wc1000/8926797617.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-v/wc1000/8926797631.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-e/wc1000/8926797650.jpg'
    ]
  },
  {
    id: 10,
    name: 'Acer Aspire 5',
    description: 'Хороший баланс цены и мощности.',
    price: 279990,
    rating: 4,
    categoryId: 2,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-113362115/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-p/wc1000/8926695133.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-h/wc1000/8926797617.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-v/wc1000/8926797631.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-e/wc1000/8926797650.jpg'
    ]
  },

  {
    id: 11,
    name: 'Apple AirPods 2',
    description: 'Удобные беспроводные наушники.',
    price: 54990,
    rating: 4,
    categoryId: 3,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/apple-airpods-2-100518366/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/8844092825.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-7/wc1000/9048930631.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-p/wc1000/8844092989.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/8844092825.jpg'
    ]
  },
  {
    id: 12,
    name: 'JBL Tune 510BT',
    description: 'Лёгкие Bluetooth наушники.',
    price: 19990,
    rating: 4,
    categoryId: 3,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-101082867/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-j/wc1000/7722794287.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-j/wc1000/7722794287.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-f/wc1000/7443282327.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-u/wc1000/7722794298.jpg'
    ]
  },
  {
    id: 13,
    name: 'Sony WH-1000XM5',
    description: 'Премиальные шумоподавляющие наушники.',
    price: 189990,
    rating: 5,
    categoryId: 3,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/apple-airpods-2-100518366/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/8844092825.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-7/wc1000/9048930631.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-p/wc1000/8844092989.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/8844092825.jpg'
    ]
  },
  {
    id: 14,
    name: 'Marshall Major IV',
    description: 'Стильные наушники с отличным звуком.',
    price: 99990,
    rating: 5,
    categoryId: 3,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-101082867/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-j/wc1000/7722794287.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-j/wc1000/7722794287.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-f/wc1000/7443282327.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-u/wc1000/7722794298.jpg'
    ]
  },
  {
    id: 15,
    name: 'Xiaomi Buds 3',
    description: 'Компактные TWS-наушники.',
    price: 34990,
    rating: 4,
    categoryId: 3,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/apple-airpods-2-100518366/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/8844092825.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-7/wc1000/9048930631.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-p/wc1000/8844092989.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-5/wc1000/8844092825.jpg'
    ]
  },

  {
    id: 16,
    name: 'Logitech G102',
    description: 'Игровая мышь.',
    price: 12990,
    rating: 5,
    categoryId: 4,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/logitech-g102-101116813/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-l/wc1000/8090517405.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-l/wc1000/8090517405.jpg',
      'https://ir.ozone.ru/s3/multimedia-d/wc1000/6823326577.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-r/wc1000/7387527879.jpg'
    ]
  },
  {
    id: 17,
    name: 'Redragon Kumara',
    description: 'Механическая клавиатура.',
    price: 24990,
    rating: 4,
    categoryId: 4,
    likes: 0,
    available: false,
    link: 'https://kaspi.kz/shop/p/redragon-kumara-101006318/',
    image: 'https://ir.ozone.ru/s3/multimedia-c/wc1000/6885941628.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-c/wc1000/6885941628.jpg',
      'https://ir.ozone.ru/s3/multimedia-o/wc1000/6691977384.jpg',
      'https://ir.ozone.ru/s3/multimedia-0/wc1000/6691977396.jpg'
    ]
  },
  {
    id: 18,
    name: 'Power Bank Xiaomi 10000mAh',
    description: 'Компактный пауэрбанк.',
    price: 14990,
    rating: 4,
    categoryId: 4,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/xiaomi-power-bank-10000-100707565/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-8/wc1000/7349625944.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-8/wc1000/7349625944.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-n/wc2500/7349625923.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-2/wc2500/7238614274.jpg'
    ]
  },
  {
    id: 19,
    name: 'Apple Watch SE',
    description: 'Умные часы.',
    price: 139990,
    rating: 5,
    categoryId: 4,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/apple-watch-se-100568301/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-i/wc1000/8952544530.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-i/wc1000/8952544530.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-x/wc1000/8857332429.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-b/wc1000/8857332479.jpg'
    ]
  },
  {
    id: 20,
    name: 'Samsung Monitor 24"',
    description: 'Монитор для работы.',
    price: 89990,
    rating: 4,
    categoryId: 4,
    likes: 0,
    available: true,
    link: 'https://kaspi.kz/shop/p/samsung-monitor-24-100867238/',
    image: 'https://ir.ozone.ru/s3/multimedia-1-h/wc1000/7724884337.jpg',
    images: [
      'https://ir.ozone.ru/s3/multimedia-1-h/wc1000/7724884337.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-8/wc1000/7724885444.jpg',
      'https://ir.ozone.ru/s3/multimedia-1-1/wc1000/7546408597.jpg'
    ]
  }
];