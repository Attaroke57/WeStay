export const assets = [
  {
    id: 1,
    name: "AC Unit - Ruang Tamu",
    assetCode: "AC-001",
    property: "Villa Puncak",
    category: "Elektronik",
    status: "good",
    location: "Ruang Tamu Lantai 1",
    purchaseDate: "2023-01-15",
    value: 5000000,
  },
  {
    id: 2,
    name: "Sofa Kulit Premium",
    assetCode: "FUR-001",
    property: "Villa Puncak",
    category: "Furniture",
    status: "good",
    location: "Living Room",
    purchaseDate: "2023-02-20",
    value: 15000000,
  },
  {
    id: 3,
    name: "Kulkas Liebherr",
    assetCode: "KIT-001",
    property: "Villa Puncak",
    category: "Elektronik",
    status: "maintenance",
    location: "Dapur",
    purchaseDate: "2022-06-10",
    value: 8000000,
  },
  {
    id: 4,
    name: "Tempat Tidur King Size",
    assetCode: "FUR-002",
    property: "Apartemen Senayan",
    category: "Furniture",
    status: "good",
    location: "Master Bedroom",
    purchaseDate: "2023-03-05",
    value: 12000000,
  },
  {
    id: 5,
    name: "Smart TV 75 inch",
    assetCode: "ELE-002",
    property: "Apartemen Senayan",
    category: "Elektronik",
    status: "inactive",
    location: "Entertainment Room",
    purchaseDate: "2022-12-15",
    value: 20000000,
  },
];

export const assetCategories = ["Elektronik", "Furniture", "Dekorasi", "Peralatan Dapur"];

export function getAssetStats() {
  const total = assets.length;
  const good = assets.filter((a) => a.status === "good").length;
  const maintenance = assets.filter((a) => a.status === "maintenance").length;
  const inactive = assets.filter((a) => a.status === "inactive").length;

  return { total, good, maintenance, inactive };
}

export function getUniqueProperties() {
  return [...new Set(assets.map((a) => a.property))];
}
