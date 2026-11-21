export type Language = 'en' | 'gu'

export interface NavChildItem {
  label: string
  note?: string
  href: string
}

export interface NavTranslationItem {
  label: string
  href: string
  children?: NavChildItem[]
}

export interface PlanTranslation {
  id: string
  label: string
  amount: number
  does: string
}

export interface StatTranslation {
  value: number
  suffix: string
  label: string
  aria: string
  icon: 'cow' | 'people' | 'heart'
}

export interface StepItem {
  title: string
  body: string
}

export interface MissionItem {
  tag: string
  title: string
  body: string
  points: string[]
  cta: string
  href: string
}

export interface TabItem {
  id: 'history' | 'mission' | 'vision'
  label: string
  body: string
  points: string[]
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
}

export interface PostItem {
  slug: string
  title: string
  excerpt: string
  cat: string
  date: string
  read: string
  pull?: string
  body: string[]
}

export const TRANSLATIONS = {
  en: {
    brand: {
      name: 'GauSeva',
      legalName: 'Positivity Donation',
      tagline: 'Care • Shelter • Compassion',
      founder: '[OWNER NAME]',
      registrationStatus: 'Registration in progress',
    },
    nav: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      {
        label: 'Our Work',
        href: '/what-we-do',
        children: [
          { label: 'Gau Seva', note: 'Cow care', href: '/what-we-do#gau-seva' },
          { label: 'Shiksha', note: 'Education', href: '/what-we-do#shiksha' },
          { label: 'How Funds Are Used', href: '/what-we-do#funds' },
          { label: 'Future Plans', href: '/what-we-do#future' },
        ],
      },
      { label: 'Gallery', href: '/gallery' },
      {
        label: 'Get Involved',
        href: '/volunteer',
        children: [
          { label: 'Donate', href: '/donate' },
          { label: 'Volunteer', href: '/volunteer' },
          { label: 'Partner', href: '/contact?subject=partner' },
          { label: 'Spread the Word', href: '/gallery?share=1' },
        ],
      },
      { label: 'Contact', href: '/contact' },
    ],
    mobileNav: {
      home: 'Home',
      about: 'About',
      donate: 'Donate',
      gallery: 'Gallery',
      connect: 'Connect',
    },
    hero: {
      badge: 'Together for a Kinder World',
      title1: 'Serve Gau Mata,',
      title2: 'Serve Humanity',
      lead: 'Our Gushala is dedicated to the care, protection and welfare of cows, because every life matters.',
      donateCta: 'Donate Now',
      learnCta: 'Learn More',
    },
    featureStrip: [
      { title: 'Safe Shelter', caption: 'For Cows' },
      { title: 'Medical Care', caption: 'For Better Health' },
      { title: 'Nutritious Food', caption: 'For a Healthy Life' },
      { title: 'Compassion', caption: 'In Every Act' },
    ],
    aboutSanctuary: {
      eyebrow: 'About Our Gushala',
      title1: 'A Sanctuary of Hope for the',
      titleHighlight: 'Voiceless',
      lead: 'We provide shelter, care and love to cows, while promoting compassion and harmony in society.',
      cta: 'Know More',
      stats: [
        { value: 500, suffix: '+', label: 'Cows Cared', aria: '500 plus cows cared for', icon: 'cow' as const },
        { value: 10, suffix: 'K+', label: 'Lives Touched', aria: '10 thousand plus lives touched', icon: 'people' as const },
        { value: 1, suffix: 'K+', label: 'Donors', aria: '1 thousand plus donors', icon: 'heart' as const },
      ],
    },
    heartfeltIdea: {
      eyebrow: 'Our Heartfelt Idea',
      title: 'When a cow stops giving milk, she shouldn’t lose her home.',
      lead: 'Many families can no longer afford to feed a cow that is not giving milk, and she ends up on the street. We step in with fresh food, so the family can keep her where she belongs.',
      steps: [
        {
          title: 'Family keeps the cow',
          body: 'The family agrees to keep her at home and care for her as one of their own.',
        },
        {
          title: 'We provide fresh food',
          body: 'Our team delivers green fodder and feed regularly, so the cost never falls on them.',
        },
        {
          title: 'Cow lives safe & loved',
          body: 'She stays with the people she knows — fed, healthy and never left alone.',
        },
      ],
    },
    missions: {
      eyebrow: 'Two Missions, One Heart',
      title1: 'Compassion for cows.',
      title2: 'Hope for children.',
      lead: 'Every small act of giving counts — a day of fodder, a box of pencils, a month of meals.',
      items: [
        {
          tag: 'Gau Seva',
          title: 'Food that keeps a cow at home',
          body: 'For seven years our founder has fed cows that families could no longer afford. Today we deliver fresh fodder so no cow is turned out for being “unproductive”.',
          points: ['Daily green fodder', 'Medical check-ups', 'Shelter for strays', 'Support for families'],
          cta: 'Support Gau Seva',
          href: '/donate?cause=cow',
        },
        {
          tag: 'Shiksha',
          title: 'A full stomach and a school bag',
          body: 'Some parents simply cannot afford school. We cover food, stay, books and stationery so their children can keep learning.',
          points: ['Meals and stay', 'Books and uniform', 'Stationery kits', 'Mentoring'],
          cta: 'Support Shiksha',
          href: '/donate?cause=education',
        },
      ],
    },
    ourStory: {
      eyebrow: 'Our Story',
      yearsBadgeNum: '8+',
      yearsBadgeText: 'Years of\nGau Seva',
      originBadge: 'Started with one bundle of fodder',
      title: 'A journey born from a single act of kindness',
      lead: 'What began with feeding one abandoned cow has grown into a community movement of compassion, shelter, and education.',
      tabs: [
        {
          id: 'history' as const,
          label: 'Our History',
          body: 'Eight years ago our founder saw a mother cow left at the roadside because she was “no longer useful”. He began with one bundle of fodder every morning — and never stopped.',
          points: [
            'Daily feeding rounds since the very first year',
            'A small Gushala built with neighbours’ help',
            'Families helped to keep their cows at home',
          ],
        },
        {
          id: 'mission' as const,
          label: 'Our Mission',
          body: 'Keep every cow fed and loved — ideally in the home she already knows — and give children from struggling families the food and supplies to stay in school.',
          points: ['Fresh fodder delivered to families', 'Medical care for sick and injured cows', 'Meals, books and stationery for children'],
        },
        {
          id: 'vision' as const,
          label: 'Our Vision',
          body: 'A village where no cow is abandoned for being old, and no child leaves school because of an empty stomach or an empty school bag.',
          points: ['A larger shelter with a medical bay', 'A study centre with daily meals', 'Transparent reports for every donor'],
        },
      ],
    },
    quickDonate: {
      eyebrow: 'Give in a Minute',
      title: 'Be the reason a cow is',
      titleHighlight: 'never left alone.',
      lead: 'Choose what feels right. We’ll send you a photo update from the Gushala so you can see where your gift went.',
      feedCow: 'Feed a Cow',
      helpChild: 'Help a Child',
      once: 'Give once',
      monthly: 'Monthly pledge',
      customAmount: 'Custom amount',
      customPlaceholder: 'Enter amount (min ₹100)',
      btnProceed: 'Proceed to Donate',
      safety: 'Transparent operations · Photo updates to donors',
      cowPlans: [
        { id: 'day', label: 'One day', amount: 200, does: 'One day of fresh fodder for one cow' },
        { id: 'month', label: 'One month', amount: 6000, does: 'Keeps one cow fed at home for a month' },
      ],
      eduPlans: [
        { id: 'stationery', label: 'Stationery', amount: 500, does: 'Notebooks, pencils and a geometry box' },
        { id: 'food', label: 'Monthly food', amount: 1500, does: 'Daily meals for one child for a month' },
      ],
    },
    galleryPreview: {
      eyebrow: 'Moments of Grace',
      title: 'Life at the Sanctuary',
      lead: 'Every photo is a glimpse into a cow that is safe, loved, and peacefully living her natural life.',
      viewAll: 'Explore full gallery',
    },
    testimonials: {
      eyebrow: 'Voices of Kindness',
      title: 'Why people give',
      items: [
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
      ],
    },
    latestBlog: {
      eyebrow: 'From Our Journal',
      title: 'Stories from the field',
      allStories: 'All stories',
      readStory: 'Read story',
    },
    footer: {
      tagline: 'Compassion for cows. Hope for children. Every small act of giving counts.',
      explore: 'Explore',
      getInvolved: 'Get Involved',
      reachUs: 'Reach Us',
      privacy: 'Privacy',
      terms: 'Terms',
      donationPolicy: 'Donation Policy',
      copyright: 'All rights reserved.',
      switchLang: 'Language / ભાષા',
    },
    languageModal: {
      title: 'Choose Language',
      titleGujarati: 'આપની ભાષા પસંદ કરો',
      subtitle: 'Select your preferred language for the best experience',
      englishBtn: 'English',
      englishSub: 'Continue in English',
      gujaratiBtn: 'ગુજરાતી',
      gujaratiSub: 'ગુજરાતીમાં આગળ વધો',
      rememberText: 'Remember my preference on this device',
      close: 'Continue',
    },
    donatePage: {
      crumb: 'Donate',
      eyebrow: 'Direct & Transparent Care',
      title1: 'Be the reason a cow is',
      titleHighlight: 'fed & loved',
      lead: 'Every rupee goes directly to fresh fodder, medicines and schooling supplies. Choose a one-time gift or monthly pledge.',
      step1: '1. Select Cause',
      step2: '2. Frequency',
      step3: '3. Choose an Amount',
      step4: '4. Your Details',
      customAmount: 'Custom amount',
      customMin: 'Minimum donation is ₹100',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Mobile Number (WhatsApp updates)',
      pan: 'PAN Card Number (Optional)',
      prayer: 'Special Note or Dedication (e.g. Birthday, In memory of)',
      paymentMethod: 'Payment Mode',
      upiQr: 'Instant UPI / QR Code (Google Pay, PhonePe, Paytm)',
      cardNet: 'Debit / Credit Card / Netbanking',
      btnDonate: 'Complete Donation',
      processing: 'Processing...',
      safePledge: '100% of your contribution directly supports animal feed, shelter care, and education materials.',
    },
    volunteerPage: {
      crumb: 'Volunteer',
      eyebrow: 'Join Hands for Seva',
      title: 'Spend a morning that stays with you',
      lead: 'Every weekend, volunteers gather to feed cows, care for injured animals, and tutor children in our Shiksha program.',
      rolesTitle: 'How would you like to contribute?',
      fullName: 'Your Name',
      email: 'Email Address',
      phone: 'Contact Number',
      availability: 'Availability',
      notes: 'Tell us a bit about yourself (optional)',
      btnSubmit: 'Register as Volunteer',
      submittedMsg: 'Dhanyavaad! Our team will contact you for the upcoming weekend seva.',
    },
    contactPage: {
      crumb: 'Contact',
      eyebrow: 'Get In Touch',
      title: 'We’d love to hear from you',
      lead: 'Have questions about donating, visiting our sanctuary, or partnering with our initiatives? Reach out anytime.',
      addressTitle: 'Address',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      whatsAppTitle: 'WhatsApp',
      formTitle: 'Send a Message',
      fullName: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      message: 'Your Message',
      btnSend: 'Send Message',
      sentMsg: 'Thank you for reaching out! We will respond shortly.',
    },
    thankYouPage: {
      ref: 'Receipt Ref',
      title: 'Dhanyavaad',
      lead: 'Your compassionate gift of',
      oneTime: 'One-time Donation',
      monthly: 'Monthly Pledge',
      received: 'has been received with deep gratitude and humility.',
      nextTitle: 'What Happens Next?',
      cowNext: 'Fresh green fodder has been scheduled for delivery to a supported family.',
      eduNext: 'Daily nutrition and school supplies will be prepared for a child in need.',
      photoUpdate: 'A photo update will be shared with you so you can see your contribution in action.',
      transparency: 'Your contribution directly powers our Gushala operations at',
      btnHome: 'Return to Home',
      btnGallery: 'Explore Gallery',
    },
  },
  gu: {
    brand: {
      name: 'ગૌસેવા',
      legalName: 'પોઝિટિવિટી ડોનેશન',
      tagline: 'જતન • આશ્રય • કરુણા',
      founder: '[સંચાલકશ્રીનું નામ]',
      registrationStatus: 'સંસ્થા નોંધણી પ્રક્રિયા ચાલુ છે',
    },
    nav: [
      { label: 'મુખ્ય પૃષ્ઠ', href: '/' },
      { label: 'અમારા વિશે', href: '/about' },
      {
        label: 'સેવા કાર્યો',
        href: '/what-we-do',
        children: [
          { label: 'ગૌસેવા', note: 'ગૌમાતાનું જતન', href: '/what-we-do#gau-seva' },
          { label: 'શિક્ષા', note: 'બાળકોનું શિક્ષણ', href: '/what-we-do#shiksha' },
          { label: 'દાનનો સદ્ઉપયોગ', href: '/what-we-do#funds' },
          { label: 'ભાવિ સંકલ્પ', href: '/what-we-do#future' },
        ],
      },
      { label: 'ગેલેરી', href: '/gallery' },
      {
        label: 'સેવા સહયોગ',
        href: '/volunteer',
        children: [
          { label: 'દાન કરો', href: '/donate' },
          { label: 'સ્વયંસેવક બનો', href: '/volunteer' },
          { label: 'સહભાગી બનો', href: '/contact?subject=partner' },
          { label: 'સેવા સંદેશ વહેંચો', href: '/gallery?share=1' },
        ],
      },
      { label: 'સંપર્ક', href: '/contact' },
    ],
    mobileNav: {
      home: 'હોમ',
      about: 'વિશે',
      donate: 'દાન',
      gallery: 'ગેલેરી',
      connect: 'સંપર્ક',
    },
    hero: {
      badge: 'કરુણામય વિશ્વના નિર્માણ માટે સાથે મળીને',
      title1: 'ગૌમાતાની સેવા,',
      title2: 'એ જ સાચી માનવસેવા',
      lead: 'અમારી ગૌશાળા અબોલ ગૌમાતાના રક્ષણ, આહાર અને આજીવન આશ્રય માટે સમર્પિત છે, કારણ કે દરેક જીવ અમૂલ્ય છે.',
      donateCta: 'દાન કરો',
      learnCta: 'વિશેષ જાણો',
    },
    featureStrip: [
      { title: 'સુરક્ષિત આશ્રય', caption: 'ગૌમાતા માટે' },
      { title: 'સારવાર અને ઔષધિ', caption: 'ઉત્તમ સ્વાસ્થ્ય માટે' },
      { title: 'પૌષ્ટિક ઘાસચારો', caption: 'નિયમિત આહાર' },
      { title: 'પ્રેમ અને કરુણા', caption: 'દરેક સેવા કાર્યમાં' },
    ],
    aboutSanctuary: {
      eyebrow: 'અમારી ગૌશાળા વિશે',
      title1: 'અબોલ જીવો માટે આશા અને કરુણાનું',
      titleHighlight: 'પવિત્ર ધામ',
      lead: 'અમે ગૌમાતાને આશ્રય, ઉત્તમ સારસંભાળ અને પ્રેમ આપવાની સાથે સમાજમાં કરુણા અને સંવેદનાનો સંદેશ ફેલાવીએ છીએ.',
      cta: 'વિસ્તૃત માહિતી',
      stats: [
        { value: 500, suffix: '+', label: 'ગૌમાતાની સેવા', aria: '૫૦૦ થી વધુ ગૌમાતાની સેવા', icon: 'cow' as const },
        { value: 10, suffix: 'હજાર+', label: 'પરિવારો સુધી મદદ', aria: '૧૦ હજારથી વધુ પરિવારો સુધી મદદ પહોંચી', icon: 'people' as const },
        { value: 1, suffix: 'હજાર+', label: 'દાતાઓનો સાથ', aria: '૧ હજારથી વધુ સેવાભાવી દાતાઓ', icon: 'heart' as const },
      ],
    },
    heartfeltIdea: {
      eyebrow: 'અમારો પ્રેમાળ વિચાર',
      title: 'જ્યારે ગાય દૂધ આપતી બંધ થાય, ત્યારે તેનું ઘર ન છીનવાવું જોઈએ.',
      lead: 'ઘણા ગરીબ પરિવારો દૂધ ન આપતી ગૌમાતાના ઘાસચારાનો ખર્ચ ઉઠાવી શકતા નથી અને મજબૂરીમાં ગાય રસ્તે રઝળતી થઈ જાય છે. અમે તેમના ઘર સુધી નિયમિત લીલો ઘાસચારો પહોંચાડીએ છીએ, જેથી ગૌમાતા તેના પરિવાર સાથે જ ગૌરવભેર જીવી શકે.',
      steps: [
        {
          title: 'પરિવાર ગાયને ઘરમાં જ રાખે છે',
          body: 'પરિવાર ગૌમાતાને પોતાના સ્વજનની જેમ ઘરમાં રાખવાની અને વહાલ આપવાની જવાબદારી નિભાવે છે.',
        },
        {
          title: 'અમે પૌષ્ટિક ઘાસચારો પહોંચાડીએ છીએ',
          body: 'અમારી ટીમ નિયમિતપણે લીલો ઘાસચારો અને પશુઆહાર ઘરબેઠા પહોંચાડે છે, જેથી પરિવાર પર આર્થિક બોજ ન પડે.',
        },
        {
          title: 'ગૌમાતા સુરક્ષિત અને સુખી રહે છે',
          body: 'ગૌમાતા પોતાના પરિચિત વાતાવરણમાં ભરપેટ ભોજન સાથે રહે છે, ક્યારેય લાચાર કે નિરાધાર બનતી નથી.',
        },
      ],
    },
    missions: {
      eyebrow: 'બે પવિત્ર સંકલ્પ, એક હૃદય',
      title1: 'ગૌમાતા પ્રત્યે કરુણા.',
      title2: 'બાળકો માટે ઉજ્જવળ ભવિષ્ય.',
      lead: 'દરેક નાનું દાન પણ મોટો બદલાવ લાવે છે — એક દિવસનો ઘાસચારો, પેન્સિલનું બોક્સ કે મહિનાનું ભોજન.',
      items: [
        {
          tag: 'ગૌસેવા',
          title: 'ગૌમાતાને ઘરમાં જ આહાર મળી રહે',
          body: 'છેલ્લા સાત વર્ષથી અમારા સંસ્થાપક એ પરિવારોની ગાયોને ભોજન પૂરું પાડે છે જેઓ ખર્ચ ઉઠાવી શકતા નથી. અમે નિયમિત લીલો ઘાસચારો પહોંચાડીએ છીએ જેથી કોઈ ગાય બિનઉપયોગી ગણીને તરછોડાય નહીં.',
          points: ['દૈનિક લીલો ઘાસચારો', 'નિયમિત પશુચિકિત્સક સારવાર', 'નિરાધાર ગાયોને આશ્રય', 'પશુપાલક પરિવારોને સહાય'],
          cta: 'ગૌસેવામાં સહયોગ આપો',
          href: '/donate?cause=cow',
        },
        {
          tag: 'શિક્ષા',
          title: 'ભરપેટ ભોજન અને સ્કૂલ બેગ',
          body: 'કેટલાક ગરીબ વાલીઓ શાળાનો ખર્ચ ઉઠાવી શકતા નથી. અમે બાળકોના ભોજન, રહેઠાણ, પુસ્તકો અને શૈક્ષણિક સામગ્રીનો ખર્ચ ઉઠાવીએ છીએ જેથી તેમનો અભ્યાસ અટકે નહીં.',
          points: ['પૌષ્ટિક ભોજન અને આવાસ', 'પુસ્તકો અને ગણવેશ (યુનિફોર્મ)', 'શૈક્ષણિક કિટ', 'માર્ગદર્શન અને સંસ્કાર'],
          cta: 'શિક્ષણમાં સહયોગ આપો',
          href: '/donate?cause=education',
        },
      ],
    },
    ourStory: {
      eyebrow: 'અમારી કહાણી',
      yearsBadgeNum: '૮+',
      yearsBadgeText: 'વર્ષોથી અવિરત\nગૌસેવા',
      originBadge: 'એક પૂળા ઘાસચારાથી શરૂઆત',
      title: 'કરુણાના એક નાના પગલાથી શરૂ થયેલી અવિરત યાત્રા',
      lead: 'રસ્તા પર ભૂખી ઊભેલી એક અબોલ ગાયને ઘાસ નીરવાથી શરૂ થયેલી આ સેવા આજે હજારો જીવો માટે આશીર્વાદ બની છે.',
      tabs: [
        {
          id: 'history' as const,
          label: 'અમારો ઇતિહાસ',
          body: 'આઠ વર્ષ પહેલાં અમારા સંસ્થાપકે રસ્તાના કિનારે એક અશક્ત ગાયને જોઈ, જેને દૂધ આપવાનું બંધ થતાં તરછોડી દેવાઈ હતી. તેમણે દરરોજ સવારે ઘાસચારો આપવાનું શરૂ કર્યું — અને તે સેવા ક્યારેય અટકી નથી.',
          points: [
            'પ્રથમ વર્ષથી જ દરરોજ સવારે ઘાસચારા વિતરણ',
            'ગ્રામજનોના સહયોગથી નાની ગૌશાળાનું નિર્માણ',
            'પરિવારોને પોતાની ગાય ઘરમાં જ સાચવવા પ્રોત્સાહન',
          ],
        },
        {
          id: 'mission' as const,
          label: 'અમારો ઉદ્દેશ્ય',
          body: 'દરેક ગાયને ભરપેટ આહાર અને સ્નેહ મળે — શક્ય હોય ત્યાં સુધી પોતાના ઘરમાં જ — અને જરૂરિયાતમંદ બાળકો શાળા છોડવા મજબૂર ન બને.',
          points: ['પરિવારોના ઘરે લીલો ઘાસચારો પહોંચાડવો', 'બીમાર અને ઈજાગ્રસ્ત ગાયોની નિઃશુલ્ક સારવાર', 'બાળકો માટે ભોજન, ચોપડા અને યુનિફોર્મ'],
        },
        {
          id: 'vision' as const,
          label: 'અમારો સંકલ્પ',
          body: 'એવું ગામ અને સમાજ જ્યાં કોઈ ગૌમાતા વૃદ્ધ થવાને કારણે તરછોડાય નહીં, અને કોઈ બાળક ભૂખ્યા પેટે શાળા છોડે નહીં.',
          points: ['હોસ્પિટલ સુવિધા સાથે મોટી ગૌશાળા', 'બાળકો માટે નિઃશુલ્ક અભ્યાસ કેન્દ્ર', 'દરેક દાતાને પારદર્શક અહેવાલ'],
        },
      ],
    },
    quickDonate: {
      eyebrow: 'એક મિનિટમાં સેવા સહયોગ',
      title: 'કોઈ ગૌમાતા ક્યારેય બેસહારા ન બને,',
      titleHighlight: 'તેનું નિમિત્ત બનો.',
      lead: 'આપની શ્રદ્ધા અનુસાર દાન પસંદ કરો. આપના દાનનો સદ્ઉપયોગ દર્શાવતી તસવીરો અમે આપને વોટ્સએપ પર મોકલીશું.',
      feedCow: 'ગૌમાતાને આહાર આપો',
      helpChild: 'બાળકના શિક્ષણમાં સહાય',
      once: 'એક વખત દાન',
      monthly: 'માસિક નિયમ (સંકલ્પ)',
      customAmount: 'અન્ય રકમ',
      customPlaceholder: 'રકમ લખો (ઓછામાં ઓછી ₹૧૦૦)',
      btnProceed: 'આગળ વધો અને દાન કરો',
      safety: '૧૦૦% પારદર્શક સેવા · દાતાઓને તસવીર સાથે અપડેટ',
      cowPlans: [
        { id: 'day', label: 'એક દિવસ', amount: 200, does: 'એક ગાય માટે એક દિવસનો તાજો પૌષ્ટિક લીલો ઘાસચારો' },
        { id: 'month', label: 'એક મહિનો', amount: 6000, does: 'ગૌમાતાને ઘરે જ આખા મહિનાનો સંપૂર્ણ ખોરાક' },
      ],
      eduPlans: [
        { id: 'stationery', label: 'શૈક્ષણિક કિટ', amount: 500, does: 'નોટબુક, પેન્સિલ અને કંપાસ બોક્સ' },
        { id: 'food', label: 'માસિક ભોજન', amount: 1500, does: 'એક બાળક માટે આખા મહિનાનું પૌષ્ટિક ભોજન' },
      ],
    },
    galleryPreview: {
      eyebrow: 'સેવાની જીવંત ક્ષણો',
      title: 'ગૌશાળા પરિસર અને સેવા',
      lead: 'દરેક તસવીર એક સુખી અને સુરક્ષિત ગૌમાતાના આશીર્વાદની સાક્ષી પૂરે છે.',
      viewAll: 'તમામ તસવીરો જુઓ',
    },
    testimonials: {
      eyebrow: 'હૃદયસ્પર્શી અનુભવો',
      title: 'સેવાભાવી લોકોના પ્રતિભાવ',
      items: [
        {
          quote:
            'ગયા વર્ષે અમારી ગાય ગૌરીએ દૂધ આપવાનું બંધ કર્યું ત્યારે અમને ચિંતા હતી કે તેને શું ખવડાવીશું. ગૌસેવાના સહયોગથી આજે પણ તે અમારી સાથે છે — મારા બાળકો દર સાંજે તેને વહાલથી ઘાસ નીરે છે.',
          name: 'સુનીતાબેન બી.',
          role: 'ગૌસેવા સહાય મેળવનાર પરિવાર',
        },
        {
          quote: 'હું દર મહિને મારી માતાના જન્મદિવસ નિમિત્તે ₹૨૦૦ ગૌસેવામાં અર્પણ કરું છું. સંસ્થા તરફથી આવતી ગાયની તસવીર જોઈ મન પ્રસન્ન થઈ જાય છે.',
          name: 'રાહુલ એમ.',
          role: 'માસિક દાતા',
        },
        {
          quote: 'હું રવિવારે થોડો સમય સેવા આપવા ગયો હતો. ત્યાં જઈને મને સમજાયું કે અબોલ જીવો પ્રત્યે ધીરજ અને સાચો પ્રેમ શું કહેવાય.',
          name: 'કાવ્યા એસ.',
          role: 'સ્વયંસેવક',
        },
      ],
    },
    latestBlog: {
      eyebrow: 'સેવા ડાયરીમાંથી',
      title: 'સેવા ક્ષેત્રની વાતો',
      allStories: 'બધા લેખ જુઓ',
      readStory: 'વાંચો',
    },
    footer: {
      tagline: 'ગૌમાતા પ્રત્યે કરુણા. બાળકો માટે આશા. આપનું દરેક નાનું દાન અમૂલ્ય છે.',
      explore: 'માહિતી',
      getInvolved: 'જોડાઓ',
      reachUs: 'સંપર્ક વિગત',
      privacy: 'ગોપનીયતા નીતિ',
      terms: 'નિયમો અને શરતો',
      donationPolicy: 'દાન નીતિ',
      copyright: 'સર્વાધિકાર સુરક્ષિત.',
      switchLang: 'Language / ભાષા',
    },
    languageModal: {
      title: 'Choose Language',
      titleGujarati: 'આપની ભાષા પસંદ કરો',
      subtitle: 'કૃપા કરીને આપની અનુકૂળ ભાષા પસંદ કરો / Select your preferred language',
      englishBtn: 'English',
      englishSub: 'Continue in English',
      gujaratiBtn: 'ગુજરાતી',
      gujaratiSub: 'ગુજરાતીમાં આગળ વધો',
      rememberText: 'આ ડિવાઇસ પર મારી પસંદગી યાદ રાખો',
      close: 'આગળ વધો',
    },
    donatePage: {
      crumb: 'દાન કરો',
      eyebrow: 'પારદર્શક અને પવિત્ર સેવા',
      title1: 'ગૌમાતાનું જતન અને ભોજન આપના સહયોગથી',
      titleHighlight: 'શક્ય બને છે',
      lead: 'આપનો દરેક રૂપિયો સીધો લીલા ઘાસચારા, પશુ ચિકિત્સા અને જરૂરિયાતમંદ બાળકોના શિક્ષણ પાછળ વપરાય છે.',
      step1: '૧. સેવાનો હેતુ પસંદ કરો',
      step2: '૨. દાનનો પ્રકાર',
      step3: '૩. રકમ પસંદ કરો',
      step4: '૪. આપની વિગત',
      customAmount: 'અન્ય રકમ',
      customMin: 'ઓછામાં ઓછું દાન ₹૧૦૦ છે',
      fullName: 'આપનું પૂરું નામ',
      email: 'ઈમેલ એડ્રેસ',
      phone: 'મોબાઈલ નંબર (વોટ્સએપ અપડેટ માટે)',
      pan: 'પાન કાર્ડ નંબર (વૈકલ્પિક)',
      prayer: 'સંકલ્પ અથવા વિશેષ સંદેશ (દા.ત. જન્મદિવસ, પિતૃતર્પણ)',
      paymentMethod: 'ચુકવણીની રીત',
      upiQr: 'ઝડપી UPI / QR કોડ (Google Pay, PhonePe, Paytm)',
      cardNet: 'ડેબિટ / ક્રેડિટ કાર્ડ / નેટબેંકિંગ',
      btnDonate: 'દાન પૂર્ણ કરો',
      processing: 'પ્રક્રિયા ચાલુ છે...',
      safePledge: '૧૦૦% રકમ સીધી ગૌસેવા, પશુ આહાર અને બાળ શિક્ષણમાં વપરાય છે.',
    },
    volunteerPage: {
      crumb: 'સ્વયંસેવક',
      eyebrow: 'સેવામાં સહભાગી બનો',
      title: 'જીવનભર યાદ રહે તેવી એક સવાર વિતાવો',
      lead: 'દર સપ્તાહના અંતે યુવાનો, વડીલો અને પરિવારો સાથે મળીને ગાયોને ઘાસ નીરે છે, ગૌશાળાની સફાઈ કરે છે અને બાળકોને ભણાવે છે.',
      rolesTitle: 'આપ કઈ સેવામાં સહયોગ આપવા માંગો છો?',
      fullName: 'આપનું પૂરું નામ',
      email: 'ઈમેલ એડ્રેસ',
      phone: 'સંપર્ક નંબર',
      availability: 'અનુકૂળ સમય',
      notes: 'આપના વિશે ટૂંકમાં જણાવો (વૈકલ્પિક)',
      btnSubmit: 'સ્વયંસેવક તરીકે નોંધણી કરો',
      submittedMsg: 'ધન્યવાદ! અમારી ટીમ આગામી રવિવારની સેવા માટે આપનો સંપર્ક કરશે.',
    },
    contactPage: {
      crumb: 'સંપર્ક',
      eyebrow: 'અમારો સંપર્ક કરો',
      title: 'અમને આપની સાથે વાત કરવી ગમશે',
      lead: 'ગૌસેવા, ગૌશાળાની મુલાકાત કે સંસ્થાકીય સહયોગ અંગે કોઈ પણ પ્રશ્ન હોય તો નિઃસંકોચ સંપર્ક કરો.',
      addressTitle: 'સરનામું',
      phoneTitle: 'ફોન નંબર',
      emailTitle: 'ઈમેલ',
      whatsAppTitle: 'વોટ્સએપ',
      formTitle: 'સંદેશ મોકલો',
      fullName: 'આપનું નામ',
      email: 'ઈમેલ એડ્રેસ',
      phone: 'ફોન નંબર',
      subject: 'વિષય',
      message: 'આપનો સંદેશ',
      btnSend: 'સંદેશ મોકલો',
      sentMsg: 'આપનો સંદેશ મળી ગયો છે. અમે ટૂંક સમયમાં આપનો સંપર્ક કરીશું.',
    },
    thankYouPage: {
      ref: 'રસીદ નંબર',
      title: 'ધન્યવાદ',
      lead: 'આપના કરુણાપૂર્ણ સેવા દાન',
      oneTime: 'એક વખતનું દાન',
      monthly: 'માસિક નિયમ',
      received: 'માટે અમે હૃદયપૂર્વક આભાર માનીએ છીએ.',
      nextTitle: 'હવે આગળ શું થશે?',
      cowNext: 'આપના તરફથી ગૌમાતા માટે લીલો ઘાસચારો પહોંચાડવાની વ્યવસ્થા શરૂ થઈ ગઈ છે.',
      eduNext: 'જરૂરિયાતમંદ બાળક માટે ભોજન અને શૈક્ષણિક સામગ્રી તૈયાર કરવામાં આવશે.',
      photoUpdate: 'સેવા કાર્યની તસવીર આપના વોટ્સએપ પર મોકલવામાં આવશે જેથી આપ આપનું યોગદાન જોઈ શકો.',
      transparency: 'આપનું દાન સીધું ગૌશાળા અને સેવા કાર્યોમાં વપરાય છે.',
      btnHome: 'મુખ્ય પૃષ્ઠ પર જાઓ',
      btnGallery: 'તસવીરો જુઓ',
    },
  },
} as const
