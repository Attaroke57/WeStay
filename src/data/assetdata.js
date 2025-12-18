// src/data/assetsData.js

export const assetCategories = [
  "AC",
  "Kasur",
  "Lemari",
  "Meja Belajar",
  "Kursi",
  "Mesin Cuci",
  "CCTV",
  "WiFi Router",
  "Kulkas",
  "Dispenser"
];

export const assetStatuses = {
  good: { label: "Baik", color: "green" },
  needCheck: { label: "Perlu Dicek", color: "yellow" },
  broken: { label: "Rusak", color: "red" },
  maintenance: { label: "Dalam Perbaikan", color: "blue" }
};

export const assets = [
  {
    id: 1,
    name: "AC Daikin 1 PK",
    category: "AC",
    assetCode: "AC-001",
    property: "Kos Mawar",
    location: "Kamar A-12",
    status: "good",
    lastChecked: "2024-12-10",
    nextCheck: "2025-01-10",
    purchaseDate: "2023-06-15",
    purchasePrice: 3500000,
    condition: "Dingin normal, tidak ada suara berisik",
    image: "https://images.unsplash.com/photo-1631545806609-f6a4c6e6a0e7?w=200"
  },
  {
    id: 2,
    name: "AC Sharp 3/4 PK",
    category: "AC",
    assetCode: "AC-002",
    property: "Kos Mawar",
    location: "Kamar A-05",
    status: "needCheck",
    lastChecked: "2024-11-15",
    nextCheck: "2024-12-15",
    purchaseDate: "2023-08-20",
    purchasePrice: 2800000,
    condition: "Mulai ada suara berisik, perlu pengecekan",
    image: "https://images.unsplash.com/photo-1631545806609-f6a4c6e6a0e7?w=200"
  },
  {
    id: 3,
    name: "Kasur Spring Bed Single",
    category: "Kasur",
    assetCode: "KSR-001",
    property: "Kos Mawar",
    location: "Kamar A-12",
    status: "good",
    lastChecked: "2024-12-08",
    nextCheck: "2025-03-08",
    purchaseDate: "2023-05-10",
    purchasePrice: 1500000,
    condition: "Kondisi bagus, tidak ada kerusakan",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=200"
  },
  {
    id: 4,
    name: "Lemari Pakaian 2 Pintu",
    category: "Lemari",
    assetCode: "LMR-001",
    property: "Kos Mawar",
    location: "Kamar A-12",
    status: "good",
    lastChecked: "2024-12-01",
    nextCheck: "2025-06-01",
    purchaseDate: "2023-05-10",
    purchasePrice: 800000,
    condition: "Pintu dan engsel berfungsi dengan baik",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200"
  },
  {
    id: 5,
    name: "Mesin Cuci Samsung 8kg",
    category: "Mesin Cuci",
    assetCode: "MC-001",
    property: "Kos Mawar",
    location: "Area Laundry",
    status: "broken",
    lastChecked: "2024-12-12",
    nextCheck: "2024-12-20",
    purchaseDate: "2023-04-05",
    purchasePrice: 2500000,
    condition: "Tidak bisa berputar, perlu perbaikan motor",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=200"
  },
  {
    id: 6,
    name: "CCTV Hikvision Outdoor",
    category: "CCTV",
    assetCode: "CCTV-001",
    property: "Kos Mawar",
    location: "Pintu Utama",
    status: "good",
    lastChecked: "2024-12-14",
    nextCheck: "2025-01-14",
    purchaseDate: "2023-03-20",
    purchasePrice: 1200000,
    condition: "Gambar jernih, rekaman normal",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=200"
  },
  {
    id: 7,
    name: "AC LG Dual Cool 1 PK",
    category: "AC",
    assetCode: "AC-003",
    property: "Kos Melati",
    location: "Kamar B-08",
    status: "maintenance",
    lastChecked: "2024-12-13",
    nextCheck: "2024-12-18",
    purchaseDate: "2023-07-10",
    purchasePrice: 3200000,
    condition: "Sedang dalam perbaikan service rutin",
    image: "https://images.unsplash.com/photo-1631545806609-f6a4c6e6a0e7?w=200"
  },
  {
    id: 8,
    name: "Kasur Busa Royal Foam",
    category: "Kasur",
    assetCode: "KSR-002",
    property: "Kos Melati",
    location: "Kamar B-08",
    status: "needCheck",
    lastChecked: "2024-11-20",
    nextCheck: "2024-12-20",
    purchaseDate: "2023-06-15",
    purchasePrice: 1000000,
    condition: "Mulai kempes di bagian tengah",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=200"
  },
  {
    id: 9,
    name: "WiFi Router TP-Link",
    category: "WiFi Router",
    assetCode: "WIFI-001",
    property: "Kos Melati",
    location: "Ruang Server",
    status: "good",
    lastChecked: "2024-12-15",
    nextCheck: "2025-01-15",
    purchaseDate: "2023-08-01",
    purchasePrice: 500000,
    condition: "Koneksi stabil, tidak ada gangguan",
    image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=200"
  },
  {
    id: 10,
    name: "Meja Belajar Minimalis",
    category: "Meja Belajar",
    assetCode: "MJ-001",
    property: "Kos Anggrek",
    location: "Kamar C-05",
    status: "good",
    lastChecked: "2024-12-05",
    nextCheck: "2025-06-05",
    purchaseDate: "2023-05-20",
    purchasePrice: 400000,
    condition: "Kokoh dan stabil",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=200"
  },
  {
    id: 11,
    name: "Kursi Belajar Ergonomis",
    category: "Kursi",
    assetCode: "KRS-001",
    property: "Kos Anggrek",
    location: "Kamar C-05",
    status: "broken",
    lastChecked: "2024-12-11",
    nextCheck: "2024-12-19",
    purchaseDate: "2023-05-20",
    purchasePrice: 350000,
    condition: "Roda patah, perlu diganti",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=200"
  },
  {
    id: 12,
    name: "CCTV Indoor Dome",
    category: "CCTV",
    assetCode: "CCTV-002",
    property: "Kos Anggrek",
    location: "Koridor Lantai 1",
    status: "needCheck",
    lastChecked: "2024-11-25",
    nextCheck: "2024-12-25",
    purchaseDate: "2023-04-10",
    purchasePrice: 800000,
    condition: "Gambar agak blur, perlu pembersihan lensa",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=200"
  },
  {
    id: 13,
    name: "Kulkas 2 Pintu Samsung",
    category: "Kulkas",
    assetCode: "KLK-001",
    property: "Kos Dahlia",
    location: "Dapur Bersama",
    status: "good",
    lastChecked: "2024-12-12",
    nextCheck: "2025-01-12",
    purchaseDate: "2023-03-15",
    purchasePrice: 3000000,
    condition: "Dingin optimal, tidak ada masalah",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=200"
  },
  {
    id: 14,
    name: "Dispenser Miyako Hot & Cool",
    category: "Dispenser",
    assetCode: "DSP-001",
    property: "Kos Dahlia",
    location: "Ruang Tamu",
    status: "good",
    lastChecked: "2024-12-10",
    nextCheck: "2025-01-10",
    purchaseDate: "2023-07-20",
    purchasePrice: 600000,
    condition: "Panas dan dingin berfungsi normal",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=200"
  },
  {
    id: 15,
    name: "Mesin Cuci LG Front Load",
    category: "Mesin Cuci",
    assetCode: "MC-002",
    property: "Kos Kenanga",
    location: "Area Laundry",
    status: "needCheck",
    lastChecked: "2024-11-28",
    nextCheck: "2024-12-28",
    purchaseDate: "2023-05-05",
    purchasePrice: 4500000,
    condition: "Ada kebocoran air kecil, perlu dicek seal",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=200"
  }
];

export const getAssetStats = () => {
  return {
    total: assets.length,
    good: assets.filter(a => a.status === "good").length,
    needCheck: assets.filter(a => a.status === "needCheck").length,
    broken: assets.filter(a => a.status === "broken").length,
    maintenance: assets.filter(a => a.status === "maintenance").length,
    totalValue: assets.reduce((sum, a) => sum + a.purchasePrice, 0)
  };
};

export const getUniqueProperties = () => {
  return [...new Set(assets.map(a => a.property))];
};