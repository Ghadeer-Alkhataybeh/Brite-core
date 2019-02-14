<template>
  <div class="Add-user-container">
    <div class="modal">
      <form class="submit" @submit.prevent="showAlert">
        <h2>Add new user</h2>
        <label for="inp" class="inp">
          <span class="label">User name</span>
          <span class="border"></span>
          <input type="text" id="modal-inp" :value="addedUserName" @input="addUserName">
        </label>
        <label for="inp" class="inp">
          <span class="label">Description</span>
          <span class="border"></span>
          <input type="text" id="modal-inp" :value="addedDescription" @input="addDescription">
        </label>
        <label for="inp" class="inp">
          <span class="label">Amount</span>
          <span class="border"></span>
          <input type="text" id="modal-inp" :value="addedAmount" @input="addAmount">
        </label>
        <div class="inp">
          <button @click="hide" class="btn-add">Add User Info</button>
          <span class="border"></span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUserInfo",
  computed: {
    addedUserName() {
      return this.$store.state.addedUserName;
    },
    addedDescription() {
      return this.$store.state.addedDescription;
    },
    addedAmount() {
      return this.$store.state.addedAmount;
    }
  },
  methods: {
    addUserName(e) {
      this.$store.commit("addUserName", e.target.value);
    },
    addDescription(e) {
      this.$store.commit("addDescription", e.target.value);
    },
    addAmount(e) {
      this.$store.commit("addAmount", e.target.value);
    },
    AddUser() {
      this.$store.dispatch("AddUser");
    },
    // To hide the modal
    hide() {
      this.$modal.hide("add-user");
    },
    // Use sweetalert2 to notify the addetion of a new user
    showAlert() {
      // Check empty fields before submitting
      if (this.addedUserName && this.addedDescription && this.addedAmount) {
        this.$swal
          .fire({
            type: "success",
            title: "a new user has been added",
            showConfirmButton: false,
            timer: 1500,
            customClass: "swal-wide"
          })
          .then(result => {
            this.AddUser();
          });
      } else {
        this.$swal.fire({
          type: "warning",
          title: "Please fill the fields"
        });
      }
    }
  }
};
</script>

<style>
.Add-user-container {
  color: black;
  text-align: center;
  display: block;
  width: 500px;
  max-width: 1000px;
}
.Add-user-container .submit {
  display: grid;
  box-sizing: border-box;
}
.Add-user-container .inp {
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 290px;
  text-align: center;
}
.Add-user-container .label {
  position: relative;
  top: 10px;
  left: 0;
  font-size: 18px;
  color: gray;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
  color: teal;
  float: left;
  padding: 10px;
}
.Add-user-container input {
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  padding: 10px;
  padding-bottom: 5px;
  height: 20px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
  margin-bottom: 2px;
}
.btn-add {
  margin: 10px;
  font-size: 18px;
  color: rgba(144, 247, 247);
  cursor: pointer;
  padding: 5px;
  background-color: teal;
}
.Add-user-container h2 {
  color: teal;
  text-align: center;
  font-family: "Roboto", sans-serif;
}
</style>