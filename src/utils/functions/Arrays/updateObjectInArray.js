const updateObjectInArray = (array, action) => {
  return array.map((item) => {
    if (item.id !== action.payload.id) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.payload,
    };
  });
};

export default updateObjectInArray;
