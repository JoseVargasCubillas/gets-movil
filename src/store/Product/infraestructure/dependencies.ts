import { MysqlProductRepository } from "./mysqlProductRepository";
import { RegisterProductUseCase } from "../appliaction/registerProductUseCase";
import { RegisterProductController } from "./controllers/registerProductController";
import { GetProductUseCase } from "../appliaction/getProductUseCase";
import { GetProductController } from "./controllers/getProdutController";
import { GetProductsUseCase } from "../appliaction/getProductsUseCase";
import { GetProductsController } from "./controllers/getProductsController";
import { UpdateProductByUuidUsecase } from "../appliaction/updateProductByUuidUseCase";
import { UpdateProductByUuidController } from "./controllers/updateProductoByUuidController";

export const mysqlProductRepository = new MysqlProductRepository();

export const registerProductUseCase = new RegisterProductUseCase(mysqlProductRepository);
export const registerProductController = new RegisterProductController(registerProductUseCase);

export const getProductUseCase = new GetProductUseCase(mysqlProductRepository);
export const getProdutController = new GetProductController(getProductUseCase);

export const getProductsUseCase = new GetProductsUseCase(mysqlProductRepository);
export const getProductsController = new GetProductsController(getProductsUseCase);

export const updateProductByUuidUsecase = new UpdateProductByUuidUsecase(mysqlProductRepository);
export const updateProductByUuidController = new UpdateProductByUuidController(updateProductByUuidUsecase)