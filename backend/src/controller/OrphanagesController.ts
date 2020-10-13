import Orphanages from "../models/Orphanages";
import { getRepository } from "typeorm";
import { Request, Response } from "express";
import orphanageView from "../views/orphanages_View";
import * as Yup from "yup";

export default {
  async index(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = await orphanagesRepository.find({
      relations: ["images"],
    });

    return res.json(orphanageView.renderMany(orphanage));
  },
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const orphanagesRepository = getRepository(Orphanages);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return res.json(orphanageView.render(orphanage));
  },
  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_on_weekends,
    } = req.body;

    const orphanagesRepository = getRepository(Orphanages);

    const requestImage = req.files as Express.Multer.File[];
    const images = requestImage.map((image) => {
      return { path: image.filename };
    });
    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required(),
      instructions: Yup.string().required().max(300),
      open_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.string().required(),
    });
    await schema.validate(data, {
      abortEarly: false,
    });
    const orphanage = orphanagesRepository.create(data);
    await orphanagesRepository.save(orphanage);

    res.status(201).json(orphanage);
  },
};
