//匹配与当前元素的前一个同辈元素
//$('li:nth-child(3)').prev().css('color','red')

//匹配与当前元素的前一个所有同辈元素
//prevAll时jquery对象中的元素是从后向前排的
//$('li:nth-child(5)').prevAll(':gt(1)').css('color','red')
//找相同的类名
//$('li:nth-child(5)').siblings('.ff').css('color','red')
//next()匹配与当前元素的下一个同辈元素
//$('li:nth-child(4)').next().css('color','red')
//lt小于指定索引
//gt大于指定索引
//$('li:nth-child(4)').nextAll(':lt(2)').css('color','red')

//$('li').find('strong').css('color','blue')

//$('li').children().css('font-size','30px')

//查找匹配元素内部所有的子节点
//console.log($('li').contents())

//parent()找到父元素
//$('strong').parent().css('color','blue')

//$('article').find('strong').parent().css('border','1px solid red')
//查找
//$('strong').parents('article').css('border','1px solid red')

//查找当前所有元素
//$('strong').parentsUntil('article').css('border','1px solid red')

//closest从元素本身开始,逐层向上级元素匹配
//$('strong').closest('section').css('border','1px solid red')

//返回第一个匹配元素的
//$('strong').offsetParent().css({
//	'background-color':'red',
//	'color':'white'
//})


//$('h1').nextUntil('p').css('color','red')

$('section').find('strong').andSelf().css('color','blue')

