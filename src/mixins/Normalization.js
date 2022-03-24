import { types } from "mobx-state-tree";

/**
 * @todo rework this into MetaMixin for all the meta data
 * Meta Information
 * For normalize many labels to one value
 */
const NormalizationMixin = types
  .model({
    meta: types.frozen({}),
    normInput: types.maybeNull(types.string),
    idInput: types.maybeNull(types.string),
  })
  .actions(self => ({
    /**
     * Set meta text
     * @param {*} val
     */
    setMetaInfo(val) {
      if (val) {
        self.meta = { ...self.meta, text: [val] };
      } else {
        const adjusted = { ...self.meta };
        // delete adjusted.text;
        // self.meta = adjusted;
      }
    },

    /**
     * Set meta id
     * @param {*} val
     */
    setMetaId(val) {
      if (val) {
        self.meta = { ...self.meta, id: val };
      }
    },

    /**
     * Delete meta text
     */
    deleteMetaInfo() {
      // self.setMetaInfo("");
      const adjusted = { ...self.meta };
      
      delete adjusted.text;
      delete adjusted.id;
      self.meta = adjusted;
    },

    setNormInput(val) {
      self.normInput = val;
    },

    setIdInput(val) {
      self.idInput = val;
    },
  }));

export default NormalizationMixin;
