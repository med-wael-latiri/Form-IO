import http from "./http-common";

class TutorialDataService {
  getAll() {
    return http.get("/forms");
  }

  get(id) {
    return http.get(`/forms/${id}`);
  }

  create(data) {
    return http.post("/forms", data);
  }
  creates(data) {
    return http.post("/formvalues", data);
  }

  update(id, data) {
    return http.put(`/forms/${id}`, data);
  }

  delete(id) {
    return http.delete(`/forms/${id}`);
  }

  deleteAll() {
    return http.delete(`/forms`);
  }

  findByTitle(title) {
    return http.get(`/forms?title=${title}`);
  }
}

export default new TutorialDataService();
