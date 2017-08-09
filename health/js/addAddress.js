

(function($){

    var shengfen = {

        moren: {
            name: "省份",
            id: 200
        },
        beijing: {
            name: "河北省",
            id: 201
        },
        tianjing: {
            name: "北京省",
            id: 202
        },
        shanghai: {
            name: "山东省",
            id: 203
        }

    };

    var city = {

        200: [{
            name: "城市",
            pinyin: "",
            id: 5000
        }],
        201: [{
            name: "承德",
            pinyin: "",
            id: 5002
        }, {
            name: "唐山",
            pinyin: "",
            id: 5001
        }],
        202: [{
            name: "北京",
            pinyin: "",
            id: 5003
        }, {
            name: "怀柔",
            pinyin: "",
            id: 5004
        }],
        203: [{
            name: "济南",
            pinyin: "",
            id: 5005
        }, {
            name: "泰安",
            pinyin: "",
            id: 5006
        }]

    };

    var qu = {

        5000: [{
            name: "地区",
            pinyin: "",
            id: 129643
        }],
        5001: [{
            name: "开平区",
            pinyin: "",
            id: 129643
        },{
            name: "路北",
            pinyin: "",
            id: 129643
        }],
        5002: [{
            name: "双滦区",
            pinyin: "",
            id: 129643
        },{
            name: "双桥区",
            pinyin: "",
            id: 129643
        }],
        5003: [{
            name: "昌平区",
            pinyin: "",
            id: 129643
        },{
            name: "朝阳区",
            pinyin: "",
            id: 129643
        }],
        5004: [{
            name: "怀柔区",
            pinyin: "",
            id: 129643
        },{
            name: "小东庄",
            pinyin: "",
            id: 129643
        }],
        5005: [{
            name: "天桥区",
            pinyin: "",
            id: 129643
        },{
            name: "市中区",
            pinyin: "",
            id: 129643
        }],
        5006: [{
            name: "泰山区",
            pinyin: "",
            id: 129643
        },{
            name: "岱岳区",
            pinyin: "",
            id: 129643
        }]

    };

    //0. 获取元素
    var selects = $('select');

    //省份
    var sf = selects.eq(0);

    //城市
    var ch = selects.eq(1);

    //市区
    var sq = selects.eq(2);

    //1.遍历生成品牌列表
    var html = '';

    $.each(shengfen,function(i){

        html += '<option value="'+this.id+'">'+this.name+'</option>';

    });

    sf.children().remove();

    sf.append(html);

    sf.change(function(){

        var id = this.value;

        var modelData = city[id] || [];

        var html = '';

        $.each(modelData,function(i){

            html += '<option value="'+this.id+'">'+this.name+'</option>';

        });

        ch.children().remove();

        ch.append(html);

    });

    ch.change(function(){

        var id = this.value;

        var carModel = qu[id] || [];

        var html = '';

        $.each(carModel,function(){

            html += '<option value="'+this.id+'">'+this.name+'</option>';

        });

        sq.children().remove();

        sq.append(html);

    });

})(Zepto);


//  input值的判断
var obj = {
    uname: {
        reg: /^\S{2,12}$/i,
        error: '最少两个字，最多十二个字',
        success: '正确'
    },
    tell: {
        reg: /^1[34578]\d{9}$/,
        error: '最少七位数',
        success: '正确'
    },
    address1: {
        reg: /^\S{2,12}$/i,
        error: '最少两个字，最多十二个字',
        success: '正确'
    },
    email: {
        reg: /^\S{2,12}$/i,
        error: '输入六位数',
        success: '正确'
    }
};

$('.finish').click(function () {
    $.each(obj, function (i) {
        var cur = $('input[name=' + i + ']');
        var config = this;
        var reg = config.reg;
        var res = reg.test(cur.val());
        var tip = res ? config.success : config.error;
        if (!res) {
            alert(tip);
            return false
        }


    })
});
$('input').blur(function () {

    var config = obj[this.name];

    console.log(config)

})