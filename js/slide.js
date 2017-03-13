$(function(){
    var count=$('.fws-large li').length;
	var num=0;
	var timer_banner=null;
	$('.fws-large li:gt(0)').hide();//页面加载隐藏所有的li 除了第一个    
    //小图标鼠标移入切换
    $('.fws-small').find('li').mouseenter(function(){
        var $this = $(this),
            type = $this .attr('class'),
            typeName = $this .find('img').attr('alt');
        $('.fws-small').find('li[class=type-jyh]').find('img').attr('src','../images/rancle-f1.png');
        $('.fws-small').find('li[class=type-bc]').find('img').attr('src','../images/rancle-f2.png');
        $('.fws-small').find('li[class=type-bh]').find('img').attr('src','../images/rancle-f3.png');
        $('.fws-small').find('li[class=type-mg]').find('img').attr('src','../images/rancle-f4.png');
        $('.fws-small').find('li[class=type-lh]').find('img').attr('src','../images/rancle-f5.png');
        $('.fws-small').find('li[class=type-zzh]').find('img').attr('src','../images/rancle-f6.png');
        $('.fws-small').find('li[class=type-ch]').find('img').attr('src','../images/rancle-f7.png');
        $('.fws-small').find('li[class=type-xrk]').find('img').attr('src','../images/rancle-f8.png');
        switch(type){
            case 'type-jyh':
                $this.find('img').attr('src','../images/rancle-f1-slt.png');
                break;
            case 'type-bc':
                $this.find('img').attr('src','../images/rancle-f2-slt.png');
                break;
            case 'type-bh':
                $this.find('img').attr('src','../images/rancle-f3-slt.png');
                break;
            case 'type-mg':
                $this.find('img').attr('src','../images/rancle-f4-slt.png');
                break;
            case 'type-lh':
                $this.find('img').attr('src','../images/rancle-f5-slt.png');
                break;
            case 'type-zzh':
                $this.find('img').attr('src','../images/rancle-f6-slt.png');
                break;
            case 'type-ch':
                $this.find('img').attr('src','../images/rancle-f7-slt.png');
                break;
            case 'type-xrk':
                $this.find('img').attr('src','../images/rancle-f8-slt.png');
                break;
            default:
                break;
            
        }
        var currentNum = $(this).index();
       $('.fws-large li').eq(currentNum).fadeIn(2000).siblings().fadeOut('slow');
        num = currentNum;
	});
	
	//自动播放
//	function bannerMoveks(){
//		timer_banner=setInterval(function(){
//			move_banner()
//		},5000)
//	};
	//bannerMoveks();//开始自动播放

	//鼠标移动到banner上时停止播放
//	$('.fws-large').find('img').mouseover(function(){
//		clearInterval(timer_banner);
//	});
//    $('.fws-small li').mouseover(function(){
//        clearInterval(timer_banner);
//    })
//	//鼠标离开 banner 开启定时播放
//	$('.fws-large').find('img').mouseout(function(){
//		bannerMoveks();
//	});    
//    $('.fws-small li').mouseout(function(){
//		bannerMoveks();
//	});
    function move_banner(){
        if(num==count-1){
            num=-1
        }
        //大图切换
        $('.fws-large li').eq(num+1).fadeIn(2000).siblings().fadeOut('slow');
        //小图切换
        $('.fws-small').find('li[class=type-jyh]').find('img').attr('src','../images/rancle-f1.png');
        $('.fws-small').find('li[class=type-bc]').find('img').attr('src','../images/rancle-f2.png');
        $('.fws-small').find('li[class=type-bh]').find('img').attr('src','../images/rancle-f3.png');
        $('.fws-small').find('li[class=type-mg]').find('img').attr('src','../images/rancle-f4.png');
        $('.fws-small').find('li[class=type-lh]').find('img').attr('src','../images/rancle-f5.png');
        $('.fws-small').find('li[class=type-zzh]').find('img').attr('src','../images/rancle-f6.png');
        $('.fws-small').find('li[class=type-ch]').find('img').attr('src','../images/rancle-f7.png');
        $('.fws-small').find('li[class=type-xrk]').find('img').attr('src','../images/rancle-f8.png');
        $('.fws-small li').eq(num+1).find('img').attr('src','../images/rancle-f'+(num+2)+'-slt.png');
        num++;
    }
})