export const blur = {
  add: (id = 'root') => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.style.filter = 'blur(5px)';
      ele.style.WebkitFilter = 'blur(5px)';
    }
  },
  remove: (id = 'root') => {
    const ele = document.getElementById(id);
    if (ele) {
      ele.style.filter = 'unset';
      ele.style.WebkitFilter = 'unset';
    }
  },
};
