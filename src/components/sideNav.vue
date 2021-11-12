<template><div>

<button class="btn btn-dark text-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNavOffCanvas" aria-controls="sideNavOffCanvas">
  <i class="fas fa-bars"></i>
</button>

<div class="offcanvas offcanvas-start bg-dark text-light shadow-lg rounded-end border border-secondary con" tabindex="-1" id="sideNavOffCanvas" aria-labelledby="sideNavOffCanvasLabel">
  <div class="offcanvas-header p-0">
    <button type="button" class="btn removeOutline bg-secondary rounded-0 text-light ps-0 pe-0 fs-6 fw-bold m-0 w-100" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fas fa-arrow-left"></i> Back to tasks</button>
  </div>
  <div class="offcanvas-body">
    <div class="accordion" id="accordionSideNav">

      <div class="accordion-item border-warning bg-transparent">
        <h2 class="accordion-header" id="headingAccount">
          <button class="accordion-button collapsed bg-dark text-light removeOutline rounded-top" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAccount" aria-expanded="false" aria-controls="collapseAccount">
            <i class="fas fa-user me-2"></i> <span class="fw-bold fs-5">Account</span>
          </button>
        </h2>
        <div id="collapseAccount" class="accordion-collapse collapse bg-dark" aria-labelledby="headingAccount" data-bs-parent="#accordionSideNav">
          <div class="accordion-body bg-secondary p-0">
            <ol class="list-group">
              <li class="list-group-item bg-warning text-dark">
                <span class="text-center">New features coming soon...</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="accordion-item border-warning bg-transparent">
        <h2 class="accordion-header" id="headingSettings">
          <button class="accordion-button collapsed bg-dark text-light removeOutline rounded-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSettings" aria-expanded="false" aria-controls="collapseSettings">
            <i class="fas fa-cogs me-2"></i> <span class="fw-bold fs-5">Settings</span>
          </button>
        </h2>
        <div id="collapseSettings" class="accordion-collapse collapse bg-dark" aria-labelledby="headingSettings" data-bs-parent="#accordionSideNav">
          <div class="accordion-body bg-secondary p-0">

            <ol class="list-group">
              <li class="list-group-item bg-warning text-dark rounded-3">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="askBeforeRemoveCheckBox" v-model="askBeforeRemove">
                  <label class="form-check-label fw-bold" for="askBeforeRemoveCheckBox">Ask before removing task {{askBeforeRemove}}</label>
                </div>
              </li>
              <li class="list-group-item bg-warning text-dark">
                <div class="text-center">
                  New features coming soon...
                </div>
              </li>
            </ol>

          </div>
        </div>
      </div>


    </div>
  </div>
</div>
<button class="btn" @click="askBeforeRemove=!askBegoreRemove">a</button>
</div></template>

<script>
export default {
    data:()=>{
        return{
          askBeforeRemove:false
        }
    },
    methods:{
      setABRStatus(){
        /* Set Ask Before Remove Status */

        this.$emit("ABRStatus", this.askBeforeRemove );
      }
    },
    watch:{
      askBeforeRemove(){
        localStorage.askBeforeRemove=this.askBeforeRemove;
        alert(localStorage.askBeforeRemove);
        this.setABRStatus();
      }
    },
    mounted(){
        if(localStorage.askBeforeRemove){
          this.askBeforeRemove=localStorage.askBeforeRemove;
        }
        this.setABRStatus();
    }
}
</script>

<style scoped>
  @media only screen and (max-width:700px){
        .con{
          width:100% ;
        }
      }
  @media only screen and (min-width:1000px){
        .con{
          width:30% ;
          margin:10px auto;   
        }
      }

      .removeOutline:focus{
        outline:none;
        box-shadow:none;
      }
</style>