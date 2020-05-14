import axiosInstance from "../../api";

export class AuthAction {
  getTestData() {
    axiosInstance.get(`people/`)
      .then(({data}) => this.tasks = data.results);
  }
}
