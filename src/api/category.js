import service from "../common/request";

export default {
  categories() {
    return service.get("/categories");
  },
  tags(categoryId) {
    return service.post("/tags", { categoryId });
  },
};
