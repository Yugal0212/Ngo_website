import { Post, Story, Testimonial } from '@/types'
import { IMAGES } from './images'

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Our cow Gauri stopped giving milk last year and we didn’t know how we would feed her. Because of GauSeva, she is still with us — my children feed her every evening.',
    name: 'Sunita B.',
    role: 'Family supported by Gau Seva',
  },
  {
    quote: 'I give ₹200 on my mother’s birthday every month. The photo update they send is the best part of my day.',
    name: 'Rahul M.',
    role: 'Monthly donor, Pune',
  },
  {
    quote: 'I volunteered for a weekend expecting to help. I left having learned what patience and care really look like.',
    name: 'Kavya S.',
    role: 'Volunteer',
  },
]

export const POSTS: Post[] = [
  {
    slug: 'why-families-abandon-cows',
    title: 'Why families let go of cows — and how a little food changes that',
    excerpt: 'Most families don’t want to abandon their cow. They simply can’t afford to feed her once the milk stops.',
    cat: 'Gau Seva',
    date: '12 Mar 2025',
    read: '5 min read',
    img: IMAGES.gallery[2],
    pull: 'Nobody in the village wants to turn their cow out. They just run out of choices.',
    body: [
      'Walk through any village road in the evening and you will see them: older cows, standing quietly near a tea stall or a temple, waiting. Most of them once belonged to a family that loved them.',
      'When a cow stops giving milk, the cost of feeding her — roughly ₹200 a day for good fodder — doesn’t stop. For a family living on daily wages, that is often the difference between school fees and no school fees.',
      'Our idea is simple. If we take on the cost of food, the family can keep the cow at home. She stays with the children who grew up with her, in the shed she knows, and nobody has to make an impossible choice.',
      'Today we deliver fresh fodder to families every week. Every delivery is logged, and donors receive photo updates so they can see exactly whose cow they are feeding.',
    ],
  },
  {
    slug: 'first-school-bags',
    title: 'Twenty school bags, twenty first days of school',
    excerpt: 'This June, twenty children walked into class with new books, a uniform and a full tiffin.',
    cat: 'Shiksha',
    date: '28 Feb 2025',
    read: '4 min read',
    img: IMAGES.gallery[3],
    body: [
      'Shiksha began almost by accident. While delivering fodder, our founder kept meeting children who were at home during school hours — not because they didn’t want to learn, but because there was no money for books or lunch.',
      'This year, with your help, twenty children started the school year with a bag, books, a uniform and the promise of a daily meal.',
      'We keep a simple register of every child’s attendance, and share progress with donors — first names and initials only, with parents’ consent.',
    ],
  },
  {
    slug: 'a-morning-at-the-gushala',
    title: 'A morning at the Gushala, from 5 a.m. fodder to evening aarti',
    excerpt: 'What a single day looks like for the people — and the cows — at our shelter.',
    cat: 'Stories',
    date: '9 Feb 2025',
    read: '6 min read',
    img: IMAGES.gallery[1],
    body: [
      'The day starts before sunrise. Fresh green fodder arrives at five, and by six every trough is full.',
      'Mid-morning is for check-ups: a limp, an eye infection, a calf that isn’t feeding well. Our visiting vet comes twice a week; the rest of the time it is careful watching.',
      'Evenings end with a small aarti and a slow walk through the shed. Every cow has a name, and every name gets said.',
    ],
  },
  {
    slug: 'what-200-rupees-does',
    title: 'Where your ₹200 goes, rupee by rupee',
    excerpt: 'A transparent look at what one day of care for one cow actually costs.',
    cat: 'Updates',
    date: '24 Jan 2025',
    read: '3 min read',
    img: IMAGES.missionCow,
    body: [
      'We are often asked why one day costs ₹200. Here is the honest breakdown: roughly ₹140 for green fodder and dry feed, ₹30 for supplements and mineral mix, and ₹30 towards transport and delivery.',
      'Medical costs are tracked separately and funded through the “Medical Care” portion of general donations.',
      'As our registration completes, we will publish audited statements. Until then, we share monthly expense summaries with every donor who asks.',
    ],
  },
  {
    slug: 'winter-care-for-older-cows',
    title: 'Keeping older cows warm through the winter',
    excerpt: 'Jute blankets, dry bedding and a little jaggery — small things that matter in the cold.',
    cat: 'Gau Seva',
    date: '8 Jan 2025',
    read: '4 min read',
    img: IMAGES.shelter,
    body: [
      'Older cows feel the cold the most. Each winter we stitch jute covers, lay fresh dry straw every evening and add a little jaggery to their feed for warmth.',
      'This season, volunteers helped stitch over sixty covers in a single weekend.',
    ],
  },
  {
    slug: 'meet-our-volunteers',
    title: 'The weekend volunteers who carry the fodder',
    excerpt: 'Students, retirees and families who give their Sundays to the cows.',
    cat: 'Stories',
    date: '19 Dec 2024',
    read: '5 min read',
    img: IMAGES.volunteers,
    body: [
      'Every Sunday a small group arrives with no fixed task — just a willingness to help. Some carry fodder, some clean troughs, some sit with the children for an hour of reading.',
      'If you would like to join them, our volunteer page has everything you need.',
    ],
  },
]

export const STORIES: Story[] = [
  {
    title: 'Gauri stays home',
    excerpt: 'After her milk stopped, Gauri’s family planned to let her go. A weekly fodder delivery changed that.',
    img: IMAGES.missionCow,
    body: 'Gauri is fourteen. When her milk stopped last spring, her family — a farm labourer, his wife and three children — could no longer afford her feed. They had already asked a neighbour to “take her to the highway”. Our founder heard about it the same week. Since then, GauSeva has delivered fodder to their door every Monday. Gauri still sleeps in the same shed, and the youngest daughter still braids marigolds into her rope every festival.',
  },
  {
    title: 'Nandini’s first calf',
    excerpt: 'Found injured near the market, Nandini recovered at the Gushala and gave birth to a healthy calf.',
    img: IMAGES.calfBottle,
    body: 'Nandini was found with a deep wound on her leg near the weekly market. After six weeks of dressing and rest at the Gushala, she was walking again — and two months later, she gave birth to a healthy white calf the children named Chandni.',
  },
  {
    title: 'Ravi’s new notebook',
    excerpt: 'Ravi had stopped going to school. A bag, books and a daily meal brought him back.',
    img: IMAGES.tutor,
    body: 'Ravi (name changed) is nine. He stopped attending school after his father’s work dried up. With a Shiksha sponsorship covering his books, uniform and a daily meal, he has not missed a week since July — and his teacher says he now reads aloud to the class.',
  },
]
