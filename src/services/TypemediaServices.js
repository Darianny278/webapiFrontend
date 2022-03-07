import http from "./axios";

export default {
  async getTypemedia() {
    try {
        return await http.get(`/TypeMedia`);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    async addTypeMedia(typemedia) {
      try {
          return await http.post(`/TypeMedia`,typemedia);
        } catch (err) {
          console.log(err);
          throw err;
        }
      } ,

    async updateTypeMedia(typemedia) {
      try {
          return await http.put(`/TypeMedia/${typemedia.id}`,typemedia);
        } catch (err) {
          console.log(err);
          throw err;
        }
      } ,

      async removeTypeMedia(id) {
        try {
            return await http.delete(`/typeMedia/${id}`);
          } catch (err) {
            console.log(err);
            throw err;
          }
        } 
}