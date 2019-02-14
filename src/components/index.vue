 <template>
  <section>
    <h1>Payments Data</h1>
    <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr class="table-head">
            <th @click="sort('Name')">
              Name
              <i class="material-icons">arrow_drop_down</i>
            </th>
            <th @click="sort('Description')">
              Description
              <i class="material-icons">arrow_drop_down</i>
            </th>
            <th @click="sort('Amount')">
              Amount
              <i class="material-icons">arrow_drop_down</i>
            </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="tbl-content">
      <table>
        <tbody v-for="userInfo in sortedItems" :key="userInfo.Id">
          <tr>
            <td>{{userInfo.Name}}</td>
            <td>{{userInfo.Description}}</td>
            <td>{{userInfo.Amount}}</td>
            <td>
              <router-link :to="{ name: 'EditUserInfo', params: {user: userInfo.Name}}">
                <i class="material-icons ticon">edit</i>
              </router-link>
            </td>
            <td>
              <i class="material-icons ticon" @click="showAlert(userInfo)">delete</i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="delete-all">
      <i class="material-icons AllIcons" @click="showAlert('')">delete</i>
    </div>
  </section>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      currentSort: "name",
      currentSortDir: "asc"
    };
  },
  computed: {
    sortedItems: function() {
      return this.$store.getters.filteredItems.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    },
    usersInfo() {
      return this.$store.state.usersInfo;
    },
    addedId() {
      return this.$store.state.addedId;
    }
  },
  methods: {
    sort: function(s) {
      //if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    deleteUserInfo(id) {
      this.$store.dispatch("deleteUserInfo", id);
    },
    deleteAllUsers() {
      this.$store.dispatch("deleteAllUsers");
    },
    // Use sweetalert2 to notify the deleting a user or all users
    showAlert(userInfo) {
      let username = userInfo.Name;
      //specifying if one user or all users will be deleted to show in the alert message
      if (userInfo == "") {
        username = "All payments";
      } else {
        username = userInfo.Name;
      }
      this.$swal
        .fire({
          title: "Are you sure?",
          text: `You are deleting ${username} data, you won't be able to revert this!`,
          type: "error",
          showCancelButton: true,
          confirmButtonText: "Proceed",
          cancelButtonText: "cancel!",
          reverseButtons: true,
          customClass: "swal-wide"
        })
        .then(result => {
          if (result.value) {
            if (userInfo == "") {
              this.deleteAllUsers();
            } else {
              if (userInfo.id) {
                this.deleteUserInfo(userInfo.id);
              } else {
                this.deleteUserInfo(this.addedId);
              }
            }
            this.$swal.fire("Deleted!");
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal.fire("Your payments data is safe :)");
          }
        });
    }
  },
  // fetch all users data
  created() {
    this.$store.dispatch("fetchData");
  }
};
</script>

<style>
body {
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: "Roboto", sans-serif;
}
section {
  margin: 50px;
}
h1 {
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 90px;
}
table {
  width: 100%;
  table-layout: fixed;
}
.tbl-header {
  background-color: rgba(255, 255, 255, 0.3);
}
.tbl-content {
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  vertical-align: middle;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: white;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  align-content: center;
}
.table-head {
  cursor: pointer;
}
.ticon {
  cursor: pointer;
  color: white;
  font-size: 1.3 em;
}
i {
  vertical-align: middle;
  cursor: pointer;
}
.delete-all {
  text-align: center;
}
.AllIcons {
  color: #308591;
  font-size: 4em;
  margin: 20px;
}
.swal-wide {
  width: 450px !important;
}
/* for custom scrollbar for webkit browser*/
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>