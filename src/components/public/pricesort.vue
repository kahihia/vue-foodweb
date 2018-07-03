<style scoped>
	.pricesort_mainnav{
		margin: 20px auto 0;
		width: 1153px;
		height: 32px;
		border: 1px solid #d4d4d4;
	}
	.pricesort_mainnav_price{
		float: left;
		width: 161px;
		height: 32px;
		line-height: 30px;
		border-right: 1px solid #d4d4d4;
		cursor: pointer;
	}
	.pricesort_mainnav_price_text{
		float: left;
		font-size: 12px;
		margin-left: 66px;
	}
	.pricesort_mainnav_price_sign{
		float: left;
		display: block;
		margin-left: 4px;
		margin-top: 11px;
		width: 7px;
		height: 8px;
		background-image: url(./../../assets/up.gif);
		cursor: pointer;
	}
	.pricesort_mainnav_selectedprice{
		float: left;
		width: 396px;
		height: 32px;
		text-align: center;
		line-height: 30px;
		border-right: 1px solid #d4d4d4;
	}
  .pricesort_mainnav_selectedprice input.inputpricecounts{
    width: 90px;
  }
	.pricesort_mainnav_searchgoods{
		float: left;
		width: 396px;
		height: 32px;
		text-align: center;
		line-height: 30px;
	}
	.pricesort_mainnav_searchgoods input.inputpricesearchgoods{
		width: 180px;
	}
  .classification{
    font-size: 17px;
    color: red;
  }

  /* 价格排序图标添加样式 */
  .change_price_sign{
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .fill_color_wrap{
    background-color: #d4d4d4;
  }
  .fill_color_wrap .pricesort_mainnav_price_text{
    color: #fff;
  }
</style>


<template>
  <div class="pricesort_mainnav">
    <div 
      class="pricesort_mainnav_price"
      @click="orderPrice('presentprice',original = true)"
      :class="upprice ? 'fill_color_wrap' : ''">
      <span class="pricesort_mainnav_price_text">总价</span>
      <span class="pricesort_mainnav_price_sign change_price_sign"></span>
    </div>
    <div 
      class="pricesort_mainnav_price" 
      @click="orderPrice('presentprice',original = false)"
      :class="downprice ? 'fill_color_wrap' : ''">
        <span class="pricesort_mainnav_price_text">总价</span>
        <span class="pricesort_mainnav_price_sign"></span>
    </div>
    <div class="pricesort_mainnav_selectedprice">
        <span class="rmb">￥</span>
        <input 
          class="inputpricecounts" 
          type="text"
          v-model="searchminprice">
        <span class="dash">-</span>
        <span class="rmb">￥</span>
        <input 
          class="inputpricecounts" 
          type="text"
          v-model="searchmaxprice">
        <button @click="orderPriceRange()">确定</button>
    </div>
    <div class="pricesort_mainnav_searchgoods">
      <span>商品类别：</span>
      <span class="classification">{{ classification }}</span>
      &nbsp;&nbsp;&nbsp;
      <span>搜索商品</span>
      <input
        class="inputpricesearchgoods" 
        type="text"
        v-model="searchproducts">
      <!-- <button @click="orderNameRange()">确定</button> -->
    </div>
  </div>
</template>


<script>
  import { eventBus } from '@/eventBus'

	export default{
		data(){
			return {
				message: this.$root.bestsellgoods,
				searchminprice: '', // 价格最小值
				searchmaxprice: '', // 价格最大值
				searchproducts: '', // 商品名称默认为空
        searchclassification: '',// 商品类别默认为空
        upprice: false, // 升序
        downprice: false, // 降序
        original: '',   //默认从小到大排列
        arrfoodproducts: [], //声明一个空数组来存放名字相关的数据
        origialarray: [], // 全部商品数组
        arrfoodproductsprice: [], // 声明一个数组来存放价格相关的数据
        classification: this.$route.params.foodname // 商品类别
			}
		},
    created() {
      // 先获取全部的商品，存入数组origialarray
      this.origialarray = this.$root.bestsellgoods
    },
    mounted(){
      if(this.classification==null){
        this.classification = '所有'
      }else{
        this.origialarray = [];//把数组重置为空
        for (var i=0;i<this.$root.bestsellgoods.length;i++){
          //for循环数据中的每一项（根据name值）
          if(this.$root.bestsellgoods[i].goodsclassify.search(this.classification) != -1){
            //判断输入框中的值是否可以匹配到数据，如果匹配成功向空数组中添加数据
            this.origialarray.push(this.$root.bestsellgoods[i]);
          }
        }
        eventBus.$emit('change-message', this.origialarray)
      }
    },
    watch: {
      // 按照名字查找商品
      searchproducts(){
        this.arrfoodproducts = [];//把数组重置为空
        // 如果输入的值为空，显示所有商品；如果输入不为空，按要求查询
        if(this.searchproducts == ''){
          if(this.searchminprice == '' && this.searchmaxprice == ''){
            this.arrfoodproducts = this.origialarray
            eventBus.$emit('change-message', this.arrfoodproducts)
            console.log('价格都为空')
          }else{
            this.orderPriceChecked(this.origialarray)
            // 执行自定义方法change-message
            eventBus.$emit('change-message', this.arrfoodproductsprice)
            console.log('价格不为空')
          }
        }else{
          // 把排序完成的message数组赋值给$root
          for (var i=0;i<this.$root.bestsellgoods.length;i++){
            //for循环数据中的每一项（根据name值）
            if(this.$root.bestsellgoods[i].goodsname.search(this.searchproducts) != -1){
              //判断输入框中的值是否可以匹配到数据，如果匹配成功向空数组中添加数据
              this.arrfoodproducts.push(this.$root.bestsellgoods[i]);
            }
          }
          // 执行自定义方法change-message
          eventBus.$emit('change-message', this.arrfoodproducts)
        }
        // 把价格排序重置为空
        this.upprice = false;
        this.downprice = false;
      }
    },  
		methods: {
      // 查找价格区间内商品的公共方法
      orderPriceChecked(array){
        // 搜索商品名称为空，但价格区间不为空
        var minprice = Number(this.searchminprice).toFixed(2),
            maxprice = Number(this.searchmaxprice).toFixed(2);
        this.arrfoodproductsprice = []; // 清空一个空数组来存放数据
        var presentprice; // 获取每一个商品的价格

        if(minprice != 0.00 && maxprice == 0.00){
          // max值为空
          maxprice = 100.00
        }else if(minprice == 0.00 && maxprice != 0.00){
          // min值为空
          minprice = 0.00
        }
        for (var i=0;i < array.length;i++){
          presentprice = Number(array[i].presentprice).toFixed(2);
          if( presentprice>=minprice && presentprice<=maxprice){
            //判断输入框中的数值是否可以匹配到区间，如果匹配成功向空数组中添加数据
            this.arrfoodproductsprice.push(array[i]);
          }
        }
        console.log('按价格排序')
        // 把排序完成的message数组赋值给$root
        return this.arrfoodproductsprice;
      },
      // 按照价格升序或者降序
			orderPrice(letter , original){
        if(letter != ''){
          this.$root.bestsellgoods.sort((a,b) => {
            if(original){
              this.upprice = true;
              this.downprice = false;
              return b[letter] - a[letter];
            }else{
              this.upprice = false;
              this.downprice = true;
              return a[letter] - b[letter];
            }
          });
        }
        // 执行自定义方法change-message
        eventBus.$emit('change-message', this.$root.bestsellgoods) 
      },
      // 按照价格区间查找商品
      orderPriceRange(){
        this.arrfoodproductsprice = []; // 清空一个空数组来存放数据
        var presentprice; // 获取每一个商品的价格
        var minprice = Number(this.searchminprice).toFixed(2),
            maxprice = Number(this.searchmaxprice).toFixed(2);
        // 边界值为空时的赋值
        if(minprice == 0.00 && maxprice == 0.00){
          // min值为空
          if(this.searchproducts == ''){
            this.arrfoodproductsprice = this.origialarray
          }else{
            this.arrfoodproductsprice = this.arrfoodproducts
          }
        }else{
          if(this.searchproducts == ''){
            this.orderPriceChecked(this.origialarray)
          }else{
            this.orderPriceChecked(this.arrfoodproducts)
          }
        }
        // 把价格排序重置为空
        this.upprice = false;
        this.downprice = false;
        eventBus.$emit('change-message', this.arrfoodproductsprice)
      }
		}
	}
</script>