import mediaServices from "../../services/MediaServices"; 

export default {
  state: () => ({
    media: [],
  }),
  getters: {
    getMediaList: (state) => state.media,
  },
  actions: {
    async fetchMedia({commit}) {
        const { data: mediaData } = await mediaServices.getMedia();
        commit("setMedia", mediaData);
    },
  async createMedia({commit},data) {
    const { data: MediaData } = await mediaServices.addMedia(data);
    commit("setMedia", MediaData);
},
  async updateMediaData({commit},data) {
    const { data: MediaData } = await mediaServices.updateMedia(data);
    commit("setMedia", MediaData);
},
  async removeMedia({commit},id) {
  const { data: MediaData } = await mediaServices.removeMedia(id);
  commit("setMedia", MediaData);
}
  },
  mutations: {
    setMedia(state, data) {
        state.media = data;
    }
  },
  namespaced:true,
};
