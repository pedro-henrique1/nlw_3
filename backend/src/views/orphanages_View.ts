import Orphanages from "../models/Orphanages";
import imagesViews from "./imagesViews";

export default {
  render(orphanage: Orphanages) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      open_hours: orphanage.open_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesViews.renderMany(orphanage.images),
    };
  },
  renderMany(orphanages: Orphanages[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
