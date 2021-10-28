var DTP=new Vue({
    el:"#DevTaskPlayground",
    data:{
        tasks:[],
        newTask:null,
        logged:false,
        NLTI:null
    },
    mounted(){
        if (localStorage.getItem('tasks')) {
            try {
              this.tasks = JSON.parse(localStorage.getItem('tasks'));
            } catch(e) {
              localStorage.removeItem('tasks');
            }
          }
      
    },
    methods:{
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
        }
    }
});

var DM=new Vue({
    el:"#taskDeleteModal",
    data:{

    },
    methods:{
        remoteRemove(){
            DTP.removeTask();
        }
    }
});