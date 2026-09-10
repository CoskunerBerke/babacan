export interface MenuItem {
  id: string;
  name: string;
  category: "kova" | "tabak" | "gramaj" | "spesiyal";
  badge?: string;
  description: string;
  portions?: string;
  image?: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  tag: string;
  span?: string;
}

export const RESTAURANT_DATA = {
  name: "Babacan Çiğköfte Küçükpark",
  brandName: "Babacan",
  brandSubtitle: "Çiğköfte · Küçükpark",
  city: "İzmir",
  district: "Bornova",
  neighborhood: "Küçükpark",
  locationDisplay: "Küçükpark, Bornova, İzmir",
  hours: "10:30–00:30",
  hoursDisplay: "10:30 – 00:30",
  phone: "0553 918 85 57",
  phoneHref: "tel:+905539188557",
  instagramUrl: "https://www.instagram.com/babacancigkofte_kucukpark/",
  instagramUsername: "@babacancigkofte_kucukpark",
  mapsUrl: "https://www.google.com/maps/place/Kaz%C4%B1mdirik,+175.+Sk.+15+A,+35100+Bornova%2F%C4%B0zmir/data=!4m2!3m1!1s0x14b97d2582a6dcd9:0xad36872ad9d28718",
  slogan: "Dünya'nın İlk Çiğköfte Restoranı",
  subSlogan: "Dünya'nın Restoran Menülü İlk Çiğköftecisi",
  patentNote: "Özel kova ve tabak sunumları Babacan patentli konsepttir.",
  hero: {
    tag: "İZMİR · BORNOVA · KÜÇÜKPARK",
    title: "Küçükpark’ta lezzetin Babacan hâli.",
    description: "Çiğköfte keyfine Küçükpark’ta mola ver. Lezzetlerimizi keşfet, sipariş için bizi ara.",
    primaryCta: "Sipariş İçin Ara",
    secondaryCta: "Lezzetleri Keşfet",
  },
  infoStrip: [
    {
      label: "Konum",
      value: "Küçükpark / Bornova",
      sub: "İzmir'in buluşma noktasında",
    },
    {
      label: "Çalışma Saatleri",
      value: "10:30 – 00:30",
      sub: "Geceye uzanan lezzet durağı",
    },
    {
      label: "Telefonla Sipariş",
      value: "0553 918 85 57",
      sub: "Tıkla, doğrudan ara",
      isPhone: true,
    },
  ],
  menuCategories: [
    { id: "all", name: "Tüm Lezzetler" },
    { id: "kova", name: "Babacan Kovalar" },
    { id: "tabak", name: "Restoran Sunumları" },
    { id: "gramaj", name: "Porsiyon & Kilo" },
  ],
  menuItems: [
    {
      id: "akdeniz-kova",
      name: "Akdeniz Kova",
      category: "kova",
      badge: "Ortada Buluşturan Lezzet",
      description: "Bol taze yeşillik, tatlı mısır, nane yaprakları ve özel ferah sos ile roll çiğköftelerin eşsiz Akdeniz buluşması.",
      portions: "Normal (150 gr) & XL (225 gr)",
      image: "/images/babacan-akdeniz-kova.jpg",
      highlight: true,
    },
    {
      id: "king-roll",
      name: "King Roll Tabağı",
      category: "tabak",
      badge: "Taht'a Çıkmaya Hazır Ol",
      description: "Özel metal sunum tepsisinde halka dizili çıtır kaplamalı roll dilimleri, ortasında sıcacık akışkan dip sosu, kornişon ve meze sosları.",
      portions: "Özel Restoran Sunumu",
      image: "/images/babacan-king-roll.jpg",
      highlight: true,
    },
    {
      id: "citir-kova",
      name: "Çıtır Kova",
      category: "kova",
      badge: "Patentli Konsept",
      description: "Babacan'ın Türkiye'de tek olan patentli kova çiğköftesi. Özel soslu roll dilimleri üzerinde bol çıtır lezzet dokusu.",
      portions: "Normal (150 gr) & XL Seçeneği",
      image: "/images/babacan-citir-kova.jpg",
      highlight: true,
    },
    {
      id: "class-kova",
      name: "Class Kova (Kaşarlı)",
      category: "kova",
      badge: "Sıcak Fırın Kaşarlı",
      description: "Özel fırınlanmış sıcacık uzayan kaşar peyniri kaplamasıyla kova çiğköftenin gurme sıcak yorumu.",
      portions: "Normal & XL Seçeneği",
      image: "/images/babacan-class-kasarli.jpg",
      highlight: true,
    },
    {
      id: "kiremit-cigkofte",
      name: "Kiremitte Çiğköfte",
      category: "tabak",
      badge: "Fırın Spesiyali",
      description: "Geleneksel toprak kiremit güveçte, fırından yeni çıkmış sıcak peynirli ve özel baharat soslu eşsiz restoran tabağı.",
      portions: "Kiremit Restoran Porsiyonu",
      image: "/images/babacan-kiremit.jpg",
      highlight: true,
    },
    {
      id: "super-kova",
      name: "Süper Kova",
      category: "kova",
      badge: "Tüm Soslar Bir Arada",
      description: "Sevdiğin tüm özel dip sosların, nar ekşisinin ve roll çiğköftelerin zengin uyumuyla hazırlanan çok sevilen kova.",
      portions: "Normal (150 gr) & XL (225 gr)",
      image: "/images/babacan-super-kova.jpg",
      highlight: true,
    },
    {
      id: "xl-kova",
      name: "XL Kova",
      category: "kova",
      badge: "Bütün Yollar XL Kovaya Çıkar",
      description: "Geniş arkadaş buluşmaları ve doyumsuz ziyafetler için taze yeşillikler ve bol garnitürle hazırlanan doyurucu dev boy kova.",
      portions: "XL (Doyurucu Büyük Boy)",
      image: "/images/babacan-xl-kova.jpg",
      highlight: true,
    },
    {
      id: "citir-cipsli",
      name: "Çıtır Cipsli Kova",
      category: "kova",
      badge: "Lezzete Çıtır Dokunuş",
      description: "Özel baharatlı çıtır üçgen mısır cipsi parçacıkları ve özel kova soslarıyla ekstra kıtır çiğköfte deneyimi.",
      portions: "Normal & XL Seçeneği",
      image: "/images/babacan-citir-cipsli.jpg",
      highlight: false,
    },
    {
      id: "spagetti-kova",
      name: "Spagetti Çiğköfte Kova",
      category: "kova",
      badge: "Lezzet Ağı",
      description: "Özel spaghetti çiğköfte sunumu ve yoğun sos örgüleriyle alıştığınızın ötesinde eğlenceli ve iştah kabartan kova.",
      portions: "Normal & XL Seçeneği",
      image: "/images/babacan-spagetti-kova.jpg",
      highlight: false,
    },
    {
      id: "gramaj-paket",
      name: "Kilo & Gramaj Çiğköfte",
      category: "gramaj",
      badge: "Günlük Taze El Yoğurması",
      description: "Ev ve toplantı ziyafetleriniz için taze yeşillikleri, lavaşı ve özel nar ekşili soslarıyla birlikte paketlenen günlük taze el yoğurması çiğköfte.",
      portions: "250 gr · 500 gr · 750 gr · 1000 gr · 1500 gr (Aile Boyu)",
      highlight: false,
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Küçükpark Şubemiz & Kasa Alanı",
      subtitle: "Aydınlık, ferah ve sıcak karşılama alanımız",
      src: "/images/babacan-restoran-kasa-genel.jpg",
      alt: "Babacan Çiğköfte Küçükpark kasa ve restoran iç mekânı",
      tag: "Mekânımız",
      span: "col-span-1 md:col-span-2 md:row-span-2",
    },
    {
      id: "gal-2",
      title: "Taze Tezgâh & Garnitürler",
      subtitle: "Günlük hazırlanan çıtır turşular, limon ve taze yeşillikler",
      src: "/images/babacan-taze-tezgah.jpg",
      alt: "Babacan Çiğköfte Küçükpark taze malzeme tezgâhı",
      tag: "Tazelik",
      span: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
      id: "gal-3",
      title: "King Roll & Özel Kova Afişleri",
      subtitle: "Şubemizdeki tescilli konsept ve ürün afişleri",
      src: "/images/babacan-afis-king-roll.jpg",
      alt: "Babacan Çiğköfte King Roll ve Akdeniz Kova şube afişleri",
      tag: "Konsept",
      span: "col-span-1 md:col-span-1 md:row-span-2",
    },
    {
      id: "gal-4",
      title: "Menü & Fiyat Panosu",
      subtitle: "Tüm lezzetlerimizin ve gramajların yer aldığı şube panosu",
      src: "/images/babacan-menu-fiyat-panosu.jpg",
      alt: "Babacan Çiğköfte Küçükpark menü ve fiyat panosu",
      tag: "Menümüz",
      span: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
      id: "gal-5",
      title: "Işıklı Menü Tabelası",
      subtitle: "Tezgâh üstü aydınlatmalı geniş lezzet panosu",
      src: "/images/babacan-isikli-menu-panosu.jpg",
      alt: "Babacan Çiğköfte Küçükpark ışıklı menü panosu genel görünüm",
      tag: "Mekân",
      span: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
      id: "gal-6",
      title: "King Roll Tabağı Sunumu",
      subtitle: "Masalara servis edilen eşsiz restoran sunumumuz",
      src: "/images/babacan-king-roll.jpg",
      alt: "Babacan Çiğköfte King Roll Tabağı masada servis sunumu",
      tag: "Özel Sunum",
      span: "col-span-1 md:col-span-2 md:row-span-1",
    },
  ],
} as const;
