<template>
  <div class="navbar-container">
    <div class="navbar">
      <nav class="nav">
        <div class="nav-content">
          <img class="logo" src="@/assets/logo.png">
          <router-link :to="{name:'Index'}">
            <span class="nav-title">BriteCore</span>
          </router-link>
        </div>
        <modal name="add-user">
          <AddUser class="modal-content"/>
        </modal>
        <div class="search">
          <input type="text" name="search" placeholder="Search.." @input="updateSearchTerm">
        </div>
        <span @click="show" class="circle-btn">+</span>
      </nav>
    </div>
  </div>
</template>

<script>
import AddUser from "./AddUserInfo";
export default {
  name: "Navbar",
  components: { AddUser },
  methods: {
    updateSearchTerm(e) {
      this.$store.commit("updateSearchTerm", e.target.value);
    },
    // To show the modal
    show() {
      this.$modal.show("add-user");
    },
    // To hide the modal
    hide() {
      this.$modal.hide("add-user");
    }
  }
};
</script>

<style>
.navbar {
  background-color: #308591;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  align-items: center;
}
.nav-content {
  padding: 0 20px;
  display: inline;
}
.nav-title {
  color: aliceblue;
  font-size: 50px;
  margin-left: 85px;
  display: block;
}
a {
  text-decoration: none;
}
.circle-btn {
  position: absolute;
  top: 50px;
  right: 10%;
  background-color: white;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-size: 35px;
  cursor: pointer;
  text-align: center;
  color: black;
  vertical-align: middle;
}
.modal {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(2, 39, 28);
  background-color: rgba(64, 224, 208, 0.356);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
  display: none;
}
.modal .lable {
  color: #308591;
}
.logo {
  position: absolute;
  left: 10px;
  top: 0px;
  margin: 0px 15px 15px 0px;
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}
.search {
  position: absolute;
  top: 25px;
  right: 20px;
  max-block-size: 10%;
  display: block;
}
</style>