/*
  Comportamentos da classe (métodos)
  Create - Criação de uma receita
  Read - Leitura de todas as receitas
  Update - Atualização de uma receita que já existe (por id)
  Delete - Deleção de uma receita da lista de receitas (por id)
*/

import { Recipe, RecipeCreateData } from "./interfaces/recipe.interfaces";

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

  read() {
    return this.recipeDatabase;
  }

  /*
    TODO: DESAFIO
    - Implementar um método de ATUALIZAÇÃO de uma receita pelo seu id.
    - Quantos campos atualizados? (Um, Alguns ou Todos) (Atualização Parcial)
  */
}

const recipeInstance = new RecipeService();

// recipeInstance.id = 100;

const recipeA = recipeInstance.create({
  title: "Receita A",
  content: "Conteúdo receita A",
});

const recipeB = recipeInstance.create({
  title: "Receita B",
  content: "Conteudo receita B",
});

// console.log(recipeA);
// recipeInstance.recipeDatabase = [];
// console.log(recipeInstance.recipeDatabase);

console.log(recipeInstance.read());
