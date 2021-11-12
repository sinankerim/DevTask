<template><div>

<div class="align-middle con"> 
  <div class="d-flex">
    <sideNav @ABRStatus="askBeforeRemove=$event"></sideNav>
    <span class="text-light fw-bold fs-4 ms-3">DevTask <span class="fs-5 fw-normal text-secondary ms-2 fst-italic">you better not forget your tasks!</span></span>
  </div>
  <table class="table table-hover table-dark">
      <tbody>
      <tr>
          <td class="w-75" colspan="2"><input class="form-control bg-dark text-white" type="text" placeholder="Enter your task..." v-model="newTask" @keypress.enter="notLogged('addTask')"></td>
          <td class="w-25 text-center"><button class="bg-success text-white rounded-circle border-0" @click="notLogged('addTask')"><i class="fas fa-plus"></i></button></td>
      </tr>
      <tr v-for="(task, index) in tasks" :key="task">
          <th scope="row">{{index+1}}</th>
          <td class="w-75">{{task}}</td>
          <td class="w-25 text-center">

            <!-- Ask before delete task -->
            <button v-show="askBeforeRemove" id="askMe" class="bg-danger text-white rounded-circle border-0" data-bs-toggle="modal" data-bs-target="#taskDeleteModal" @click="setTaskNameForModalChild(task); setNLTI(index,task);"><i class="fas fa-minus"></i></button>
            <!-- don't ask before delete -->
            <button v-show="!askBeforeRemove" id="dontAskMeIDK" class="bg-danger text-white rounded-circle border-0" @click="setNLTI(index,task); removeTask();"><i class="fas fa-minus"></i></button>
                                
          </td>
          <taskDeleteModal :taskName="taskNameForModalChild"></taskDeleteModal>
      </tr>
      </tbody>
  </table>

</div>

</div></template>

<script>
import taskDeleteModal from "./components/deleteModal.vue";
import sideNav from "./components/sideNav.vue";
export default {
data:function(){
    return {
      tasks:[],
        newTask:null,
        logged:false,
        NLTI:null,
        askBeforeRemove:false,
        taskNameForModalChild:null
    }
  }
,methods:{
        setNLTI(index){
            this.NLTI=index;
        },
        notLogged(job){
            var job=job;
            if(this.logged==false){
                if(job=="addTask")this.addTask();
                else if(job=="saveTask")this.saveTasks();
            }

        },
        addTask(){
            if (!this.newTask) {
              return;
            }

            this.tasks.push(this.newTask);
            this.newTask = '';
            this.saveTasks();
        },
        removeTask() {
            this.tasks.splice(this.NLTI, 1);
            this.saveTasks();
            this.NLTI="";
        },
        saveTasks() {
            const parsed = JSON.stringify(this.tasks);
            localStorage.setItem('tasks', parsed);
        },
        setTaskNameForModalChild(task){
          this.taskNameForModalChild=task;
        }
    },
  components:{
    "taskDeleteModal":taskDeleteModal,
    "sideNav":sideNav
  },mounted(){
  if (localStorage.getItem('tasks')) {
      try {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
      } catch(e) {
        localStorage.removeItem('tasks');
      }
    }
}

}
</script>

<style scoped>
      @media only screen and (min-width:1000px){
        .con{
          width:40% ;
          margin:10px auto;   
        }
      }
      @media only screen and (min-width:700px){
        .con{
          width:60% ;
          margin:10px auto;   
        }
      }
</style>

