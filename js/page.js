function initFlowers(){
    var uiRatio = 1920/1400
      , wRatio = 1920/300  //设计稿背景花朵宽 比例
      , hRatio = 1400/100  //导航距离顶部的高度比例
      , fhRatio = 1400/560  //设计稿轮播花朵比例
      , fwRatio = 1920/250  //设计稿轮播花朵宽比
      , coverRatio = 1920/590 //设计稿系列封面比例
      , slideMarginRatio = 1920/140   //设计稿花瓶上边距
      , screenWidth = $(window).width() //屏幕宽
      , screenHeight = $(window).height()  //屏幕高
      , imgWidth = Math.round(screenWidth/wRatio)  //背景花宽
      , imgHeight = Math.round(screenHeight/hRatio) //背景花高
      , flowerHeight = Math.round(screenHeight/fhRatio)  //花瓶高
      , flowerWidth = Math.round(screenWidth/fwRatio) //花瓶宽
      , marTop = Math.round(screenHeight/hRatio) //导航上边距
      , topOuterHeight = $('.header').outerHeight() //导航高度
      , coverWidth = Math.round(screenWidth/coverRatio)  //系列内页banner
      , slideMargin = Math.round(screenHeight/slideMarginRatio)   //轮播花瓶上边距   
      , videoWRatio1 = 1920/705
      , videoWRatio2 = 1920/280
      , videoWRatio3 = 1920/320
      , videoHRatio1 = 1400/425
      , videoHRatio2 = 1400/205
      , videoHRatio3 = 1400/235;
    $('.fws-img').css({'width':imgWidth});  //背景花朵自适应大小
    $('.banner-bg-img1').css({'width':imgWidth,'left':(screenWidth-800)/2-imgWidth});
    $('.banner-bg-img2').css({'width':imgWidth,'right':(screenWidth-800)/2-imgWidth});
    $('.header').css({'marginTop':marTop}); //导航距离上边距自适应
    $('.fws-bg-1').css({'top':topOuterHeight+marTop}); //绝对定位上左背景花朵
    $('.fws-bg-2').css({'top':topOuterHeight+marTop}); //绝对定位上右背景花朵        
    //$('.banner').css({'top':topOuterHeight+marTop}); //banner上边定位
    $('.fws-large').find('img').css({'width':flowerWidth}); //轮播花朵自适应大小
    var imgWidth = $('.fws-large').find('img').width();
    $('.fws-large').find('img').css({'marginLeft':-imgWidth/2});
    var slideHeight = $('.fws-large').find('img').height();
    //设置中间大花瓶panel的高度自适应
    $('.fws-slide').css({'marginTop':slideMargin,'height':slideHeight*1.1})
        .find('.fws-large').css({'height':slideHeight*1.1})
        .find('p').css({'width':slideHeight*1.1,'height':slideHeight*1.1,'marginLeft':-slideHeight*1.1/2}); 

    //$('.fws-slide').css({'paddingTop':(topOuterHeight+marTop)}); //大花瓶上间距自适应    
    var hiswrapHeight = screenHeight-marTop-$('.header').outerHeight()-100
       ,videoHeight = screenHeight-marTop-$('.header').outerHeight();
    $('.history-wrap').css({'height':hiswrapHeight}); //设置品牌历史内容高度
    $('.video-panel').css({'height':videoHeight-$('.video-type').height()});
    $('.series-cover').find('img').css({'width':coverWidth});
    var coverHeight = $('.series-cover').find('img').height()
       ,coverPanel = $('.series-cover').parent().width()
       ,summaryWidth = coverPanel-coverWidth
       ,coverOuterHeight = $('.series-cover').height()+40
       ,filterHeight = $('.series-filter').outerHeight()
       ,proListHeight = screenHeight -marTop -$('.header').outerHeight() -coverOuterHeight -filterHeight -40;
    $('.series-summary').css({'width':summaryWidth-30,'height':coverHeight});
    $('.series-product').css({'height':proListHeight});
    if(screenWidth<1280){
        $('body').css({'overflowX':'auto'});   //宽度小于1280滚动条自动
    }
    if(screenHeight<500){
        $('body').css({'overflowY':'auto'});   //高度小于600滚动条自动
    }
    
    //下拉导航
    $('.nav').find('li').mouseenter(function(){
        var index = $(this).index(),
            width = $(this).width();
        var offsetLeft = $(this).offset().left+width/2; 
        if(index==1){                                
            $('.banner').removeClass('skin-banner').fadeIn('slow').find('.banner-cont').html('').load('brand-banner.html');
            $('.banner').find('.arrow').css({'left':offsetLeft});
        }else if(index==2){
            $('.banner').addClass('skin-banner').fadeIn('slow').find('.banner-cont').html('').load('skincare-banner.html');
            $('.banner').find('.arrow').css({'left':offsetLeft});
        }else{
            $('.banner').hide();
        }
    })
    
   // $('.video-list').find('li[class="point"]').css();
    //视频类型切换
    $('.video-type').delegate('li','click',function(){
        var ind = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.video-panel').addClass('hide').eq(ind).removeClass('hide');
    })
    
    //视频播放弹层
    $('.video-list').delegate('li>.play','click',function(){
        $('.popup-video').removeClass('hide').find('.video-cont').html('').load('video-popup.html');
    })
    $('.video-popup-panel').delegate('.popup-close','click',function(){
        $('.popup-video').addClass('hide').find('.video-cont').html('');
    })
    $('.banner').mouseleave(function(){
        $(this).fadeOut('fast');
    })
}
$(window).load(function(){
    initFlowers();
    //导航选中样式控制
    var parameter = getParamter('link');
    if(parameter=='index'){
        $('.nav').find('li').eq(0).addClass('cur').siblings().removeClass('cur');
    }else if(parameter=='history'){
        $('.nav').find('li').eq(3).addClass('cur').siblings().removeClass('cur');
    }else if(parameter=='video'){
        $('.nav').find('li').eq(4).addClass('cur').siblings().removeClass('cur');
    }else{
        $('.nav').find('li').removeClass('cur');
    }
    //切换花瓶样式
    $('.fws-small').find('li').each(function(){
        var $this = $(this)
           ,type = $(this).attr('class')
           ,typeName = $(this).find('img').attr('alt')
           ,vasePanel = $('.fws-large>p');
        $this.hover(      
            function(){   
                //vasePanel.css({'opacity':'0'}).animate({'opacity':'1'},1500);
                switch(type){
                    case 'type-jyh':
                        $this.find('img').attr('src','../images/rancle-f1-slt.png');
                        vasePanel.attr('class','bg-jyh animate').addnext('img')
                            .attr({'src':'../images/f_jyh.png','alt':typeName,'title':typeName});          
                        break;
                    case 'type-bc':
                        $this.find('img').attr('src','../images/rancle-f2-slt.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1.png');
                        vasePanel.attr('class','bg-bc animate').next('img').attr({'src':'../images/f_bc.png','alt':typeName,'title':typeName});
                        break;
                    case 'type-bh':
                        $this.find('img').attr('src','../images/rancle-f3-slt.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1.png');
                        vasePanel.attr('class','bg-bh animate').next('img').attr({'src':'../images/f_bh.png','alt':typeName,'title':typeName});
                        break;
                    case 'type-mg':
                        $this.find('img').attr('src','../images/rancle-f4-slt.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1.png');
                        vasePanel.attr('class','bg-mg animate').next('img').attr({'src':'../images/f_mg.png','alt':typeName,'title':typeName});
                        break;
                    case 'type-lh':
                        $this.find('img').attr('src','../images/rancle-f5-slt.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1.png');
                        vasePanel.attr('class','bg-lh animate').next('img').attr({'src':'../images/f_lh.png','alt':typeName,'title':typeName});
                        break;
                    case 'type-zzh':
                        $this.find('img').attr('src','../images/rancle-f6-slt.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1.png');
                        vasePanel.attr('class','bg-zzh animate').next('img').attr({'src':'../images/f_zzh.png','alt':typeName,'title':typeName});
                        break;
                    case 'type-ch':
                        $this.find('img').attr('src','../images/rancle-f7-slt.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1.png');
                        vasePanel.attr('class','bg-ch animate').next('img').attr({'src':'../images/f_ch.png','alt':typeName,'title':typeName});
                        break;
                    case 'type-xrk':
                        $this.find('img').attr('src','../images/rancle-f8-slt.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1.png');
                        vasePanel.attr('class','bg-xrk animate').next('img').attr({'src':'../images/f_xrk.png','alt':typeName,'title':typeName});
                        break;
                    default :
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1.png');
                        vasePanel.attr('class','bg-jyh animate').next('img').attr({'src':'../images/f_jyh.png','alt':'金银花系列','title':'金银花系列'});
                        break;
                };

            },function(){
                //vasePanel.css({'opacity':0}).animate({'opacity':'1'},1500);
                vasePanel.attr('class','bg-jyh').next('img').attr({'src':'../images/f_jyh.png','alt':'金银花系列','title':'金银花系列'});
                switch(type){
                    case 'type-jyh':                               
                        vasePanel.attr('class','bg-jyh').next('img').attr({'src':'../images/f_jyh.png','alt':'金银花系列','title':'金银花系列'});
                        break;
                    case 'type-bc':
                        $this.find('img').attr('src','../images/rancle-f2.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1-slt.png');
                        break;
                    case 'type-bh':
                        $this.find('img').attr('src','../images/rancle-f3.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1-slt.png');
                        break;
                    case 'type-mg':
                        $this.find('img').attr('src','../images/rancle-f4.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1-slt.png');                        
                        break;
                    case 'type-lh':
                        $this.find('img').attr('src','../images/rancle-f5.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1-slt.png');
                        break;
                    case 'type-zzh':
                        $this.find('img').attr('src','../images/rancle-f6.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1-slt.png');
                        break;
                    case 'type-ch':
                        $this.find('img').attr('src','../images/rancle-f7.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1-slt.png');
                        break;
                    case 'type-xrk':
                        $this.find('img').attr('src','../images/rancle-f8.png');
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1-slt.png');
                        break;
                    default :
                        $this.siblings('li[class="type-jyh"]').find('img').attr('src','../images/rancle-f1-slt.png');
                        break;
                };

            }
        )
    });
})
$(window).resize(function(){
    //重置窗口 自适应
    initFlowers();
})
//获取url参数
function getParamter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null){
        return unescape(r[2]);         
    }else{
        return null;
    }
}
//浏览器版本判断
function browserJudge(){
    var browser=navigator.appName;
    var b_version=navigator.appVersion; 
    var version=b_version.split(";"); 
    var trim_Version=version[1].replace(/[ ]/g,""); 
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE10.0"){ 
    }else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE11.0") { 
    }else{
    }
}


