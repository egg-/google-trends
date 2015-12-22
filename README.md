# google-trends

Scrap recent trend words on Google for Node.js

[![version](https://img.shields.io/npm/v/google-trends.svg) ![download](https://img.shields.io/npm/dm/google-trends.svg)](https://www.npmjs.com/package/google-trends)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage

```javascript
var trends = require('google-trends')

trends.load(['kr'], function (err, result) {
  console.log(err, JSON.stringify(result))
})

```

```javascript
// output
{
  "kr": [
    {
      "title": "지진",
      "link": "http://www.google.co.kr/trends/hottrends?pn=p23#a=20151222-%EC%A7%80%EC%A7%84",
      "ctime": 1450728000,
      "news": {
        "picture": {
          "url": "//t0.gstatic.com/images?q=tbn:ANd9GcTEI1l0ltniQq9PVbDe_u3oHxAk2QHoRM9h54L-FB7USd14CqkjrRSZVQ28fIbNdtNlaEj8DCo",
          "source": "연합뉴스"
        },
        "items": [
          {
            "title": "전북 익산 규모 3.5 <b>지진</b>…서울·부산서도 감지(종합2보)",
            "snippet": "(익산=연합뉴스) 김진방 기자 = 22일 오전 4시30분께 전북 익산 북쪽 8㎞ 지점에서 규모 3.5의 <b>지진이</b> 발생했다고 전주기상지청이 밝혔다. 이번에 발생한 <b>지진은</b> 지난 8월 3일 제주 서귀포시 성산 남동쪽 22㎞ 해역에서 발생한 규모 3.7의 <b>지진에</b> 이어 올 들어&nbsp;...",
            "url": "http://www.yonhapnews.co.kr/bulletin/2015/12/22/0200000000AKR20151222009300055.HTML",
            "source": "연합뉴스"
          },
          {
            "title": "익산서 내륙 최대 규모 <b>지진</b>, 서울서도 싱크대 흔들렸다",
            "snippet": "전북 익산에서 올들어 두번째로 규모가 큰 <b>지진이</b> 발생했다. 내륙에서는 가장 큰 규모의 <b>지진</b>이었다. <b>지진</b>여파는 서울과 강원 등지에까지 전달됐다. 새벽 단잠을 깬 일부 시민들은 휴대폰 메시지 등 SNS를 통해 <b>지진을</b> 알렸고 지인들의 안부를 물었다. 기상청은&nbsp;...",
            "url": "http://news.khan.co.kr/kh_news/khan_art_view.html?artid=201512220836181&code=940100",
            "source": "경향신문"
          }
        ]
      }
    }
    // ...
  ]
}
```

## List of Google domains

https://en.wikipedia.org/wiki/List_of_Google_domains


## LICENSE

google-trends is licensed under the MIT license.
