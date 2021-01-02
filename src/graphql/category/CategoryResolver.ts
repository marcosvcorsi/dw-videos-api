import { Resolver, Query } from "type-graphql";
import CategoryModel from "../../models/CategoryModel";
import Category from "./Category";

@Resolver(Category)
class CategoryResolver {
  
  @Query(() => [Category])
  async categories() {
    const categories = await CategoryModel.find();
    
    return categories;
  }
}

export default CategoryResolver;