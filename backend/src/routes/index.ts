import express from "express"
import user from './user.routes'
import auth from './auth.routes'
const router = express.Router()

router.get('/healthcheck', (_, res) => res.status(200))
router.use(user);
router.use(auth)

// function routes(app: Express) {
//     app.get('/', (req: Request, res: Response) => {
//         res.sendStatus(200)
//     })

//     app.use("/api/users", userRoute);
//     app.use("/api/auth", authRoute);
//     app.use("/api/products", productRoute);
//     app.use("/api/carts", cartRoute);
//     app.use("/api/orders", orderRoute);
//     app.use("/api/checkout", stripeRoute);
// }

export default router