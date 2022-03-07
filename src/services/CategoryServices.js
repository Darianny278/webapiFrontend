import http from "./axios";
export default {
  async getCategory() {
    try {
        return await http.get(`/Categories`);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },

    async addCategory(category) {
      try {
          return await http.post(`/Categories`,category);
        } catch (err) {
          console.log(err);
          throw err;
        }
      } ,

    async updateCategory(category) {
      try {
          return await http.put(`/Categories/${category.id}`,category);
        } catch (err) {
          console.log(err);
          throw err;
        }
      } ,

      async removeCategory(id) {
        try {
            return await http.delete(`/Categories/${id}`);
          } catch (err) {
            console.log(err);
            throw err;
          }
        } 
}