export const filterPrice = (filterType, arr) => {
    let newArr = arr.slice();
    let sorted = newArr.sort((a, b) => a.price - b.price);
    switch (filterType) {
      case 'default':
        return arr;
      case 'ascending':
        return sorted;
      case 'descending':
        return sorted.reverse();
      default:
        return arr;
    }
  };