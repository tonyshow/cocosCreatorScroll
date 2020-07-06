// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var scrollTest = require("./scrollTest")
cc.Class(
{
    extends: cc.Component,

    properties:
    {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        scorllCtr:
        {
            default: null,
            type: scrollTest
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start()
    {
        let data = []
        for (let i = 0; i < 1000000; ++i)
        {
            data.push(i)
        }
        this.scorllCtr.init(data)
    },

    // update (dt) {},
});