import service from "../common/request";

export default {
  categories() {
    return service.get("/categories");
  },
};
