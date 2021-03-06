import { Category } from "../typings";
import _ from "lodash";

import { uid } from "../utils";

const DEFAULT_SPENDING_LABELS: Array<{ category: Category; name: string }> = [
  { category: "food", name: "早餐" },
  { category: "food", name: "午餐" },
  { category: "food", name: "晚餐" },
  { category: "clothing", name: "衣服" },
  { category: "clothing", name: "褲子" },
  { category: "clothing", name: "鞋子" },
  { category: "housing", name: "水費" },
  { category: "housing", name: "電費" },
  { category: "housing", name: "瓦斯費" },
  { category: "housing", name: "房租" },
  { category: "transportation", name: "加油" },
  { category: "transportation", name: "公車" },
  { category: "transportation", name: "捷運" },
  { category: "transportation", name: "計程車" },
  { category: "education", name: "書" },
  { category: "entertainment", name: "電話費" },
  { category: "other", name: "悠遊卡" },
  { category: "other", name: "看醫生" },
];

export default _.map(DEFAULT_SPENDING_LABELS, label => ({
  ...label,
  id: uid(),
  createdAt: Date.now(),
}));
