import searchRoutes from "./search/search.routes";
import orderRoutes from "./orders/orders.routes";
import trackingRoutes from "./tracking/tracking.routes";

export default [...searchRoutes, ...orderRoutes, ...trackingRoutes];