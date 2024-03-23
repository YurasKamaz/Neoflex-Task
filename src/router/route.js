import Basket from "../pages/basket";
import Catalog from "../pages/catalog";
import { BASKET_ROUTE } from "../utils/consts";
import { CATALOG_ROUTE } from "../utils/consts";

export const routes = [
    {path: BASKET_ROUTE, Component: Basket},
    {path: CATALOG_ROUTE, Component: Catalog}
]