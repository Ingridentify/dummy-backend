import { Recipe } from "../model/index.js";

Recipe.clear();

Recipe.create({
  name: "Nasi Goreng",
  cuisine: "Indonesia",
  recipes: "https://www.masakapahariini.com/resep/resep-nasi-goreng/",
  imageUrl:
    "https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg",
});

Recipe.create({
  name: "Nasi Kuning",
  cuisine: "Indonesia",
  recipes: "https://www.masakapahariini.com/resep/resep-nasi-kuning/",
  imageUrl:
    "https://www.sasa.co.id/medias/page_medias/nasi_kuning_rice_cooker.jpg",
});

Recipe.create({
  name: "Nasi Uduk",
  cuisine: "Indonesia",
  recipes: "https://www.masakapahariini.com/resep/resep-nasi-uduk/",
  imageUrl:
    "https://www.blibli.com/friends-backend/wp-content/uploads/2023/04/B300028-Cover-resep-nasi-uduk.jpg",
});

Recipe.create({
  name: "Nasi Liwet",
  cuisine: "Indonesia",
  recipes: "https://www.masakapahariini.com/resep/resep-nasi-liwet/",
  imageUrl:
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/a5786edc81a00587a470c25b13b10924/Derivates/b346197f18531cd806d52165903f8da023e3bf84.jpg",
});

Recipe.create({
  name: "Nasi Bakar",
  cuisine: "Indonesia",
  recipes: "https://www.masakapahariini.com/resep/resep-nasi-bakar/",
  imageUrl:
    "https://asset.kompas.com/crops/5GT-nmWVwnzqL6JiiAiyevIqSXU=/0x1774:3376x4025/750x500/data/photo/2022/12/06/638ee2b3e1b20.jpg",
});
