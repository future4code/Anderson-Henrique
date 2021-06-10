import { Recipe } from "./Recipe"

export type User = {
   id: string,
   name: string,
   email: string,
   recipes: Recipe[],
   password: string
}

export type SignupInput = {
   name: string,
   email: string,
   password: string
}