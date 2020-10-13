import { Router } from "express";
import OrphanagesController from "./controller/OrphanagesController";
import multer from "multer";
import uploadConfig from "./config/upload";

const routes = Router();
const upload = multer(uploadConfig);

routes.post("/orphanages", upload.array("image"), OrphanagesController.create);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);

export default routes;
