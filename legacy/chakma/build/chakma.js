if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_chakma());
}
function Keyboard_chakma()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_chakma";
  this.KN="𑄌𑄋𑄴𑄟𑄳𑄦";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={
    "shift": ["~","!","@","#","𑅇","%","𑅀","𑄀","*","(",")","_",";","","","","𑄁","𑄠","𑄔","𑄜","𑄒","𑄍","𑄏","𑄐","𑄊","𑄅","{","}","𑄂","","","","𑄱","𑄫","𑄩","𑄃","𑅁","𑄞","𑄈","𑄗","𑄙","𑅅","\"","","","","","","","𑅆","𑄯","𑄰","𑄣","𑄕","𑄲","𑄆","<",">","𑅃","","","","","",""],
    "default": ["`","𑄷","𑄸","𑄹","𑄺","𑄻","𑄼","𑄽","𑄾","𑄿","𑄶","-","=","","","","𑄋","𑄡","𑄓","𑄛","𑄑","𑄌","𑄎","𑄦","𑄉","𑄤","[","]","𑅂","","","","𑄭","𑄪","𑄨","𑄧","𑄳","𑄝","𑄇","𑄖","𑄘","𑄴","'","","","","","","","𑄄","𑄮","𑄬","𑄢","𑄚","𑄥","𑄟",",",".","𑅄","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.1";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KS=1;
  this.KVKL={
  "tablet": {
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "𑄷"
              },
              {
                "id": "K_2",
                "text": "𑄸"
              },
              {
                "id": "K_3",
                "text": "𑄹"
              },
              {
                "id": "K_4",
                "text": "𑄺"
              },
              {
                "id": "K_5",
                "text": "𑄻"
              },
              {
                "id": "K_6",
                "text": "𑄼"
              },
              {
                "id": "K_7",
                "text": "𑄽"
              },
              {
                "id": "K_8",
                "text": "𑄾"
              },
              {
                "id": "K_9",
                "text": "𑄿"
              },
              {
                "id": "K_0",
                "text": "𑄶"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "text": "𑄋",
                "pad": "75"
              },
              {
                "id": "K_W",
                "text": "𑄡"
              },
              {
                "id": "K_E",
                "text": "𑄓"
              },
              {
                "id": "K_R",
                "text": "𑄛"
              },
              {
                "id": "K_T",
                "text": "𑄑"
              },
              {
                "id": "K_Y",
                "text": "𑄌"
              },
              {
                "id": "K_U",
                "text": "𑄎"
              },
              {
                "id": "K_I",
                "text": "𑄦"
              },
              {
                "id": "K_O",
                "text": "𑄉"
              },
              {
                "id": "K_P",
                "text": "𑄤"
              },
              {
                "id": "K_LBRKT",
                "text": "["
              },
              {
                "id": "K_RBRKT",
                "text": "]"
              },
              {
                "id": "T_new_136",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "`"
              },
              {
                "id": "K_A",
                "text": "𑄭"
              },
              {
                "id": "K_S",
                "text": "𑄪"
              },
              {
                "id": "K_D",
                "text": "𑄨"
              },
              {
                "id": "K_F",
                "text": "𑄧"
              },
              {
                "id": "K_G",
                "text": "𑄳"
              },
              {
                "id": "K_H",
                "text": "𑄝"
              },
              {
                "id": "K_J",
                "text": "𑄇"
              },
              {
                "id": "K_K",
                "text": "𑄖"
              },
              {
                "id": "K_L",
                "text": "𑄘"
              },
              {
                "id": "K_COLON",
                "text": "𑄴"
              },
              {
                "id": "K_QUOTE",
                "text": "'"
              },
              {
                "id": "K_BKSLASH",
                "text": "𑅂"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "160",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "𑄄"
              },
              {
                "id": "K_X",
                "text": "𑄮"
              },
              {
                "id": "K_C",
                "text": "𑄬"
              },
              {
                "id": "K_V",
                "text": "𑄢"
              },
              {
                "id": "K_B",
                "text": "𑄚"
              },
              {
                "id": "K_N",
                "text": "𑄥"
              },
              {
                "id": "K_M",
                "text": "𑄟"
              },
              {
                "id": "K_COMMA",
                "text": ","
              },
              {
                "id": "K_PERIOD",
                "text": "."
              },
              {
                "id": "K_SLASH",
                "text": "𑅄"
              },
              {
                "id": "T_new_162",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "930"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "!"
              },
              {
                "id": "K_2",
                "text": "@"
              },
              {
                "id": "K_3",
                "text": "#"
              },
              {
                "id": "K_4",
                "text": "𑅇"
              },
              {
                "id": "K_5",
                "text": "%"
              },
              {
                "id": "K_6",
                "text": "𑅀"
              },
              {
                "id": "K_7",
                "text": "𑄀"
              },
              {
                "id": "K_8",
                "text": "*"
              },
              {
                "id": "K_9",
                "text": "("
              },
              {
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": ";"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "text": "𑄁",
                "pad": "75"
              },
              {
                "id": "K_W",
                "text": "𑄠"
              },
              {
                "id": "K_E",
                "text": "𑄔"
              },
              {
                "id": "K_R",
                "text": "𑄜"
              },
              {
                "id": "K_T",
                "text": "𑄒"
              },
              {
                "id": "K_Y",
                "text": "𑄍"
              },
              {
                "id": "K_U",
                "text": "𑄏"
              },
              {
                "id": "K_I",
                "text": "𑄐"
              },
              {
                "id": "K_O",
                "text": "𑄊"
              },
              {
                "id": "K_P",
                "text": "𑄅"
              },
              {
                "id": "K_LBRKT",
                "text": "{"
              },
              {
                "id": "K_RBRKT",
                "text": "}"
              },
              {
                "id": "T_new_191",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "~"
              },
              {
                "id": "K_A",
                "text": "𑄱"
              },
              {
                "id": "K_S",
                "text": "𑄫"
              },
              {
                "id": "K_D",
                "text": "𑄩"
              },
              {
                "id": "K_F",
                "text": "𑄃"
              },
              {
                "id": "K_G",
                "text": "𑅁"
              },
              {
                "id": "K_H",
                "text": "𑄞"
              },
              {
                "id": "K_J",
                "text": "𑄈"
              },
              {
                "id": "K_K",
                "text": "𑄗"
              },
              {
                "id": "K_L",
                "text": "𑄙"
              },
              {
                "id": "K_COLON",
                "text": "𑅅"
              },
              {
                "id": "K_QUOTE",
                "text": "\""
              },
              {
                "id": "K_BKSLASH",
                "text": "𑄂"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "160",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "𑅆"
              },
              {
                "id": "K_X",
                "text": "𑄯"
              },
              {
                "id": "K_C",
                "text": "𑄰"
              },
              {
                "id": "K_V",
                "text": "𑄣"
              },
              {
                "id": "K_B",
                "text": "𑄕"
              },
              {
                "id": "K_N",
                "text": "𑄲"
              },
              {
                "id": "K_M",
                "text": "𑄆"
              },
              {
                "id": "K_COMMA",
                "text": "<"
              },
              {
                "id": "K_PERIOD",
                "text": ">"
              },
              {
                "id": "K_SLASH",
                "text": "𑅃"
              },
              {
                "id": "T_new_217",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "930"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ]
  },
  "phone": {
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "𑄷"
              },
              {
                "id": "K_2",
                "text": "𑄸"
              },
              {
                "id": "K_3",
                "text": "𑄹"
              },
              {
                "id": "K_4",
                "text": "𑄺"
              },
              {
                "id": "K_5",
                "text": "𑄻"
              },
              {
                "id": "K_6",
                "text": "𑄼"
              },
              {
                "id": "K_7",
                "text": "𑄽"
              },
              {
                "id": "K_8",
                "text": "𑄾"
              },
              {
                "id": "K_9",
                "text": "𑄿"
              },
              {
                "id": "K_0",
                "text": "𑄶"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "text": "𑄋",
                "pad": "75"
              },
              {
                "id": "K_W",
                "text": "𑄡"
              },
              {
                "id": "K_E",
                "text": "𑄓"
              },
              {
                "id": "K_R",
                "text": "𑄛"
              },
              {
                "id": "K_T",
                "text": "𑄑"
              },
              {
                "id": "K_Y",
                "text": "𑄌"
              },
              {
                "id": "K_U",
                "text": "𑄎"
              },
              {
                "id": "K_I",
                "text": "𑄦"
              },
              {
                "id": "K_O",
                "text": "𑄉"
              },
              {
                "id": "K_P",
                "text": "𑄤"
              },
              {
                "id": "K_LBRKT",
                "text": "["
              },
              {
                "id": "K_RBRKT",
                "text": "]"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "`"
              },
              {
                "id": "K_A",
                "text": "𑄭"
              },
              {
                "id": "K_S",
                "text": "𑄪"
              },
              {
                "id": "K_D",
                "text": "𑄨"
              },
              {
                "id": "K_F",
                "text": "𑄧"
              },
              {
                "id": "K_G",
                "text": "𑄳"
              },
              {
                "id": "K_H",
                "text": "𑄝"
              },
              {
                "id": "K_J",
                "text": "𑄇"
              },
              {
                "id": "K_K",
                "text": "𑄖"
              },
              {
                "id": "K_L",
                "text": "𑄘"
              },
              {
                "id": "K_COLON",
                "text": "𑄴"
              },
              {
                "id": "K_QUOTE",
                "text": "'"
              },
              {
                "id": "K_BKSLASH",
                "text": "𑅂"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "160",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "𑄄"
              },
              {
                "id": "K_X",
                "text": "𑄮"
              },
              {
                "id": "K_C",
                "text": "𑄬"
              },
              {
                "id": "K_V",
                "text": "𑄢"
              },
              {
                "id": "K_B",
                "text": "𑄚"
              },
              {
                "id": "K_N",
                "text": "𑄥"
              },
              {
                "id": "K_M",
                "text": "𑄟"
              },
              {
                "id": "K_COMMA",
                "text": ","
              },
              {
                "id": "K_PERIOD",
                "text": "."
              },
              {
                "id": "K_SLASH",
                "text": "𑅄"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "930"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "!"
              },
              {
                "id": "K_2",
                "text": "@"
              },
              {
                "id": "K_3",
                "text": "#"
              },
              {
                "id": "K_4",
                "text": "𑅇"
              },
              {
                "id": "K_5",
                "text": "%"
              },
              {
                "id": "K_6",
                "text": "𑅀"
              },
              {
                "id": "K_7",
                "text": "𑄀"
              },
              {
                "id": "K_8",
                "text": "*"
              },
              {
                "id": "K_9",
                "text": "("
              },
              {
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": ";"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "text": "𑄁",
                "pad": "75"
              },
              {
                "id": "K_W",
                "text": "𑄠"
              },
              {
                "id": "K_E",
                "text": "𑄔"
              },
              {
                "id": "K_R",
                "text": "𑄜"
              },
              {
                "id": "K_T",
                "text": "𑄒"
              },
              {
                "id": "K_Y",
                "text": "𑄍"
              },
              {
                "id": "K_U",
                "text": "𑄏"
              },
              {
                "id": "K_I",
                "text": "𑄐"
              },
              {
                "id": "K_O",
                "text": "𑄊"
              },
              {
                "id": "K_P",
                "text": "𑄅"
              },
              {
                "id": "K_LBRKT",
                "text": "{"
              },
              {
                "id": "K_RBRKT",
                "text": "}"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "~"
              },
              {
                "id": "K_A",
                "text": "𑄱"
              },
              {
                "id": "K_S",
                "text": "𑄫"
              },
              {
                "id": "K_D",
                "text": "𑄩"
              },
              {
                "id": "K_F",
                "text": "𑄃"
              },
              {
                "id": "K_G",
                "text": "𑅁"
              },
              {
                "id": "K_H",
                "text": "𑄞"
              },
              {
                "id": "K_J",
                "text": "𑄈"
              },
              {
                "id": "K_K",
                "text": "𑄗"
              },
              {
                "id": "K_L",
                "text": "𑄙"
              },
              {
                "id": "K_COLON",
                "text": "𑅅"
              },
              {
                "id": "K_QUOTE",
                "text": "\""
              },
              {
                "id": "K_BKSLASH",
                "text": "𑄂"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "160",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "𑅆"
              },
              {
                "id": "K_X",
                "text": "𑄯"
              },
              {
                "id": "K_C",
                "text": "𑄰"
              },
              {
                "id": "K_V",
                "text": "𑄣"
              },
              {
                "id": "K_B",
                "text": "𑄕"
              },
              {
                "id": "K_N",
                "text": "𑄲"
              },
              {
                "id": "K_M",
                "text": "𑄆"
              },
              {
                "id": "K_COMMA",
                "text": "<"
              },
              {
                "id": "K_PERIOD",
                "text": ">"
              },
              {
                "id": "K_SLASH",
                "text": "𑅃"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "930"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              },
              {
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": ";"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_Q",
                "text": "𑄁",
                "pad": "75"
              },
              {
                "id": "K_W",
                "text": "𑄠"
              },
              {
                "id": "K_E",
                "text": "𑄔"
              },
              {
                "id": "K_R",
                "text": "𑄜"
              },
              {
                "id": "K_T",
                "text": "𑄒"
              },
              {
                "id": "K_Y",
                "text": "𑄍"
              },
              {
                "id": "K_U",
                "text": "𑄏"
              },
              {
                "id": "K_I",
                "text": "𑄐"
              },
              {
                "id": "K_O",
                "text": "𑄊"
              },
              {
                "id": "K_P",
                "text": "𑄅"
              },
              {
                "id": "K_LBRKT",
                "text": "{"
              },
              {
                "id": "K_RBRKT",
                "text": "}"
              },
              {
                "id": "T_new_191",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_BKQUOTE",
                "text": "~"
              },
              {
                "id": "K_A",
                "text": "𑄱"
              },
              {
                "id": "K_S",
                "text": "𑄫"
              },
              {
                "id": "K_D",
                "text": "𑄩"
              },
              {
                "id": "K_F",
                "text": "𑄃"
              },
              {
                "id": "K_G",
                "text": "𑅁"
              },
              {
                "id": "K_H",
                "text": "𑄞"
              },
              {
                "id": "K_J",
                "text": "𑄈"
              },
              {
                "id": "K_K",
                "text": "𑄗"
              },
              {
                "id": "K_L",
                "text": "𑄙"
              },
              {
                "id": "K_COLON",
                "text": "𑅅"
              },
              {
                "id": "K_QUOTE",
                "text": "\""
              },
              {
                "id": "K_BKSLASH",
                "text": "𑄂"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "160",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_oE2"
              },
              {
                "id": "K_Z",
                "text": "𑅆"
              },
              {
                "id": "K_X",
                "text": "𑄯"
              },
              {
                "id": "K_C",
                "text": "𑄰"
              },
              {
                "id": "K_V",
                "text": "𑄣"
              },
              {
                "id": "K_B",
                "text": "𑄕"
              },
              {
                "id": "K_N",
                "text": "𑄲"
              },
              {
                "id": "K_M",
                "text": "𑄆"
              },
              {
                "id": "K_COMMA",
                "text": "<"
              },
              {
                "id": "K_PERIOD",
                "text": ">"
              },
              {
                "id": "K_SLASH",
                "text": "𑅃"
              },
              {
                "id": "T_new_217",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "5",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "140",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "930"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "145",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ]
  }
};
  this.KVER="18.0.241.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 68
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"#");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 71
        k.KDC(0,t);
        k.KO(-1,t,"𑅇");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"𑄀");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 54
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 62
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 29
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 63
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 64
        k.KDC(0,t);
        k.KO(-1,t,"𑅄");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"𑄶");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 19
        k.KDC(0,t);
        k.KO(-1,t,"𑄷");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"𑄸");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 21
        k.KDC(0,t);
        k.KO(-1,t,"𑄹");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"𑄺");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 23
        k.KDC(0,t);
        k.KO(-1,t,"𑄻");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"𑄼");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 25
        k.KDC(0,t);
        k.KO(-1,t,"𑄽");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"𑄾");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 27
        k.KDC(0,t);
        k.KO(-1,t,"𑄿");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"𑅅");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 53
        k.KDC(0,t);
        k.KO(-1,t,"𑄴");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,">");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"𑅃");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 69
        k.KDC(0,t);
        k.KO(-1,t,"@");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"𑄱");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"𑄕");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"𑄰");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"𑄩");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"𑄔");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"𑄃");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"𑅁");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"𑄞");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"𑄐");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"𑄈");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"𑄗");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"𑄙");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"𑄆");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"𑄲");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"𑄊");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"𑄅");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"𑄁");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"𑄜");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"𑄫");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"𑄒");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"𑄏");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"𑄣");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"𑄠");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,"𑄯");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"𑄍");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"𑅆");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 41
        k.KDC(0,t);
        k.KO(-1,t,"[");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"𑅂");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"]");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"𑅀");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 18
        k.KDC(0,t);
        k.KO(-1,t,"`");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"𑄭");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 59
        k.KDC(0,t);
        k.KO(-1,t,"𑄚");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 57
        k.KDC(0,t);
        k.KO(-1,t,"𑄬");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"𑄨");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 33
        k.KDC(0,t);
        k.KO(-1,t,"𑄓");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"𑄧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"𑄳");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 49
        k.KDC(0,t);
        k.KO(-1,t,"𑄝");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"𑄦");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"𑄇");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 51
        k.KDC(0,t);
        k.KO(-1,t,"𑄖");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"𑄘");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 61
        k.KDC(0,t);
        k.KO(-1,t,"𑄟");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 60
        k.KDC(0,t);
        k.KO(-1,t,"𑄥");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 39
        k.KDC(0,t);
        k.KO(-1,t,"𑄉");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"𑄤");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 31
        k.KDC(0,t);
        k.KO(-1,t,"𑄋");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"𑄛");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"𑄪");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 35
        k.KDC(0,t);
        k.KO(-1,t,"𑄑");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 37
        k.KDC(0,t);
        k.KO(-1,t,"𑄎");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 58
        k.KDC(0,t);
        k.KO(-1,t,"𑄢");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"𑄡");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 56
        k.KDC(0,t);
        k.KO(-1,t,"𑄮");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"𑄌");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 55
        k.KDC(0,t);
        k.KO(-1,t,"𑄄");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"{");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"𑄂");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"}");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 67
        k.KDC(0,t);
        k.KO(-1,t,"~");
      }
    }
    return r;
  };
}
