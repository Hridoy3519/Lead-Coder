// use local storage as your db for now
const addToDb = (id) => {
  const exists = getDb();
  let course_list = {};
  if (!exists) {
    course_list[id] = 1;
  } else {
    course_list = JSON.parse(exists);
    if (course_list[id]) {
      const newCount = course_list[id] + 1;
      course_list[id] = newCount;
    } else {
      course_list[id] = 1;
    }
  }
  updateDb(course_list);
};

const getDb = () => localStorage.getItem("course_list");
const updateDb = (cart) => {
  localStorage.setItem("course_list", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const exists = getDb();
  if (!exists) {
  } else {
    const course_list = JSON.parse(exists);
    delete course_list[id];
    updateDb(course_list);
  }
};

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

const clearTheCart = () => {
  localStorage.removeItem("course_list");
};

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart };
