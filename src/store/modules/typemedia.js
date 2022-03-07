import TypeMediaServices from "../../services/TypemediaServices"; 

export default {
  state: () => ({
    typeMedia: [],
  }),
  getters: {
    getTypeMediaList: (state) => state.typeMedia,
  },
  actions: {
    async fetchTypeMedia({commit}) {
        const { data: typeMediaData } = await TypeMediaServices.getTypemedia();
        commit("setTypeMedia", typeMediaData);
    },
    async createTypeMedia({commit},data) {
      const { data: TypeMediaData } = await TypeMediaServices.addTypeMedia(data);
      commit("setTypeMedia", TypeMediaData);
  },
    async updateTypeMediaData({commit},data) {
      const { data: TypeMediaData } = await TypeMediaServices.updateTypeMedia(data);
      commit("setTypeMedia", TypeMediaData);
  },
    async removeTypeMedia({commit},id) {
    const { data: TypeMediaData } = await TypeMediaServices.removeTypeMedia(id);
    commit("setTypeMedia", TypeMediaData);
}
  },
  mutations: {
    setTypeMedia(state, data) {
        state.typeMedia = data;
    }
  },
  namespaced:true,
};
