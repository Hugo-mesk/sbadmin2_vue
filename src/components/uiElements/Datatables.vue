<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th v-for="(header, idx) in table.header" v-bind:key="'header' + header">
                {{ header }}
                <a class="btn" v-on:click="colummSort(idx)">
                  <font-awesome-icon icon="angle-up"/>
                </a>
              </th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th v-for="header in table.header" v-bind:key="'foot' + header">{{ header }}</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(row, idx) in table.rows" v-bind:key="'row' + idx">
              <td v-for="(item, index) in row" v-bind:key="'item' + idx + index">{{ item }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
    * The type of the card default to null [no shadow]
    * @values small, basic
    */
    'datatable': {
      type: Array,
      default: null,
    },
  },
  data: function(){
    return {
      'table': {
        'header': [],
        'rows': [],
        'columms': [],
      },
    }
  },
  components: {
    // 'sb-button': Button,
  },
  created() {
    var row = [];
    /**
    * Get heades from the first element of json object
    */
    this.table.header = Object.getOwnPropertyNames(this.datatable[0]);
    this.table.header.pop("__ob__");

    /**
    * Loop throught data table filling data in rows.
    */
    for (var tableIdx = 0;  tableIdx < this.datatable.length; tableIdx++){
      row = [];
      for (var headerIdx = 0;  headerIdx < this.table.header.length; headerIdx++) {
        var item = this.datatable[tableIdx][this.table.header[headerIdx]]
        row.push(item);
      }
      this.table.rows.push(row);
    }
  },
  methods:{
    colummSort: function(index) {
      console.log(typeof this.table.rows[0][index]);
      if (typeof this.table.rows[0][index].replace(/(^\$)/g,'') === "number") {
        this.table.rows.sort(
          function sortFunction(a, b) {
            return a[index].replace(/(^\$)/g,'') - b[index].replace(/(^\$)/g,'')
});
      } else {
        this.table.rows.sort(
                              function sortFunction(a, b) {
                                if (a[index] === b[index]) {
                                    return 0;
                                }
                                else {
                                    return (a[index] < b[index]) ? -1 : 1;
                                }
                              });
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
