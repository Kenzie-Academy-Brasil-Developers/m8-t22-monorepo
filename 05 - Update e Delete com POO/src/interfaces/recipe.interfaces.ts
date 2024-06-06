// export interface Recipe {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export type Recipe = {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

// Quero todos os campos de Recipe menos o id, createdAt e updatedAt (omitir)
// export type RecipeCreateData = Omit<Recipe, "id" | "createdAt" | "updatedAt">;

// Quero somente os campos de Recipe title e content
export type RecipeCreateData = Pick<Recipe, "title" | "content">;

export type RecipeUpdateData = Partial<RecipeCreateData>;

// export type Recipe2UpdateData = {
//   title?: string;
//   content?: string;
// };
