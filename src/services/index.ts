import searchRoutes from "./search/search.routes";
import orderRoutes from "./orders/orders.routes";
import trackingRoutes from "./tracking/tracking.routes";
import userRoutes from "./users/users.routes";

export default [...searchRoutes, ...orderRoutes, ...trackingRoutes, ...userRoutes];