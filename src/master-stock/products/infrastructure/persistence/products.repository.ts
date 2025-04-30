import { Injectable } from "@nestjs/common";
import { BaseRepository } from "../../../../base/base_repository.repository";
import { Product } from "../../entities/products.entity";

@Injectable()
export class ProductRepository extends BaseRepository<Product> {

}