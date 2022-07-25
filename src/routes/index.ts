import uploadProductRoute from "./uploadProduct.route";
import getProductsRoute from "./getProducts.route";
import signupRoute from "./signupRoute";
import loginRoute from "./loginRoute";
import addToCardRoute from "./addToCardRoute";
import getCardRoute from "./getCardRoute";
import deleteProductByIdRoute from "./deleteProductByIdRoute";
import archiveProductRoute from "./archiveProductRoute";
import getArchivedProductRoute from "./getArchivedProductRoute";

const routes: any[] = [
  uploadProductRoute,
  getProductsRoute,
  signupRoute,
  loginRoute,
  addToCardRoute,
  getCardRoute,
  deleteProductByIdRoute,
  archiveProductRoute,
  getArchivedProductRoute,
];

export default routes;
