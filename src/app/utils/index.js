export const sortByName = (name1, name2) => {
  if (name1 < name2) {
    return -1;
  }
  if (name1 > name2) {
    return 1;
  }
  return 0;
};

export const sortById = (id1, id2) => {
  if (id1 < id2) {
    return -1;
  }
  if (id1 > id2) {
    return 1;
  }
  return 0;
};

export const blankForm = {
  id: 0,
  name: '',
  shortDescription: '',
  active: false,
};
