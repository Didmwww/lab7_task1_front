import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      el9Active: false,
      el10Active: false,
    };
  }

  toggleEl9 = () => {
    this.setState(prevState => ({ el9Active: !prevState.el9Active }));
  };

  toggleEl10 = () => {
    this.setState(prevState => ({ el10Active: !prevState.el10Active }));
  };

  render() {
    const style9 = this.state.el9Active 
      ? { backgroundColor: '#3498db', color: '#ffffff' } 
      : {};
      
    const style10 = this.state.el10Active 
      ? { backgroundColor: '#2ecc71', color: '#000000' } 
      : {};

    return (
      <>
        <div className="section">
          <p><strong>Дата та місце народження:</strong> 07.11.2006, м. Краматорськ</p>
        </div>

        <div className="section">
          <p><strong>Освіта:</strong> НТУУ «Київський політехнічний інститут» (КПІ)</p>
        </div>

        <div className="section">
          <h3>Хобі</h3>
          <ul>
            <li>Лижний спорт</li>
            <li>Велоспорт</li>
            <li>Серфінг</li>
          </ul>
        </div>

        <div className="section">
          <h3>Улюблені книги</h3>
          <ol>
            <li>Стівен Кові — «7 звичок надзвичайно ефективних людей»</li>
            <li>Джеймс Клір — «Атомні звички»</li>
            <li>Наполеон Хілл — «Думай і багатій»</li>
          </ol>
        </div>

        <div className="section">
          <h3>Улюблене місто</h3>
          <p 
            id="el-9" 
            style={{ cursor: 'pointer', transition: '0.3s', ...style9 }} 
            onClick={this.toggleEl9}
          >
            Найбільше мені подобається місто <strong>Чернівці</strong> -
            обласний центр Чернівецької області, відомий своєю
            історичною архітектурою, зокрема будівлею колишньої
            резиденції митрополитів Буковини та Далмації, яка внесена
            до списку Всесвітньої спадщини ЮНЕСКО.
          </p>
          <p 
            id="el-10" 
            style={{ cursor: 'pointer', transition: '0.3s', ...style10 }} 
            onClick={this.toggleEl10}
          >
            Окрім архітектури, місто приваблює своїм затишком та визначними пам'ятками європейського рівня.
          </p>
        </div>
      </>
    );
  }
}

export default Content;