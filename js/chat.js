var mailBox = document.querySelector(".send input");
var send = document.querySelector(".send button");
var ul = document.querySelector(".chatBox");
var msg = document.querySelector(".message");

send.onclick = async (e) => {
  if (!mailBox.value) {
    return;
  }
  var val = mailBox.value;
  mailBox.value = "";
  createEle(val, "myself");
  var vals = myselfMessage(val);
  if (vals) {
    createEle(vals, "robot");
    return;
  }
  var data = await API.sendMessage(val);
  if (data.text.includes("图灵机器人")) {
    data.text = data.text.replace("图灵机器人", "小伯兴");
  }
  if(data.text.includes("单身"||"单身狗")){
    data.text = "告诉你个秘密,别人单身我不管,反正我不是单身,而且我很爱顾婷老婆!嘻嘻~";
  }
  createEle(data.text, "robot");
};

function bot(){
  var H = msg.scrollHeight;
  msg.scrollTop = H;
}

function createEle(content, who, imgUrl) {
  if (who == "myself") {
    ul.innerHTML += `<li class = "${who} d-flex">
    <p >${content}</p>
    <img src="img/bg2.jpg" alt="">
</li>`;
  } else {
    var content = content==`<img src="img/bg5.jpg" alt="" style = "width:200px;height:200px;margin-left:20px;">`?content:`<p>${content}</p>`
    ul.innerHTML += `<li class = "${who} d-flex">
    <img src="img/bg4.jpg" alt="" >
    ${content}
</li>`;
  }
  bot();
}
document.body.onkeydown = (e) => {
  if (e.key == "Enter") {
    send.click();
  }
};

function msgInclude(text,val){
  if(text.includes(val)){
    return true;
  }
  return false;
}
function suiji(min,max){//1-5
  return Math.floor(Math.random()*(max-min+1) +min);
}

function myselfMessage(text) {
  if ((text.includes("你老婆")||text.includes("你女朋友")||text.includes("你对象"))&&text.includes("谁")) {
    var arr = ["当然是我家宝贝顾婷呀!","呜呜呜,小顾婷你欺负人,不跟你玩啦~","顾婷老婆?你明明知道为什么还问我嘛,害!","看!天上有飞机(我就不告诉你,让你着急,哼!)","小顾婷是我老婆也是我女朋友,略略略~","能做我对象的,除了小顾婷还能有谁呀?"]
    return arr[suiji(0,arr.length-1)];
  } else if ((text.includes("我老公")||text.includes("我对象")||text.includes("我男朋友"))&&text.includes("谁")) {
    var ar = ["害!你老公是小伯兴呀!好好记住啦~","呜呜呜~小顾婷你不爱我了,你把你老公都忘了~","哟呵,想知道呀?我就偏偏不告诉你,有本事顺着网线老揍我呀!略略略~","小顾婷你这个大笨蛋,你知道还干嘛问我嘛?但是我还是会告诉你哈哈,当然是你的小伯兴","咳咳咳~这么直接问我,我会害羞的啦~小顾婷宝贝!"]
    return arr[suiji(0,arr.length-1)];
  } else if (text.includes("关于我们")||text.includes("我们的事情")) {
    return `从我第一次注意到你，我就对你充满了好奇，不自觉的偷瞄你，也想试着去接近你，奈何无工作上的接触，只能在不远处偷偷看你，后来因为一些原因，你要离开这个厂了，我突然感觉的深深的不舍，我在想，我是不是以后再也见不到你，我的内心一直在挣扎，到底要不要去要你的微信，因为我好像没有当面要过微信，所以感觉会很紧张，但是比起见不到你，我还是战胜了自己，去找你要了微信，你也给了，于是我们终于加了微信，那时候我暗自窃喜，这些天来一直想做的事，今天终于做了，心里也松了一口气。
        于是下班回到家，我在想你会不会要离开江门，于是我在微信找你，问你最近的打算，也跟你聊了很多很多，你也表现的很积极，而且打的字非常多，而且感觉很熟悉不像是第一次聊天的样子，我以为你也喜欢我，于是我便开始以试探的方式来证实我的想法，你也明白了我话中的意思，于是便委婉的拒绝了我，顾婷你啊你，知不知道我那时候挺失落的，但是我想起了我的初衷，后面还有很多事要做，于是我放下了对你的喜欢，继续我的日常生活，我煮了碗面吃，喂了狗，洗了澡，坐在大厅刚打开了电脑，突然你的消息出现在了手机上，你想我请教了一些问题，因为刚才你的拒绝，我是失去了与你的聊天欲，但还是回答了你的问题。
       第二天一早我刚出门，又是你的消息出现在我的手机上，我觉得很奇怪，你既然不喜欢我，为什么又频繁的来找我，我真是百思不得其解啊，顾婷你这葫芦里到底装了什么药，我不明白呀，但是听到你说要追我，我是又惊喜又惊讶，我当时在想，我要不要碍于面子，然后潇洒地拒绝你（以前我会这样做），但是我放弃了这个念头，所以我让你追几天再考虑，哈哈哈（就像我说的，我已经接受了其实），你也每次等我下班主动找我，我们每晚都聊了很多，也彼此更了解对方，我开玩笑的说让你请我看电影，你说你正有此意，于是我们约好了端午节那天去看电影，我会同意正式成为你的男朋友。好不容易等到了端午节，我们去看了你请我的第一场电影，非常有意义，我主动牵了你的手，我们手牵手走过了很多街道，还去抓了娃娃（非常感谢我朋友陈威哈哈，不然不会这么顺利拿到这么多娃娃），因为肚子不饿，加上你姐姐的催促，我们不得不赶紧赶回家，这一天真是幸福美好的一天，也是我们脱单的一天哈哈，是6月3号，以后的每一个恋爱周年纪念日的时间。
        后来的每一天，我们都保持着联系，但是在我们的聊天中，得知了你的想法和计划，但是我发现，竟然都不是关于我，于是我有些难过，不满意我在你心里的位置，虽然是男朋友但是好像只是虚名罢了，我跟你说了后，你说你会把我纳入你的未来计划，嘻嘻。
          于是后来我们还去吃了火锅，你送给我六芒星手链，还有我们的画，那天非常开心，顾婷，没想到你竟然瞒着我做这些事，我很是感动，我越来越喜欢你了。
         期间我们之间也有许多误会，这些误会让我很是吃醋，生气，让我感觉到这不是我想要的相互奔赴，不过还好真的只是误会，不然我可饶不了你顾婷，因为我会把你忘的干干净净，在开启我全新的生活，但是会有遗憾，唉。
          后来终于迎来了你18岁生日，我们第一次晚上出来逛街吃东西，还买了蛋糕，真是恭喜你呀，你正式的成为了一个成年人，已经不是小孩子了，等下一个人生阶段或许你已经是一位母亲了，而我是一位父亲，我们会有一个属于我们的，非常非常幸福的家。
            随着时间的飞逝，我们越来越熟悉彼此，了解对方，感情也愈发的浓厚，我们更加的亲密了，从牵手，到我们的第一次亲吻，拥抱。我跟你说，亲吻过后，咋们的亲密度那可是迅速上升，打破了我对你之间的屏障，和你有了这么亲密的接触，觉得很开心，因为我们都是初吻，第一次和喜欢的人接吻，原来是这么美妙的感觉哈哈哈。
           我很多次空闲的时候，包括睡觉前，都会想象我们的未来，想到我们同居的生活，想到我和你一起做饭，抱着你一起看电视，和你一起撸猫，逗狗，和你一起吃饭睡觉，和你一起出门玩耍，在外面多晚也不怕，玩累了我们就回家洗澡，一起睡上一个美觉，大半夜饿了，就起来做宵夜，早上早起给你做早餐，然后叫你起床，还有和你分工做家务的画面，招待家人朋友来我们家玩的场景，还有你向我撒娇，我对你万般宠爱的样子，还有我们去旅行路过美丽风景的画面，还有我给你买了礼物给你惊喜的画面，还有我们晚上说的半夜恶作剧，还有你躺在我怀里一起看小说的画面，很多很多真的很期待属于我们的二人世界，所以顾婷，我讨厌工作后还是异地恋，呜呜呜，因为如果异地恋的话，我说的这些画面都看不到啦。
           所幸有一次，受你姐的邀请，我去了你家，吃到了你家人做的饭菜，也吃到了顾婷宝贝帮我夹的菜，你姐对我印象也还不错，所以我希望你姐能在你其他家人面前帮我说说好话，这样你爸妈或者弟妹会更放心一点，等我以后机会成熟，一定好好亲自拜访一下。
         开学前的最后一次约会，是我们见面最长的一天，还亲自在你面前做给你做了饭，真好哈哈，和你全程牵着手看完了一部电影，本来想在亲你几下的，奈何到处都是人。不过有趣的事，第一次看到你拉肚子很急的样子（抱歉了哈顾婷），是我没见过的你，哈哈还好最后解决了，看你那么急，我已经做了最坏的打算，不过我不会嫌弃你的，给你洗裙子我也愿意。
           我们的异地恋终于开始了，真是既开心又难过，难过的是，要与你分开一段时间，长时间不能见到你，很难受，开心的是，我要成长了，要准备迎接社会，成为一个经济独立的人，摆脱对我的束缚，因为现在作为学生的我，经济和能力上不足，导致我有很多事想和你做，却做不了。
         你在我心里真的太重要了，你可是成为了我关系塔上的顶端唉，身边任何人与你相比，我会毫不犹豫选择你，在我的未来，无论做什么事，第一个会想到你，说实话，你在我心中的位置，连我自己都羡慕得不得了。我真的真的是很爱很爱你，你知道吗顾婷，我对你啊，是招摇过市，明目张胆，溢于言表的喜欢。
        未来的日子不能少了你，所以我一定会和你一起走下去，就像你说的，没话题了，我们就找话题，感情淡了，我们就再培养，因为我想陪你情窦初开，还想陪你两鬓斑白，顾婷，我爱你，很爱你，非常爱你！`;
  } else if ((text.includes("你老婆")||text.includes("你女朋友")||text.includes("你对象"))&&(text.includes("样子")||text.includes("模样")||text.includes("样"))) {
    return `<img src="img/bg5.jpg" alt="" style = "width:200px;height:200px;margin-left:20px;">`;
  } else if((text.includes("喜欢")&&text.includes("类型"))||text.includes("理想型")){
    return "当然大眼睛 1米52 35的鞋码 能穿s或m码的衣服 可可爱爱 还得爱小伯兴 名字要叫顾婷! 呼呼呼~先说这么多";
  } else if(text.includes("早上好")){
    var arr = ["老婆早上好!","早上好呀小顾婷","这么早呀?老婆快去吃早餐啦","今天早上天气不错唉,小顾婷有没有想我呀?","哈哈哈哈,小顾婷,新的一天也要开开心心喔","早早早早早~你的小伯兴出现啦!","早呀,我还没起床呢,老婆快拉我起来!"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("晚上好")){
    var arr = ["晚上好呀,天虽然黑了,但是你还在发光唉","晚上好,天黑啦,想和你一起看我学校那个最亮的星星啦","晚上好小顾婷","晚上好呀!今晚的月亮好圆~"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("歌")&&(text.includes("推荐")||text.includes("介绍"))){
    var arr = ["当然是<<起风了>> ","这首也不错呢<<昨日青空>>","老婆听这首<<望>>","祝你一路生花<<一路生花>>"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("老公")&&(text.includes("小伯兴")||text.includes("伯兴")||text.includes("陈伯兴")||text.includes("兴崽"))){
    var arr = ["我不仅是你男朋友,还是你老公~哈哈","没错没错,我是你老公,你是我老婆","你可真幸运呀,年纪轻轻就遇到了你未来老公呢!","是我是我,你老公就是我,爱你喔~","我跟你讲个公开的秘密(我老婆是小顾婷)"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("爱你")||text.includes("喜欢你")){
    var arr = ["呜呜呜,小顾婷,我也好爱你的!","老婆,我超级超级爱你","我知道呀,但是我也想让你知道,小顾婷我爱你!","好巧，我也越来越爱自己了","这句话还是从你口中说出来才有感觉呢哈哈"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("爱我")||text.includes("喜欢我")){
    var arr = ["小顾婷,我好爱你的!","老婆,我超级喜欢你,超级爱你!","身为老公我不爱你谁爱你呀?","陈伯兴只喜欢顾婷,只爱顾婷","当然呀,大笨蛋,你很重要唉","我可以谁都不爱,但你是例外哈哈哈~"];
    return arr[suiji(0,arr.length-1)]
  }else if((text.includes("老婆")||text.includes("女朋友")||text.includes("对象"))&&(text.includes("外貌")||text.includes("特征")||text.includes("样子"))){
    var arr = ["哈哈,是我喜欢的样子呀(具体什么样子不告诉你)","她呀?眼睛大大的,可可爱爱的哈哈","老婆想知道呀?我不告诉你略略略~","看来你很想知道呢,照照镜子你就知道了呀!"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("谢谢")){
    var arr = ["自己人才不说谢谢!","干嘛那么客气,呜呜呜","摆脱,我是你老公唉,干嘛说谢谢","不谢不谢,哼(略略略)","谢什么谢,要说老公真好","不客气啦!臭顾婷"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("爱")&&text.includes("谁")){
    var arr = ["小伯兴爱小顾婷,小顾婷爱小伯兴,谁让我们是天生一对呢哈哈哈~","咱两是相互奔赴唉,相互爱着对方","我很爱你,我知道你也很爱我,所以我现在好开心","你猜,臭顾婷,我才不说出口","你看!天上有飞机(转移话题)"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("谈")&&text.includes("恋爱")){
    var arr = ["在谈啦小顾婷","我已经有小顾婷啦,现在很幸福唉","不是和你谈了嘛 喔~","谈呀,这不一直在等你嘛","只和小顾婷谈恋爱"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("多久")&&text.includes("爱")){
    var arr = ["大笨蛋,会爱很久很久,久到我头发全白,走不动路,睁不开眼睛那天","你能在我身边待多久,我就能爱你多久","会比你爱我的时间更久一些","一直到我的脑细胞停止工作的那一刻"];
    return arr[suiji(0,arr.length-1)]
  }else if(text.includes("梦到")){
    return `心理学上说：
    当你梦见一个人的时候，不是他在想你，也不是他在遗忘你。
    而是你的潜意识里面一直都有他，于是以梦的形式告诉你，“你一直在想他”。
    是你的身体感受到了想念，替你见了一面朝思暮想的人`;
  }else if(text.includes("嘦姕")){
    return `嘦姕”(jiao zi)。它的意思大概就是：“心系一人，钟情一生；只要此女，别无他人”`;
  }else if(text.includes("猪")){
    var arr = ["你才是猪!呜呜呜~不许欺负我!","如果我是猪的话,那你就是我的同类唉","你说呢!才不是,明明是你的掌上明珠 哼","我是普通的猪,你是猪中之猪,称为猪猪侠~"]
    return arr[suiji(0,arr.length-1)];
  }else if(text.includes("伯兴")&&text.includes("明星")){
    var arr = ["没错,我就是顾婷你的明日之星","当然是,是小顾婷心里的明星,是无可替代的兴,是小顾婷的心上人"]
    return arr[suiji(0,arr.length-1)];
  }else if(text.includes("老公")&&text.length<=6){
    var arr = ["小顾婷老婆?","你老公在这呢","顾婷老婆有事嘛?","老婆??叫人家干啥呢!"]
    return arr[suiji(0,arr.length-1)];
  }else if((text.includes("顾婷")&&text.includes("伯兴"))&&text.indexOf("顾婷")<text.indexOf("伯兴")&&text.includes("什么人")){
    var arr = ["顾婷是小伯兴的老婆呢,是小伯兴最最最重要的人","是无可替代的存在,是小伯兴的小太阳","是小伯兴女朋友,也是老婆,爱你哟!"]
    return arr[suiji(0,arr.length-1)];
  }else if((text.includes("顾婷")&&text.includes("伯兴"))&&text.indexOf("伯兴")<text.indexOf("顾婷")&&text.includes("什么人")){
    var arr = ["这个问题得由你来亲自回答呢,老婆~","我在你心里当然是很重要的人呀,你说对吧哈哈","我更想听你说出口唉"]
    return arr[suiji(0,arr.length-1)];
  }else if(text.includes("梦想")&&text.includes("你的")){
    var arr = ["我的梦想就是赚很多很多钱,和顾婷买一套漂亮的房子,买一辆车,然后来一场说走就走的旅行,去看好看的风景,去吃好吃的美食","和我的老婆顾婷有一个家,有一个女儿一个儿子,一家四口和和睦睦,有爱的生活","成为顾婷的依靠,能保护你,能帮助到你的家人,尽最大努力去对你好"]
    return arr[suiji(0,arr.length-1)];
  }else if(text.includes("你")&&text.includes("儿子")&&(text.includes("谁")||text.includes("叫什么")||text.includes("名字"))){
    var arr = ["我儿子叫陈嘉顾,你自己儿子都不认得啦?","摆脱,也是你儿子唉,咋自己都认不得!","嘉顾,陈嘉顾,你咋当妈妈的,哼"]
    return arr[suiji(0,arr.length-1)];
  }else if(text.includes("你")&&text.includes("女儿")&&(text.includes("谁")||text.includes("叫什么")||text.includes("名字"))){
    var arr = ["我女儿叫陈潇顾,你要不要亲自问问","我:'嗯?'(女儿这时候偷听到对你说:'妈?你失忆啦?你女儿都认不得啦?')","明知故问嘛你这不就,臭顾婷"]
    return arr[suiji(0,arr.length-1)];
  }else if(text.includes("什么时候")&&text.includes("结婚")){
    var arr = ["结婚唉,四年后的我们的婚礼就会举行呢!","四年后呀哈哈哈,如果小顾婷要是想早点结婚就好了,想名正言顺的做你的老公"]
    return arr[suiji(0,arr.length-1)];
  }else if(text.includes("结婚")&&(text.includes("谁")||text.includes("哪位")||text.includes("哪个"))){
    var arr = ["当然是和小顾婷你结婚呀,大傻瓜!","我要和我面前的这位(你)结婚","结婚这种大事,除了你还有谁呀婷儿"];
    return arr[suiji(0,arr.length-1)];
  }else if(text.includes("我")&&(text.includes("不开心")||text.includes("难过"))){
    var arr = ["小顾婷干嘛不开心呀,小伯兴惹你生气了嘛","小顾婷不开心我就陪你一起不开心,笑一个嘛!老婆","不开心那我就亲亲你,你不要不开心嘛老婆,我给你买糖吃"];
    return arr[suiji(0,arr.length-1)];
  }
  return "";
}
