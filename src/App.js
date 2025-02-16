import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('沖縄旅行のプランへようこそ！');  // 初期メッセージ
  const [schedule, setSchedule] = useState([]);  // 日程表の状態

  const handlePress = (day) => {
    // 日程に応じたメッセージと日程表を変更
    switch(day) {
      case 1:
        setMessage('1日目: 沖縄本島観光');
        setSchedule([
          '09:00 - 沖縄美ら海水族館見学',
          '12:00 - 昼食: 地元のレストラン',
          '14:00 - 沖縄戦跡巡り',
          '17:00 - ホテルチェックイン'
        ]);
        break;
      case 2:
        setMessage('2日目: 古宇利島と海岸ドライブ');
        setSchedule([
          '08:00 - 朝食: ホテルにて',
          '10:00 - 古宇利島観光',
          '12:00 - 昼食: 海辺のレストラン',
          '14:00 - アメリカンビレッジ訪問',
          '18:00 - 夕食: 居酒屋'
        ]);
        break;
      case 3:
        setMessage('3日目: ショッピングと観光スポット巡り');
        setSchedule([
          '09:00 - 朝食: ホテルにて',
          '11:00 - 免税店でショッピング',
          '13:00 - 観光スポット巡り',
          '16:00 - 旅行終了、空港へ向かう'
        ]);
        break;
      default:
        setMessage('沖縄旅行のプランへようこそ！');
        setSchedule([]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>

        {/* 画像を表示 */}
        {message === '1日目: 沖縄本島観光' && (
          <img src="https://media.istockphoto.com/id/654152514/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%B2%96%E7%B8%84%E3%80%80%E3%82%B7%E3%83%BC%E3%82%B5%E3%83%BC%E3%81%A8%E7%BE%8E%E3%81%97%E3%81%84%E6%B5%B7.jpg?s=1024x1024&w=is&k=20&c=AQyd_GtOK7Ai_036-OHyJB-TvvcVDb-x4qyigiiHzxY=" alt="沖縄本島" className="App-image" />
        )}
        {message === '2日目: 古宇利島と海岸ドライブ' && (
          <img src="https://example.com/okinawa_image2.jpg" alt="古宇利島" className="App-image" />
        )}
        {message === '3日目: ショッピングと観光スポット巡り' && (
          <img src="https://example.com/okinawa_image3.jpg" alt="ショッピング" className="App-image" />
        )}

        {/* 日程表をリスト表示 */}
        <div className="scheduleContainer">
          <h2>日程表:</h2>
          {schedule.length > 0 ? (
            schedule.map((item, index) => (
              <p key={index} className="scheduleItem">{item}</p>
            ))
          ) : (
            <p className="scheduleItem">プランを選んでください。</p>
          )}
        </div>

        {/* 日程ごとのボタン */}
        <div className="buttonContainer">
          <button onClick={() => handlePress(1)}>1日目のプラン</button>
          <button onClick={() => handlePress(2)}>2日目のプラン</button>
          <button onClick={() => handlePress(3)}>3日目のプラン</button>
        </div>
      </header>
    </div>
  );
}

export default App;
