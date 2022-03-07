import http from "./axios";
export default {
  async getMedia() {
    try {
        return await http.get(`https://localhost:5001/Medias`);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
      async addMedia(media) {
        try {
            return await http.post(`/Medias`,media);
          } catch (err) {
            console.log(err);
            throw err;
          }
        } ,
  
      async updateMedia(media) {
        try {
            return await http.put(`/Medias/${media.id}`,media);
          } catch (err) {
            console.log(err);
            throw err;
          }
        } ,
  
        async removeMedia(id) {
          try {
              return await http.delete(`/Medias/${id}`);
            } catch (err) {
              console.log(err);
              throw err;
            }
          } 
}