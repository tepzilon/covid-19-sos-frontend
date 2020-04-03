export const toggleModalShow = modal => ({
  ...modal,
  show: !modal.show
});

export const updateModalRequestKey = (modal, key) => ({
  ...modal,
  requestKey: key
});
