import { Router } from "express"
import book from "./books.routes"

const router = Router()

router.use("/api/v1/book", book)

export default router;
