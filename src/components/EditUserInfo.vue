<template>
  <div class="container">
    <h2>Edit {{editedUserName}}'s Info</h2>
    <form class="submit" @submit.prevent="showAlert(editedUserName)">
      <label for="inp" class="inp">
        <span class="label">Name</span>
        <br>
        <br>
        <!-- incase we need to be able to edit the name -->
        <!-- <input type="text" id="inp" :value="editedUserName" @input="editUserName"> -->
        <span type="text" id="inp">{{editedUserName}}</span>
        <br>
        <br>
      </label>
      <label for="inp" class="inp">
        <span class="label">Amount</span>
        <br>
        <br>
        <!-- incase we need to be able to edit the amount -->
        <!-- <input type="text" :value="editedAmount" @input="editAmount"> -->
        <span type="text" id="inp">{{editedAmount}}</span>
      </label>
      <br>
      <label for="inp" class="inp">
        <span class="label">Description</span>
        <input type="text" :value="editedDescription" @input="editDescription">
      </label>
      <div class="inp">
        <button class="btn-update">Update User Info</button>
        <span class="border"></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditUserInfo",
  computed: {
    editedUserName() {
      return this.$store.state.editedUserName;
    },
    editedDescription() {
      return this.$store.state.editedDescription;
    },
    editedAmount() {
      return this.$store.state.editedAmount;
    },
    id() {
      return this.$store.state.id;
    }
  },
  methods: {
    editUserName(e) {
      this.$store.commit("editUserName", e.target.value);
    },
    editDescription(e) {
      this.$store.commit("editDescription", e.target.value);
    },
    editAmount(e) {
      this.$store.commit("editAmount", e.target.value);
    },
    EditUser() {
      this.$store.dispatch("EditUser", this.id);
    },
    // Use sweetalert2 to notify before editing user's info
    showAlert(userName) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: `You are updating ${userName} Info!`,
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Proceed",
          cancelButtonText: "cancel!",
          reverseButtons: true,
          customClass: "swal-wide"
        })
        .then(result => {
          if (result.value) {
            this.EditUser();
            this.$router.push({ name: "Index" });
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            this.$swal.fire("Your changes will be discarded :)");
            this.$router.push({ name: "Index" });
          }
        });
    }
  },
  // to fetch the original data of the user before modifying them
  created() {
    this.$store.dispatch("editData", this.$route.params.user);
  }
};
</script>

<style>
.container {
  margin-top: 90px;
  font-family: inherit;
  color: white;
  text-align: center;
}
.submit {
  margin-top: 60px;
  display: grid;
  font-family: Avenir;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.inp {
  align-content: center;
  margin: auto;
  width: 100%;
  max-width: 290px;
  font-family: "Roboto", sans-serif;
}
.label {
  float: left;
  font-size: 16px;
  color: white;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}
.border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
}
.container input {
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 15px 10px;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
  margin-top: 10px;
  margin-bottom: 20px;
}

#inp {
  width: 100%;
  text-align: left;
  float: left;
  font-family: inherit;
  padding-bottom: 5px;
  border-bottom: 1px solid #c8ccd4;
  color: gray;
}
.container .btn-update {
  margin: 20px;
  margin-top: 40px;
  font-family: inherit;
  font-size: 18px;
  color: rgba(144, 247, 247);
  cursor: pointer;
  padding: 15px;
  background-color: teal;
}
.swal-wide {
  width: 450px !important;
}
</style>