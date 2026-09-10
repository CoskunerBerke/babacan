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
  mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Babacan+%C3%87i%C4%9Fk%C3%B6fte+K%C3%BC%C3%A7%C3%BCkpark+Bornova+%C4%B0zmir",
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
    { id: "spesiyal", name: "Öne Çıkanlar & Menüler" },
    { id: "kova", name: "Babacan Kovalar" },
    { id: "tabak", name: "Restoran Sunumları" },
    { id: "gramaj", name: "Porsiyon & Kilo" },
  ],
  menuItems: [
    {
      id: "kanka-menu",
      name: "Kanka Menü",
      category: "spesiyal",
      badge: "İkili Özel Menü",
      description: "Özel lavaşında bol malzemeli 2 adet çiğköfte dürüm, köpüklü soğuk yayık ayranı, taze nane yaprakları ve turşu acı biberler eşliğinde doyurucu lezzet.",
      portions: "2 Adet Dürüm + 2 Ayran + Garnitür",
      image: "/images/babacan-kanka-menu.jpg",
      highlight: true,
    },
    {
      id: "citir-kova",
      name: "Çıtır Kova",
      category: "kova",
      badge: "Patentli Konsept",
      description: "Babacan'ın Türkiye'de tek olan özel çıtır cipsli kova sunumu. 150 gr çiğköfte, özel soslar ve çıtır lezzet dokusu.",
      portions: "Normal (150 gr) & XL Seçeneği",
      image: "/images/babacan-citir-kova.jpg",
      highlight: true,
    },
    {
      id: "super-kova",
      name: "Süper Kova",
      category: "kova",
      badge: "Çok Sevilen",
      description: "Tüm özel sosların zengin harmanı, nar ekşisi, taze yeşillikler ve dilimlenmiş özel roll çiğköfteler.",
      portions: "Normal (150 gr) & XL (225 gr)",
      highlight: false,
    },
    {
      id: "akdeniz-kova",
      name: "Akdeniz Kova",
      category: "kova",
      badge: "Taptaze",
      description: "Bol taze nane, göbek marul, kırmızı lahana ve hafif Akdeniz esintili özel sos ile ferah kova çiğköfte deneyimi.",
      portions: "Normal (150 gr) & XL (225 gr)",
      highlight: false,
    },
    {
      id: "king-roll",
      name: "King Roll Tabağı",
      category: "tabak",
      badge: "Krallara Yakışır",
      description: "Halka dizilimli nefis roll dilimleri, ortasında özel akışkan dip sos kasesi, kornişon turşular ve taze garnitürler.",
      portions: "Özel Restoran Porsiyonu",
      image: "/images/babacan-afis-king-roll.jpg",
      highlight: true,
    },
    {
      id: "class-kova",
      name: "Class Kova (Kaşarlı)",
      category: "kova",
      badge: "Sıcak Sunum",
      description: "Fırınlanmış sıcak kaşar peyniri kaplamasıyla alışılmışın ötesinde gurme bir kova çiğköfte yorumu.",
      portions: "Normal & XL Seçeneği",
      highlight: false,
    },
    {
      id: "star-kova",
      name: "Star Kova (Cheddarlı)",
      category: "kova",
      badge: "Sıcak Sunum",
      description: "Eritilmiş cheddar sosu ile zenginleştirilmiş, çiğköftenin acısıyla peynirin uyumunu yakalayan özel sunum.",
      portions: "Normal & XL Seçeneği",
      highlight: false,
    },
    {
      id: "kiremit-cigkofte",
      name: "Kiremitte Çiğköfte",
      category: "tabak",
      badge: "Fırın Spesiyali",
      description: "Toprak kiremitte, fırından yeni çıkmış sıcak peynirli ve özel baharatlı restoran konsepti sunumu.",
      portions: "Tek Kişilik Restoran Tabağı",
      highlight: false,
    },
    {
      id: "osmanli-tabagi",
      name: "Osmanlı Tabağı",
      category: "tabak",
      badge: "Geleneksel Ziyafet",
      description: "Özenle sıkılmış çiğköfteler, zengin yeşillik buketi, domates dilimleri, turşular ve nar ekşisiyle klasik şölen.",
      portions: "Doyurucu Porsiyon",
      highlight: false,
    },
    {
      id: "gramaj-paket",
      name: "Kilo & Gramaj Çiğköfte",
      category: "gramaj",
      badge: "Günlük Taze El Yoğurması",
      description: "Ev ve toplantı ziyafetleriniz için taze yeşillikleri, lavaşı ve özel soslarıyla birlikte paketlenen günlük el yoğurması çiğköfte.",
      portions: "250 gr · 500 gr · 750 gr · 1000 gr · 1500 gr (Aile Boyu)",
      highlight: false,
    },
    {
      id: "antep-fistikli-cevizli",
      name: "Antep Fıstıklı & Cevizli Spesiyal",
      category: "spesiyal",
      badge: "Gurme Seçim",
      description: "Özel zeytinyağı, çekilmiş Antep fıstığı ve iri ceviz taneleriyle harmanlanan gurme çiğköfte yoğurması.",
      portions: "Özel Yoğurma Paketi",
      highlight: false,
    },
  ],
  gallery: [
    {
      id: "gal-1",
      title: "Kanka Menü & Ayran Sunumu",
      subtitle: "Çift dürüm, köpüklü yayık ayranı ve taze garnitürler",
      src: "/images/babacan-kanka-menu.jpg",
      alt: "Babacan Çiğköfte Kanka Menü iki dürüm ve ayran servisi",
      tag: "Özel Menü",
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
      title: "Küçükpark Şube İç Mekânı",
      subtitle: "Aydınlık, ferah ve samimi karşılama alanı",
      src: "/images/babacan-restoran-kasa-genel.jpg",
      alt: "Babacan Çiğköfte Küçükpark kasa ve restoran iç mekânı",
      tag: "Mekân",
      span: "col-span-1 md:col-span-1 md:row-span-2",
    },
    {
      id: "gal-4",
      title: "Çıtır Kova Konsepti",
      subtitle: "Babacan'ın Türkiye'de tek olan patentli kova çiğköftesi",
      src: "/images/babacan-citir-kova.jpg",
      alt: "Babacan Çiğköfte Çıtır Kova sunumu",
      tag: "Patentli Kova",
      span: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
      id: "gal-5",
      title: "King Roll & Özel Kova Sunumları",
      subtitle: "Şubemizdeki özel sunum ve lezzet afişleri",
      src: "/images/babacan-afis-king-roll.jpg",
      alt: "Babacan Çiğköfte King Roll ve Akdeniz Kova afişleri",
      tag: "Konsept",
      span: "col-span-1 md:col-span-2 md:row-span-1",
    },
  ],
} as const;
