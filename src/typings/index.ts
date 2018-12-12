export type Category = "food" | "clothing" | "housing" | "transportation" | "education" | "entertainment" | "other";
export type PermissionStatus = "undetermined" | "authorized" | "denied" | "restricted";

export interface SpendingLabel {
  category: Category;
  name: string;
  categoryMandarin?: string;
  categoryIcon?: string;
  id?: string;
  createdAt?: Date;
}

export interface AppState {
  spendingLabel: {
    ids: string[];
    byId: { [id: string]: SpendingLabel };
  };
}
