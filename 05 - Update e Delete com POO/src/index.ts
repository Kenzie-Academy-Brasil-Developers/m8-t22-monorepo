/*
  Comportamentos da classe (métodos)
  Create - Criação de uma receita
  Read - Leitura de todas as receitas
  Update - Atualização de uma receita que já existe (por id)
  Delete - Deleção de uma receita da lista de receitas (por id)
*/

import {
  Recipe,
  RecipeCreateData,
  RecipeUpdateData,
} from "./interfaces/recipe.interfaces";

/*
  Encapsulamento:
    - Posso definir os niveis de acesso a determinados atributos/metodos através de modificadores
    de acesso:
      - public -> Todos os objetos podem acessar todos os métodos e atributos da classe,
      inclusive reatribuir seus valores.
      - private -> O atributo/método só pode ser utilizado dentro do contexto da classe (ou por filhos diretos)
*/

class RecipeService {
  // public recipeDatabase: Recipe[] = [];
  // public id = 1;
  private recipeDatabase: Recipe[] = [];
  private id = 1;

  // CRIAÇÃO
  create(data: RecipeCreateData): Recipe {
    const now = new Date();

    const newRecipe = {
      id: this.id,
      createdAt: now,
      updatedAt: now,
      ...data,
    };

    this.recipeDatabase.push(newRecipe);

    this.id++;

    return newRecipe;
  }

  // LEITURA
  read() {
    return this.recipeDatabase;
  }

  // ATUALIZAÇÃO
  update(recipeId: number, dataToBeUpdated: RecipeUpdateData) {
    // 1. Encontrar o registro pelo id
    const foundRecipe = this.recipeDatabase.find(
      (recipe) => recipe.id === recipeId
    );
    // early error return
    if (!foundRecipe) {
      return "Recipe not found";
    }

    // 2. Atualizar as chaves correspondentes
    // 2.1 capturar a referencia do objeto a ser modificado, e modificar a referencia (NAO FUNCIONA COM .find)
    // foundRecipe = {
    //   ...foundRecipe, // Preserva os dados originais
    //   ...dataToBeUpdated, // substitui qualquer chave anterior que tenha o mesmo nome de chave
    //   updatedAt: new Date(),
    // };

    // 2.2 splice -> remove um item (mas também pode adicionar um novo item onde o anterior foi removido)
    const foundIndex = this.recipeDatabase.findIndex(
      (recipe) => recipe.id === recipeId
    );

    const updatedRecipe = {
      ...foundRecipe!,
      ...dataToBeUpdated,
      // updatedAt: new Date(),
      updatedAt: new Date(),
    };

    this.recipeDatabase.splice(foundIndex, 1, updatedRecipe);

    return updatedRecipe;
  }

  delete(recipeId: number) {
    // 1. Encontrar o registro pelo id
    const foundIndex = this.recipeDatabase.findIndex(
      (recipe) => recipe.id === recipeId
    );

    // early error return
    if (foundIndex === -1) {
      return "Recipe not found";
    }

    this.recipeDatabase.splice(foundIndex, 1);

    return "Recipe deleted successfully";
  }
}

const recipeInstance = new RecipeService();

const recipeA = recipeInstance.create({
  title: "Receita A",
  content: "Conteúdo receita A",
});

const recipeB = recipeInstance.create({
  title: "Receita B",
  content: "Conteudo receita B",
});

// const recipeB = recipeInstance.create({
//   title: "Receita B",
//   content: "Conteudo receita B",
// });

// ESPERAR 1 SEGUNDO ANTES DE EXECUTAR O RESTO

// Update
// Caso 1 - Receita existe - atualizando somente o title
// const dataOnlyTitle = { title: "Receita B Atualizada Parcialmente" };
// const updatedRecipe = recipeInstance.update(2, dataOnlyTitle);

// Caso 2 - Receita existe - atualizando somente o content
// const dataOnlyContent = { content: "Desc B Atualizada Parcialmente" };
// const updatedRecipe = recipeInstance.update(2, dataOnlyContent);

// Caso 3 - Receita existe - title e content atualizados
// const data = {
//   title: "Receita B Atualizada Completamente",
//   content: "Desc Atualizada Completamente",
// };
// const updatedRecipe = recipeInstance.update(2, data);

// Caso 4 - Id de receita que não existe
setTimeout(() => "aguardando...", 3000);
const dataOnlyTitle = { title: "Receita B Atualizada Parcialmente" };
const updatedRecipe = recipeInstance.update(10000, dataOnlyTitle);

console.log("\nUpdate de Receita:");
console.log(updatedRecipe);

// console.log("\nDelete de Receita:");
// Caso 1 - Receita existe
// const deletedRecipe = recipeInstance.delete(2);
// console.log(deletedRecipe);

// Caso 2 - Receita não existe
// const deletedRecipe = recipeInstance.delete(200);
// console.log(deletedRecipe);

console.log("\nDatabase de Receitas:");
console.log(recipeInstance.read());
