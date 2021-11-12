<template><div>
<div class="modal fade" id="taskDeleteModal" tabindex="-1" aria-labelledby="taskDeleteModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content text-light bg-dark">
        <div class="modal-header border-secondary ms-2 me-2">
        <h5 class="modal-title text-warning" id="exampleModalLabel">Task sil</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
        </button>
        </div>
        <div class="modal-body text-start">
        <span>Bu işi silmek istediğinizden emin misiniz:</span><br>
            <span class="fw-bold fs-5">"{{taskName}}"</span>
        </div>
        <div class="modal-footer border-secondary ms-2 me-2">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">İptal</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="removeTask()">Sil</button>
        </div>
    </div>
    </div>
</div>
</div></template>

<script>
export default {
    props:["taskName"],
    methods:{
        removeTask(){
            this.$parent.removeTask();
        }
    }
}
</script>

<style scoped>

</style>