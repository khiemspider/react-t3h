const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Nguyễn Huy Tưởng" },
    position
  },
  {
    id: "1a",
    data: { label: "Nguyễn thị na" },
    position
  },
  {
    id: "2",
    data: { label: "Nguyễn Nam Cường" },
    position
  },
  {
    id: "2a",
    data: { label: "Nguyễn Văn Thanh" },
    position
  },
  {
    id: "2b",
    data: { label: "Nguyễn Sỹ Thanh" },
    position
  },
  {
    id: "2c",
    data: { label: "Nguyễn Bích Phương" },
    position
  },
  {
    id: "2d",
    data: { label: "Nguyễn Kim Hải" },
    position
  },
  {
    id: "3",
    data: { label: "Nguyễn Tiến Dũng" },
    position
  },
  
  {
    id: "4",
    data: { label: "Nguyễn Hà" },
    position
  },
  {
    id: "5",
    data: { label: "Nguyễn Thu" },
    position
  },
  {
    id: "6",

    data: { label: "Nguyễn Văn Hùng" },
    position
  },
  {
    id: "7",
    data: { label: "Nguyễn Văn sỹ " },
    position
  }
];

export const initialEdges = [
  { id: "e12", source: "1", target: "2", type: edgeType, animated: true },
  { id: "e13", source: "1", target: "3", type: edgeType, animated: true },
  { id: "e22a", source: "2", target: "2a", type: edgeType, animated: true },
  { id: "e22b", source: "2", target: "2b", type: edgeType, animated: true },
  { id: "e22c", source: "2", target: "2c", type: edgeType, animated: true },
  { id: "e2c2d", source: "2c", target: "2d", type: edgeType, animated: true },
  { id: "e2a4", source: "2a", target: "4", type: edgeType, animated: true },
  { id: "e2d5", source: "2d", target: "5", type: edgeType, animated: true },
  { id: "e2b6", source: "2b", target: "6", type: edgeType, animated: true },
  { id: "e37", source: "3", target: "7", type: edgeType, animated: true }
];
