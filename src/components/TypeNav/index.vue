<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="currentIndex = -1">
        <h2 class="all">全部商品分类</h2>
        <!-- 里边用的定位 -->
        <div class="sort">
          <div class="all-sort-list2" @click="toSearch">
            <!-- <div class="all-sort-list2"> -->
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{item_on:currentIndex === index}"
              @mouseenter="moveIn(index)"
            >
              <!-- @mouseenter="currentIndex = index"  回调函数只有一行可以这么写 回调函数如果有多行就不能这么写了 -->
              <!-- 移入哪一个一级分类就把哪一个下标赋值给 currentIndex 那么移入的这个下标一定和currentInedex相等 其余不等 -->
              <h3>
                <!-- 字符串拼接 -->
                <!-- 一旦前面加: "js表达式" --- 代表我要解析动态数据的区域 -->
                <!--字符串 <router-link :to="'/search/?categoryName='+c1.categoryName+'&category1Id='+c1.categoryId"></router-link> 
                                    因此我们不能使用声明式导航,而是采用编程式导航
                -->
                <!--ES6 <router-link :to="'/search/?categoryName=${c1.categoryName}&category1Id=${c1.categoryId}'"></router-link> -->

                <!-- 声明式导航  使用声明式导航 牵扯到使用组件标签 使用组件标签如果多了,组件对象会非常多,就会造成效率低下(内存占用厉害)-->
                <!-- <router-link
                    :to="{name:'search',query:{categoryName:c1.categoryName,category1Id:c1.categoryId}}"
                >{{c1.categoryName}}</router-link>-->

                <!-- 带参数建议使用对象形式 -->
                <!-- 采用编程式导航 每个a标签都使用电击事件 又会导致,事件的回调函数太多 -->
                <!-- 每个a标签都使用点击事件 效率仍然低下 采用事件委派更妥当 
                    事件委派
                    1.你怎么知道你点的是a
                    2.就算你点的是a,你点的是几级的a
                -->

                <a
                  href="javascript:;"
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                >{{c1.categoryName}}</a>

                <!-- <a
                  href="javascript:;"
                  @click="$router.push({name:'search',query:{categoryName:c1.categoryName,category1Id:c1.categoryId}})"
                >{{c1.categoryName}}</a>-->

                <!-- <a
                    href="javascript:;"
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                >{{c1.categoryName}}</a>-->
                <!-- <a href="">{{c1.categoryName}}</a> -->
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <a
                        href="javascript:;"
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                      >{{c2.categoryName}}</a>

                      <!-- <router-link
                          :to="{name:'search',query:{categoryName:c2.categoryName,category2Id:c2.categoryId}}"
                      >{{c2.categoryName}}</router-link>-->
                      <!-- <a href="">{{c2.categoryName}}</a> -->
                      <!-- <a
                        href="javascript:;"
                        @click="$router.push({name:'search',query:{categoryName:c2.categoryName,category2Id:c2.categoryId}})"
                      >{{c2.categoryName}}</a>-->

                      <!-- 自定义属性 data- 直接可以通过data-set拿到属性 -->
                      <!-- <a
                    href="javascript:;"
                    :data-categoryName="c2.categoryName"
                    :data-category1Id="c2.categoryId"
                      >{{c2.categoryName}}</a>-->
                      <!-- <a href="">{{c2.categoryName}}</a> -->
                    </dt>
                    <dd>
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <a
                          href="javascript:;"
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                        >{{c3.categoryName}}</a>

                        <!-- <router-link
                            :to="{name:'search',query:{categoryName:c3.categoryName,category3Id:c3.categoryId}}"
                        >{{c3.categoryName}}</router-link>-->
                        <!-- <a href="">{{c3.categoryName}}</a> -->
                        <!-- <a
                          href="javascript:;"
                          @click="$router.push({name:'search',query:{categoryName:c3.categoryName,category3Id:c3.categoryId}})"
                        >{{c3.categoryName}}</a>-->
                        <!-- <a
                    href="javascript:;"
                    :data-categoryName="c3.categoryName"
                    :data-category1Id="c3.categoryId"
                        >{{c3.categoryName}}</a>-->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <!-- <div class="item">
                            <h3>
                                <a href="">家用电器</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书1</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>少儿</dt>
                                        <dd>
                                            <em>
                                                <a href="">少儿</a>
                                            </em>
                                            <em>
                                                <a href="">0-2岁</a>
                                            </em>
                                            <em>
                                                <a href="">3-6岁</a>
                                            </em>
                                            <em>
                                                <a href="">7-10岁</a>
                                            </em>
                                            <em>
                                                <a href="">11-14岁</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">手机、数码、充值</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">充值</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="recharge.html">充值</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书2</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">电脑、办公</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书3</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>少儿</dt>
                                        <dd>
                                            <em>
                                                <a href="">少儿</a>
                                            </em>
                                            <em>
                                                <a href="">0-2岁</a>
                                            </em>
                                            <em>
                                                <a href="">3-6岁</a>
                                            </em>
                                            <em>
                                                <a href="">7-10岁</a>
                                            </em>
                                            <em>
                                                <a href="">11-14岁</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>教育</dt>
                                        <dd>
                                            <em>
                                                <a href="">教材教辅</a>
                                            </em>
                                            <em>
                                                <a href="">考试</a>
                                            </em>
                                            <em>
                                                <a href="">外语学习</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>其它</dt>
                                        <dd>
                                            <em>
                                                <a href="">英文原版书</a>
                                            </em>
                                            <em>
                                                <a href="">港台图书</a>
                                            </em>
                                            <em>
                                                <a href="">工具书</a>
                                            </em>
                                            <em>
                                                <a href="">套装书</a>
                                            </em>
                                            <em>
                                                <a href="">杂志/期刊</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">家居、家具、家装、厨具</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书4</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>少儿</dt>
                                        <dd>
                                            <em>
                                                <a href="">少儿</a>
                                            </em>
                                            <em>
                                                <a href="">0-2岁</a>
                                            </em>
                                            <em>
                                                <a href="">3-6岁</a>
                                            </em>
                                            <em>
                                                <a href="">7-10岁</a>
                                            </em>
                                            <em>
                                                <a href="">11-14岁</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">服饰内衣</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书5</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">个护化妆</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书6</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>少儿</dt>
                                        <dd>
                                            <em>
                                                <a href="">少儿</a>
                                            </em>
                                            <em>
                                                <a href="">0-2岁</a>
                                            </em>
                                            <em>
                                                <a href="">3-6岁</a>
                                            </em>
                                            <em>
                                                <a href="">7-10岁</a>
                                            </em>
                                            <em>
                                                <a href="">11-14岁</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>教育</dt>
                                        <dd>
                                            <em>
                                                <a href="">教材教辅</a>
                                            </em>
                                            <em>
                                                <a href="">考试</a>
                                            </em>
                                            <em>
                                                <a href="">外语学习</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>其它</dt>
                                        <dd>
                                            <em>
                                                <a href="">英文原版书</a>
                                            </em>
                                            <em>
                                                <a href="">港台图书</a>
                                            </em>
                                            <em>
                                                <a href="">工具书</a>
                                            </em>
                                            <em>
                                                <a href="">套装书</a>
                                            </em>
                                            <em>
                                                <a href="">杂志/期刊</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">运动健康</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书7</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">汽车用品</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore">
                                        <dt>
                                            <a href="">电子书8</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">免费</a>
                                            </em>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋/两性</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">经管</a>
                                            </em>
                                            <em>
                                                <a href="">畅读VIP</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">数字音乐</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">通俗流行</a>
                                            </em>
                                            <em>
                                                <a href="">古典音乐</a>
                                            </em>
                                            <em>
                                                <a href="">摇滚说唱</a>
                                            </em>
                                            <em>
                                                <a href="">爵士蓝调</a>
                                            </em>
                                            <em>
                                                <a href="">乡村民谣</a>
                                            </em>
                                            <em>
                                                <a href="">有声读物</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>
                                            <a href="">音像</a>
                                        </dt>
                                        <dd>
                                            <em>
                                                <a href="">音乐</a>
                                            </em>
                                            <em>
                                                <a href="">影视</a>
                                            </em>
                                            <em>
                                                <a href="">教育音像</a>
                                            </em>
                                            <em>
                                                <a href="">游戏</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>文艺</dt>
                                        <dd>
                                            <em>
                                                <a href="">小说</a>
                                            </em>
                                            <em>
                                                <a href="">文学</a>
                                            </em>
                                            <em>
                                                <a href="">青春文学</a>
                                            </em>
                                            <em>
                                                <a href="">传记</a>
                                            </em>
                                            <em>
                                                <a href="">艺术</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>人文社科</dt>
                                        <dd>
                                            <em>
                                                <a href="">历史</a>
                                            </em>
                                            <em>
                                                <a href="">心理学</a>
                                            </em>
                                            <em>
                                                <a href="">政治/军事</a>
                                            </em>
                                            <em>
                                                <a href="">国学/古籍</a>
                                            </em>
                                            <em>
                                                <a href="">哲学/宗教</a>
                                            </em>
                                            <em>
                                                <a href="">社会科学</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>经管励志</dt>
                                        <dd>
                                            <em>
                                                <a href="">经济</a>
                                            </em>
                                            <em>
                                                <a href="">金融与投资</a>
                                            </em>
                                            <em>
                                                <a href="">管理</a>
                                            </em>
                                            <em>
                                                <a href="">励志与成功</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>生活</dt>
                                        <dd>
                                            <em>
                                                <a href="">家庭与育儿</a>
                                            </em>
                                            <em>
                                                <a href="">旅游/地图</a>
                                            </em>
                                            <em>
                                                <a href="">烹饪/美食</a>
                                            </em>
                                            <em>
                                                <a href="">时尚/美妆</a>
                                            </em>
                                            <em>
                                                <a href="">家居</a>
                                            </em>
                                            <em>
                                                <a href="">婚恋与两性</a>
                                            </em>
                                            <em>
                                                <a href="">娱乐/休闲</a>
                                            </em>
                                            <em>
                                                <a href="">健身与保健</a>
                                            </em>
                                            <em>
                                                <a href="">动漫/幽默</a>
                                            </em>
                                            <em>
                                                <a href="">体育/运动</a>
                                            </em>
                                        </dd>
                                    </dl>
                                    <dl class="fore">
                                        <dt>科技</dt>
                                        <dd>
                                            <em>
                                                <a href="">科普</a>
                                            </em>
                                            <em>
                                                <a href="">IT</a>
                                            </em>
                                            <em>
                                                <a href="">建筑</a>
                                            </em>
                                            <em>
                                                <a href="">医学</a>
                                            </em>
                                            <em>
                                                <a href="">工业技术</a>
                                            </em>
                                            <em>
                                                <a href="">电子/通信</a>
                                            </em>
                                            <em>
                                                <a href="">农林</a>
                                            </em>
                                            <em>
                                                <a href="">科学与自然</a>
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">彩票、旅行</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">理财、众筹</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">母婴、玩具</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">箱包</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">运动户外</a>
                            </h3>
                        </div>
                        <div class="item">
                            <h3>
                                <a href="">箱包</a>
                            </h3>
            </div>-->
          </div>
        </div>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
// import  _ from 'lodash'//体积过大
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
    };
  },
  mounted() {
    // 模板挂载完成后  模板变为真正的 dom 后
    this.getCategoryList();
  },
  methods: {
    //这里边可以获取vuex当中mutations和actions方法
    getCategoryList() {
      // 用户在触发响应的actions去发请求拿数据
      this.$store.dispatch("getCategoryList"); //dispatch 触发 actions --home当中的actions  ----后期合并到 store当中的actions
    },
    // 需要节流的函数
    /*
          moveIn(index){
            console.log(index);
            this.currentIndex = index;
        },
        */

    //    节流函数效果的写法
    //把moveIn 函数放到_.throttle中
    /*
        moveIn:_.throttle(function(index){
            console.log(index);
            this.currentIndex = index;
        }, 50,{'trailing': false})
        */

    moveIn: throttle(
      function (index) {
        console.log(index);
        this.currentIndex = index;
      },
      50,
      { trailing: false }
    ),
    // {'trailing': false} 不让函数在拖延之后执行,也就是在时间间隔内执行完这个函数,不写有可能最后一次拖延执行

    toSearch(event) {
      //event 事件对象 是浏览器
      let target = event.target; //target代表目标元素
      let data = target.dataset; //dataset拿的就是元素身上以data-开头的所有属性和值组成的元素
    //   console.log("data=", data);
      let { categoryname, category1id, category2id, category3id } = data;
      if (categoryname) {
        // 如果categoryname是存在的代表点的一定是a
        //既然代表点的是a 那么一定会跳转所以我们创建跳转的对象
        let location = {
             name: "search",
        };
        // 创建query参数的对象,来收集整理query参数
        let query = {
          categoryName: categoryname,
        };

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }

        // 把query参数放到location当中
        location.query = query;

        // 判断当前路由是不是又params参数,有就带上
        // let { params } = this.$route;
        // if (params) {
        //   location.params = params;
        // }

        // console.log("location=", location);
        this.$router.push(location);
      }
    },
  },
  computed: {
    //计算属性 ---- 捞数据
    // 可以去拿vuex当中的 state数据及getters当中的数据
    /*
        // 1.最原始的写法
        // 假设我们目前没有使用vuex的模块化开发,categoryList存在总的store的state当中
        // 拿数据 --- 本质  比较复杂
        categoryList(){
            return this.$store.state.categoryList //直接从store当中获取这个数据就可以简写为数组
        },
        
        count(){
            return this.$store.state.count
        }

        */

    // ...扩展运算符 拆包和打包
    // 2. ...mapState只是对原始写法的一个简写
    /*
        //1)
        ...mapState(['categoryList','count'])  //拿的名字和存储的名字一定要一致才能用
        */
    /*
        //2)
        ...mapState(['count']),
        ...mapState({
             category(){
                 return this.$store.state.categoryList //直接从store当中获取这个数据就可以简写为数组
            },
        })
        或
        ...mapState({
            category:state=>state.categoryList  拿的总的store当中state中的数据
        })
        */

    /**
     *    mapState 如果用到数组要求,名称必须和state当中名称一致才能正确映射,否则不行
     *    如果想要用自己随意起的名称,那么就要用对象写法
     *      在mapState当中允许你这个属性拿到它内部的参数state
     */

    /*
        //  ...mapState(['categoryList','count']) //返回的对象就是上面的本质写法

        {
             categoryList(){
                 return this.$store.state.categoryList //直接从store当中获取这个数据就可以简写为数组
            },
        
            count(){
                return this.$store.state.count
            }
        }
    */

    /**
     * 如果vuex使用了模块化开发,就没办法获取state数据使用数组了,必须使用对象
     * ...mapState({
     *   categoryList:state=>state.home.categoryList
     * })
     */

    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 6git15px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: hotpink;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>