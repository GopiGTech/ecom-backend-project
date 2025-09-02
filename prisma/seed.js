const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.review.deleteMany();
  await prisma.product.deleteMany();

  const products = [
    {
      product_title: 'Wireless Mouse',
      product_description: 'A smooth and responsive wireless mouse.',
      product_category: 'Electronics',
      price: '25.99',
      discount_percentage: '10',
      rating: '4.5',
      stock: '100',
      tags: 'mouse,wireless,computer',
      brand: 'LogiTech',
      sku: 'MOUSE123',
      weight: '0.2',
      dimensions: { length: 10, width: 6, height: 4 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Mouse',
      review: [
        {
          rating: '5',
          comment: 'Great mouse!',
          reviewer_name: 'Alice',
          reviwer_email: 'alice@example.com',
        },
        {
          rating: '4',
          comment: 'Works well, battery lasts long.',
          reviewer_name: 'Ben',
          reviwer_email: 'ben@example.com',
        },
        {
          rating: '5',
          comment: 'Very comfortable to use.',
          reviewer_name: 'Cathy',
          reviwer_email: 'cathy@example.com',
        },
      ],
    },
    {
      product_title: 'Bluetooth Headphones',
      product_description: 'Noise-cancelling over-ear headphones.',
      product_category: 'Electronics',
      price: '89.99',
      discount_percentage: '15',
      rating: '4.7',
      stock: '50',
      tags: 'headphones,bluetooth,audio',
      brand: 'SoundMagic',
      sku: 'HEAD123',
      weight: '0.4',
      dimensions: { length: 18, width: 15, height: 8 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Headphones',
      review: [
        {
          rating: '4',
          comment: 'Very comfortable.',
          reviewer_name: 'Bob',
          reviwer_email: 'bob@example.com',
        },
        {
          rating: '5',
          comment: 'Excellent sound quality.',
          reviewer_name: 'Diana',
          reviwer_email: 'diana@example.com',
        },
        {
          rating: '4',
          comment: 'Battery life is impressive.',
          reviewer_name: 'Ethan',
          reviwer_email: 'ethan@example.com',
        },
      ],
    },
    {
      product_title: 'Smart Watch',
      product_description: 'Track your fitness and notifications.',
      product_category: 'Wearables',
      price: '120.00',
      discount_percentage: '5',
      rating: '4.2',
      stock: '75',
      tags: 'watch,smart,wearable',
      brand: 'TimeTech',
      sku: 'WATCH123',
      weight: '0.1',
      dimensions: { length: 4, width: 4, height: 1 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Watch',
      review: [
        {
          rating: '4',
          comment: 'Useful features.',
          reviewer_name: 'Charlie',
          reviwer_email: 'charlie@example.com',
        },
        {
          rating: '3',
          comment: 'Screen could be brighter.',
          reviewer_name: 'Fiona',
          reviwer_email: 'fiona@example.com',
        },
        {
          rating: '5',
          comment: 'Love the fitness tracking.',
          reviewer_name: 'George',
          reviwer_email: 'george@example.com',
        },
      ],
    },
    {
      product_title: 'Gaming Keyboard',
      product_description: 'Mechanical keyboard with RGB lighting.',
      product_category: 'Electronics',
      price: '59.99',
      discount_percentage: '20',
      rating: '4.8',
      stock: '30',
      tags: 'keyboard,gaming,mechanical',
      brand: 'KeyPro',
      sku: 'KEYB123',
      weight: '0.7',
      dimensions: { length: 45, width: 15, height: 4 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Keyboard',
      review: [
        {
          rating: '5',
          comment: 'Perfect for gaming.',
          reviewer_name: 'Dave',
          reviwer_email: 'dave@example.com',
        },
        {
          rating: '5',
          comment: 'Keys feel amazing.',
          reviewer_name: 'Helen',
          reviwer_email: 'helen@example.com',
        },
        {
          rating: '4',
          comment: 'Lights are very bright.',
          reviewer_name: 'Ian',
          reviwer_email: 'ian@example.com',
        },
      ],
    },
    {
      product_title: 'USB-C Charger',
      product_description: 'Fast charging USB-C wall charger.',
      product_category: 'Accessories',
      price: '19.99',
      discount_percentage: '8',
      rating: '4.3',
      stock: '200',
      tags: 'charger,usb-c,fast',
      brand: 'ChargeIt',
      sku: 'CHARG123',
      weight: '0.15',
      dimensions: { length: 6, width: 4, height: 3 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Charger',
      review: [
        {
          rating: '4',
          comment: 'Charges quickly.',
          reviewer_name: 'Eve',
          reviwer_email: 'eve@example.com',
        },
        {
          rating: '3',
          comment: 'Gets a bit warm.',
          reviewer_name: 'Jake',
          reviwer_email: 'jake@example.com',
        },
        {
          rating: '5',
          comment: 'Compact and powerful.',
          reviewer_name: 'Karen',
          reviwer_email: 'karen@example.com',
        },
      ],
    },
    {
      product_title: 'Fitness Tracker',
      product_description: 'Monitor your health and activity.',
      product_category: 'Wearables',
      price: '49.99',
      discount_percentage: '12',
      rating: '4.1',
      stock: '120',
      tags: 'fitness,tracker,wearable',
      brand: 'FitLife',
      sku: 'FIT123',
      weight: '0.05',
      dimensions: { length: 3, width: 2, height: 1 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Tracker',
      review: [
        {
          rating: '4',
          comment: 'Tracks steps accurately.',
          reviewer_name: 'Frank',
          reviwer_email: 'frank@example.com',
        },
        {
          rating: '4',
          comment: 'Good battery life.',
          reviewer_name: 'Linda',
          reviwer_email: 'linda@example.com',
        },
        {
          rating: '3',
          comment: 'Band is a bit stiff.',
          reviewer_name: 'Mike',
          reviwer_email: 'mike@example.com',
        },
      ],
    },
    {
      product_title: 'Portable Speaker',
      product_description: 'Loud and clear portable Bluetooth speaker.',
      product_category: 'Audio',
      price: '39.99',
      discount_percentage: '18',
      rating: '4.6',
      stock: '80',
      tags: 'speaker,portable,bluetooth',
      brand: 'BoomBox',
      sku: 'SPEAK123',
      weight: '0.6',
      dimensions: { length: 20, width: 8, height: 8 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Speaker',
      review: [
        {
          rating: '5',
          comment: 'Amazing sound!',
          reviewer_name: 'Grace',
          reviwer_email: 'grace@example.com',
        },
        {
          rating: '4',
          comment: 'Easy to carry.',
          reviewer_name: 'Nina',
          reviwer_email: 'nina@example.com',
        },
        {
          rating: '5',
          comment: 'Battery lasts all day.',
          reviewer_name: 'Oscar',
          reviwer_email: 'oscar@example.com',
        },
      ],
    },
    {
      product_title: 'Laptop Stand',
      product_description: 'Ergonomic aluminum laptop stand.',
      product_category: 'Accessories',
      price: '29.99',
      discount_percentage: '7',
      rating: '4.4',
      stock: '60',
      tags: 'laptop,stand,ergonomic',
      brand: 'StandUp',
      sku: 'LAPST123',
      weight: '0.5',
      dimensions: { length: 25, width: 22, height: 5 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Stand',
      review: [
        {
          rating: '4',
          comment: 'Very sturdy.',
          reviewer_name: 'Hank',
          reviwer_email: 'hank@example.com',
        },
        {
          rating: '5',
          comment: 'Perfect height for typing.',
          reviewer_name: 'Paula',
          reviwer_email: 'paula@example.com',
        },
        {
          rating: '4',
          comment: 'Non-slip base is great.',
          reviewer_name: 'Quinn',
          reviwer_email: 'quinn@example.com',
        },
      ],
    },
    {
      product_title: '4K Monitor',
      product_description: 'Ultra HD 4K computer monitor.',
      product_category: 'Electronics',
      price: '299.99',
      discount_percentage: '10',
      rating: '4.9',
      stock: '25',
      tags: 'monitor,4k,display',
      brand: 'ViewMax',
      sku: 'MONI123',
      weight: '3.5',
      dimensions: { length: 60, width: 35, height: 7 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Monitor',
      review: [
        {
          rating: '5',
          comment: 'Crystal clear display.',
          reviewer_name: 'Ivy',
          reviwer_email: 'ivy@example.com',
        },
        {
          rating: '5',
          comment: 'Colors are vibrant.',
          reviewer_name: 'Rita',
          reviwer_email: 'rita@example.com',
        },
        {
          rating: '4',
          comment: 'Sleek design.',
          reviewer_name: 'Sam',
          reviwer_email: 'sam@example.com',
        },
      ],
    },
    {
      product_title: 'Desk Lamp',
      product_description: 'LED desk lamp with adjustable brightness.',
      product_category: 'Home',
      price: '15.99',
      discount_percentage: '6',
      rating: '4.0',
      stock: '90',
      tags: 'lamp,desk,led',
      brand: 'BrightLite',
      sku: 'LAMP123',
      weight: '0.3',
      dimensions: { length: 12, width: 12, height: 40 },
      thumbail: 'https://dummyimage.com/200x200/000/fff&text=Lamp',
      review: [
        {
          rating: '4',
          comment: 'Bright and efficient.',
          reviewer_name: 'Jack',
          reviwer_email: 'jack@example.com',
        },
        {
          rating: '3',
          comment: 'Could be more flexible.',
          reviewer_name: 'Tina',
          reviwer_email: 'tina@example.com',
        },
        {
          rating: '5',
          comment: 'Great for late-night work.',
          reviewer_name: 'Uma',
          reviwer_email: 'uma@example.com',
        },
      ],
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: {
        ...product,
        dimensions: product.dimensions,
        review: {
          create: product.review,
        },
      },
    });
  }

  console.log('Seed data created!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
