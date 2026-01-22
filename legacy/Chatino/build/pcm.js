
KeymanWeb.KR(new Keyboard_pcm());

function Keyboard_pcm()
{
  
  this.KI="Keyboard_pcm";
  this.KN="Nigerian Pidgin";
  this.KMINVER="9.0";
  this.KV=null;
  this.KDU=0;
  this.KH="Layout for easily typing Nigerian Pidgen letters";
  this.KM=0;
  this.KBVER="9";
  this.KMBM=0x0010;
  this.KVKL={
  "tablet": {
    "font": "Tahoma",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_Q",
                "text": "́",
                "sk": [
                  {
                    "text": "̀",
                    "id": "T_new_145"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "text": "é",
                    "id": "T_new_318"
                  },
                  {
                    "text": "è",
                    "id": "T_new_317"
                  },
                  {
                    "text": "ẹ",
                    "id": "T_new_149"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "text": "ú",
                    "id": "T_new_336"
                  },
                  {
                    "text": "ù",
                    "id": "T_new_338"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "text": "í",
                    "id": "T_new_322"
                  },
                  {
                    "text": "ì",
                    "id": "T_new_324"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "text": "ó",
                    "id": "T_new_327"
                  },
                  {
                    "text": "ò",
                    "id": "T_new_326"
                  },
                  {
                    "text": "ọ",
                    "id": "T_new_147"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_A",
                "text": "a",
                "pad": 70,
                "sk": [
                  {
                    "text": "á",
                    "id": "T_new_319"
                  },
                  {
                    "text": "à",
                    "id": "T_new_321"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_D",
                "text": "d"
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "id": "T_new_54",
                "text": "",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "110",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_Z",
                "text": "z"
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n"
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "K_PERIOD",
                "text": ",",
                "sk": [
                  {
                    "text": ",",
                    "id": "K_COMMA"
                  },
                  {
                    "text": "!",
                    "id": "K_1",
                    "layer": "shift"
                  },
                  {
                    "text": "?",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "K_QUOTE"
                  },
                  {
                    "text": "\"",
                    "id": "K_QUOTE",
                    "layer": "shift"
                  },
                  {
                    "text": "\\",
                    "id": "K_BKSLASH"
                  },
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": ";",
                    "id": "K_COLON"
                  }
                ]
              },
              {
                "id": "T_new_110",
                "text": ".",
                "sk": [
                  {
                    "text": ":",
                    "id": "T_new_465"
                  },
                  {
                    "text": "\"",
                    "id": "T_new_467"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "630",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
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
            "id": 1,
            "key": [
              {
                "id": "K_Q",
                "text": "̀"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "text": "É",
                    "id": "T_new_190"
                  },
                  {
                    "text": "È",
                    "id": "T_new_191"
                  },
                  {
                    "text": "Ẹ",
                    "id": "T_new_188"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U",
                "sk": [
                  {
                    "text": "Ú",
                    "id": "T_new_206"
                  },
                  {
                    "text": "Ù",
                    "id": "T_new_208"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "text": "Í",
                    "id": "T_new_209"
                  },
                  {
                    "text": "Ì",
                    "id": "T_new_211"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "text": "Ó",
                    "id": "T_new_193"
                  },
                  {
                    "text": "Ò",
                    "id": "T_new_194"
                  },
                  {
                    "text": "Ọ",
                    "id": "T_new_186"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_A",
                "text": "A",
                "pad": 70,
                "sk": [
                  {
                    "text": "Á",
                    "id": "T_new_201"
                  },
                  {
                    "text": "À",
                    "id": "T_new_203"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "id": "T_new_171",
                "text": "",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "110",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_Z",
                "text": "Z"
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "id": "T_new_509",
                "text": ";"
              },
              {
                "id": "K_PERIOD",
                "text": "\"",
                "layer": "default",
                "sk": [
                  {
                    "text": ",",
                    "id": "K_COMMA",
                    "layer": "default"
                  },
                  {
                    "text": "!",
                    "id": "K_1",
                    "layer": "shift"
                  },
                  {
                    "text": "?",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "K_QUOTE",
                    "layer": "default"
                  },
                  {
                    "text": "\"",
                    "id": "K_QUOTE",
                    "layer": "shift"
                  },
                  {
                    "text": "\\",
                    "id": "K_BKSLASH",
                    "layer": "default"
                  },
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": ";",
                    "id": "K_COLON",
                    "layer": "default"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "630",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
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
            "id": 1,
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
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_4",
                "layer": "shift",
                "pad": 70,
                "text": "$"
              },
              {
                "id": "K_2",
                "layer": "shift",
                "text": "@"
              },
              {
                "id": "K_3",
                "layer": "shift",
                "text": "#"
              },
              {
                "id": "K_5",
                "layer": "shift",
                "text": "%"
              },
              {
                "id": "K_7",
                "layer": "shift",
                "text": "&"
              },
              {
                "id": "K_HYPHEN",
                "layer": "shift",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "layer": "default",
                "text": "="
              },
              {
                "id": "K_BKSLASH",
                "layer": "shift",
                "text": "|"
              },
              {
                "id": "K_BKSLASH",
                "layer": "default",
                "text": "\\"
              },
              {
                "text": "",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "110",
                "sp": "1"
              },
              {
                "id": "K_LBRKT",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "«"
                  },
                  {
                    "id": "K_COMMA",
                    "text": "<",
                    "layer": "shift"
                  },
                  {
                    "id": "K_LBRKT",
                    "text": "{",
                    "layer": "shift"
                  }
                ],
                "text": "["
              },
              {
                "id": "K_9",
                "layer": "shift",
                "text": "("
              },
              {
                "id": "K_0",
                "layer": "shift",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "»"
                  },
                  {
                    "id": "K_PERIOD",
                    "text": ">",
                    "layer": "shift"
                  },
                  {
                    "id": "K_RBRKT",
                    "text": "}",
                    "layer": "shift"
                  }
                ],
                "text": "]"
              },
              {
                "id": "K_EQUAL",
                "layer": "shift",
                "text": "+"
              },
              {
                "id": "K_HYPHEN",
                "layer": "default",
                "text": "-"
              },
              {
                "id": "K_8",
                "layer": "shift",
                "text": "*"
              },
              {
                "id": "K_SLASH",
                "layer": "default",
                "text": "/"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_LOWER",
                "text": "*abc*",
                "width": "140",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "630",
                "sp": "0",
                "text": ""
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ],
    "displayUnderlying": false
  },
  "phone": {
    "font": "Tahoma",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_Q",
                "text": "́",
                "sk": [
                  {
                    "text": "̀",
                    "id": "T_new_726"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e",
                "sk": [
                  {
                    "text": "é",
                    "id": "T_new_799"
                  },
                  {
                    "text": "è",
                    "id": "T_new_801"
                  },
                  {
                    "text": "ẹ",
                    "id": "T_new_802"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "text": "ú",
                    "id": "T_new_803"
                  },
                  {
                    "text": "ù",
                    "id": "T_new_805"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "text": "í",
                    "id": "T_new_813"
                  },
                  {
                    "text": "ì",
                    "id": "T_new_815"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "text": "ó",
                    "id": "T_new_806"
                  },
                  {
                    "text": "ò",
                    "id": "T_new_808"
                  },
                  {
                    "text": "ọ",
                    "id": "T_new_809"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_A",
                "text": "a",
                "pad": "50",
                "sk": [
                  {
                    "text": "á",
                    "id": "T_new_728"
                  },
                  {
                    "text": "à",
                    "id": "T_new_730"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_D",
                "text": "d"
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "id": "T_new_384",
                "text": "ọ"
              },
              {
                "id": "T_new_420",
                "text": "ẹ"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_Z",
                "text": "z"
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n"
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "K_COMMA",
                "text": ",",
                "sk": [
                  {
                    "text": ";",
                    "id": "T_new_1151"
                  }
                ]
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": ",",
                    "id": "K_COMMA"
                  },
                  {
                    "text": "!",
                    "id": "K_1",
                    "layer": "shift"
                  },
                  {
                    "text": "?",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "K_QUOTE"
                  },
                  {
                    "text": "\"",
                    "id": "K_QUOTE",
                    "layer": "shift"
                  },
                  {
                    "text": "\\",
                    "id": "K_BKSLASH"
                  },
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": ";",
                    "id": "K_COLON"
                  }
                ]
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
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "610",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
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
            "id": 1,
            "key": [
              {
                "id": "K_Q",
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "text": "É",
                    "id": "T_new_893"
                  },
                  {
                    "text": "È",
                    "id": "T_new_895"
                  },
                  {
                    "text": "Ẹ",
                    "id": "T_new_896"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U",
                "sk": [
                  {
                    "text": "Ú",
                    "id": "T_new_897"
                  },
                  {
                    "text": "Ù",
                    "id": "T_new_899"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "I",
                "sk": [
                  {
                    "text": "Í",
                    "id": "T_new_884"
                  },
                  {
                    "text": "Ì",
                    "id": "T_new_886"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "text": "Ó",
                    "id": "T_new_887"
                  },
                  {
                    "text": "Ò",
                    "id": "T_new_889"
                  },
                  {
                    "text": "Ọ",
                    "id": "T_new_1057"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_A",
                "text": "A",
                "pad": "50",
                "sk": [
                  {
                    "text": "Á",
                    "id": "T_new_890"
                  },
                  {
                    "text": "À",
                    "id": "T_new_892"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "id": "T_new_208",
                "text": "Ọ"
              },
              {
                "id": "T_new_313",
                "text": "Ẹ"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_Z",
                "text": "Z"
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "id": "T_new_941",
                "text": ":"
              },
              {
                "id": "K_PERIOD",
                "text": "\"",
                "layer": "default",
                "sk": [
                  {
                    "text": ",",
                    "id": "K_COMMA",
                    "layer": "default"
                  },
                  {
                    "text": "!",
                    "id": "K_1",
                    "layer": "shift"
                  },
                  {
                    "text": "?",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "K_QUOTE",
                    "layer": "default"
                  },
                  {
                    "text": "\"",
                    "id": "K_QUOTE",
                    "layer": "shift"
                  },
                  {
                    "text": "\\",
                    "id": "K_BKSLASH",
                    "layer": "default"
                  },
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": ";",
                    "id": "K_COLON",
                    "layer": "default"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "610",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
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
            "id": 1,
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
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "T_new_1288",
                "text": "₦"
              },
              {
                "id": "K_2",
                "text": "@",
                "layer": "shift"
              },
              {
                "id": "K_3",
                "text": "#",
                "layer": "shift"
              },
              {
                "id": "K_5",
                "text": "%",
                "layer": "shift"
              },
              {
                "id": "K_6",
                "text": "&",
                "layer": "shift"
              },
              {
                "id": "K_HYPHEN",
                "text": "_",
                "layer": "shift"
              },
              {
                "id": "K_EQUAL",
                "text": "=",
                "layer": "default"
              },
              {
                "id": "K_BKSLASH",
                "text": "|",
                "layer": "shift"
              },
              {
                "id": "K_BKSLASH",
                "text": "\\",
                "layer": "default"
              },
              {
                "id": "T_new_1424",
                "text": "?"
              },
              {
                "id": "T_new_1545",
                "text": "!"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_4",
                "text": "$",
                "pad": "50",
                "layer": "shift"
              },
              {
                "id": "K_LBRKT",
                "text": "[",
                "pad": "110",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "«"
                  },
                  {
                    "id": "K_COMMA",
                    "text": "<",
                    "layer": "shift"
                  },
                  {
                    "id": "K_LBRKT",
                    "text": "{",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_9",
                "text": "(",
                "layer": "shift"
              },
              {
                "id": "K_0",
                "text": ")",
                "layer": "shift"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "»"
                  },
                  {
                    "id": "K_PERIOD",
                    "text": ">",
                    "layer": "shift"
                  },
                  {
                    "id": "K_RBRKT",
                    "text": "}",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_EQUAL",
                "text": "+",
                "layer": "shift"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "id": "K_8",
                "text": "*",
                "layer": "shift"
              },
              {
                "id": "K_SLASH",
                "text": "/"
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
            "id": 4,
            "key": [
              {
                "id": "K_LOWER",
                "text": "*abc*",
                "width": "150",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "610",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ],
    "displayUnderlying": false
  }
}
;
  this.KVER="13.0.108.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, 0x4010, 0xDE)) {
      if(1){
        r=m=1;   // Line 36
        k.KO(0,t,"Ẹ");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDE)) {
      if(1){
        r=m=1;   // Line 38
        k.KO(0,t,"ẹ");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBC)) {
      if(1){
        r=m=1;   // Line 31
        k.KO(0,t,".");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBE)) {
      if(1){
        r=m=1;   // Line 32
        k.KO(0,t,";");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBF)) {
      if(1){
        r=m=1;   // Line 33
        k.KO(0,t,"'");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBA)) {
      if(1){
        r=m=1;   // Line 37
        k.KO(0,t,"Ọ");
      }
    }
    else if(k.KKM(e, 0x4000, 0xBA)) {
      if(1){
        r=m=1;   // Line 39
        k.KO(0,t,"ọ");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBC)) {
      if(1){
        r=m=1;   // Line 22
        k.KO(0,t,">");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBE)) {
      if(1){
        r=m=1;   // Line 23
        k.KO(0,t,":");
      }
    }
    else if(k.KKM(e, 0x4010, 0xBF)) {
      if(1){
        r=m=1;   // Line 24
        k.KO(0,t,"\"");
      }
    }
    else if(k.KKM(e, 0x4010, 0x42)) {
      if(1){
        r=m=1;   // Line 17
        k.KO(0,t,"N");
      }
    }
    else if(k.KKM(e, 0x4010, 0x43)) {
      if(1){
        r=m=1;   // Line 19
        k.KO(0,t,"V");
      }
    }
    else if(k.KKM(e, 0x4010, 0x4D)) {
      if(1){
        r=m=1;   // Line 21
        k.KO(0,t,"<");
      }
    }
    else if(k.KKM(e, 0x4010, 0x4E)) {
      if(1){
        r=m=1;   // Line 16
        k.KO(0,t,"M");
      }
    }
    else if(k.KKM(e, 0x4010, 0x51)) {
      if(1){
        r=m=1;   // Line 34
        k.KO(0,t,"́");
      }
    }
    else if(k.KKM(e, 0x4010, 0x56)) {
      if(1){
        r=m=1;   // Line 18
        k.KO(0,t,"B");
      }
    }
    else if(k.KKM(e, 0x4010, 0x58)) {
      if(1){
        r=m=1;   // Line 20
        k.KO(0,t,"C");
      }
    }
    else if(k.KKM(e, 0x4000, 0xDC)) {
      if(1){
        r=m=1;   // Line 13
        k.KO(0,t,"/");
      }
    }
    else if(k.KKM(e, 0x4000, 0xC0)) {
      if(1){
        r=m=1;   // Line 35
        k.KO(0,t,"̀");
      }
    }
    else if(k.KKM(e, 0x4000, 0x42)) {
      if(1){
        r=m=1;   // Line 26
        k.KO(0,t,"n");
      }
    }
    else if(k.KKM(e, 0x4000, 0x43)) {
      if(1){
        r=m=1;   // Line 28
        k.KO(0,t,"v");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4D)) {
      if(1){
        r=m=1;   // Line 30
        k.KO(0,t,",");
      }
    }
    else if(k.KKM(e, 0x4000, 0x4E)) {
      if(1){
        r=m=1;   // Line 25
        k.KO(0,t,"m");
      }
    }
    else if(k.KKM(e, 0x4000, 0x51)) {
      if(1){
        r=m=1;   // Line 40
        k.KO(0,t,"́");
      }
    }
    else if(k.KKM(e, 0x4000, 0x56)) {
      if(1){
        r=m=1;   // Line 27
        k.KO(0,t,"b");
      }
    }
    else if(k.KKM(e, 0x4000, 0x58)) {
      if(1){
        r=m=1;   // Line 29
        k.KO(0,t,"c");
      }
    }
    else if(k.KKM(e, 0x4010, 0xDC)) {
      if(1){
        r=m=1;   // Line 15
        k.KO(0,t,"?");
      }
    }
    else if(k.KKM(e, 0x4010, 0xC0)) {
      if(1){
        r=m=1;   // Line 14
        k.KO(0,t,"̀");
      }
    }
    return r;
  };
}
