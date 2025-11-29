import { useEffect, useState } from "react";

const TREE_PRICES = {
  Fjelledelgran: 600,
  "Norsk gran": 450,
};

const HEIGHT_SURCHARGE = {
  Fjelledelgran: { limit: 3, extra: 100 },
  "Norsk gran": { limit: 4, extra: 150 },
};

export default function useTreePrice(formData) {
  const [basePrice, setBasePrice] = useState(0);
  const [heightExtra, setHeightExtra] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    //   Get base price based on tree type
    const base = TREE_PRICES[formData.treeType] || 0;
    setBasePrice(base);

    // Height surcharge
    const height = parseFloat(formData.treeHeight) || 2.3;
    let extra = 0;

    if (formData.treeType && HEIGHT_SURCHARGE[formData.treeType]) {
      const { limit, extra: surcharge } = HEIGHT_SURCHARGE[formData.treeType];
      if (height >= limit) extra = surcharge;
    }

    setHeightExtra(extra);
    setTotalPrice(base + extra);
  }, [formData.treeType, formData.treeHeight]);
  return { basePrice, heightExtra, totalPrice };
}
