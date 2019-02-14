export default {
  filteredItems: state => {
    let filteredItems = state.usersInfo.filter(userInfo => {
      let Name = userInfo.Name.toLowerCase();
      let Description = userInfo.Description.toLowerCase();
      let searchTerm = state.searchTerm.toLowerCase();
      let Amount = userInfo.Amount.toString();

      return (
        Name.match(searchTerm) ||
        Description.match(searchTerm) ||
        Amount.match(searchTerm)
      );
    });
    return filteredItems;
  }
};