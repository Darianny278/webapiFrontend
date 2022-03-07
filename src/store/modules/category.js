import categoryServices from "../../services/CategoryServices"; 

export default {
  state: () => ({
    category: [],
  }),
  getters: {
    getCategoryList: (state) => state.category,
  },
  actions: {
    async fetchCategory({commit}) {
        const { data: categoryData } = await categoryServices.getCategory();
        commit("setCategory", categoryData);
    },
    async createCategory({commit},data) {
      const { data: categoryData } = await categoryServices.addCategory(data);
      commit("setCategory", categoryData);
  },
    async updateCategoryData({commit},data) {
      const { data: categoryData } = await categoryServices.updateCategory(data);
      commit("setCategory", categoryData);
  },
    async removeCategory({commit},id) {
    const { data: categoryData } = await categoryServices.removeCategory(id);
    commit("setCategory", categoryData);
}
  },
  mutations: {
    setCategory(state, data) {
        state.category = data;
    }
  },
  namespaced:true,
};
