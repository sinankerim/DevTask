<template>
<div class="modal fade" id="taskDeleteModal" tabindex="-1" role="dialog" aria-labelledby="taskDeleteModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Task sil</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body ">
        <p>{{task}} Bu işi silmek istediğinizden emin misiniz?</p>
            <span class="fw-bold"></span>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">İptal</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remoteRemove()">Sil</button>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    data:{
        function(){
            return {
                removeTaskname:null
            }
        }
    }
}
</script>

<style scoped>

</style>