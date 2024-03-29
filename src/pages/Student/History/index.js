import "./style.scss";

import bgHistory from "~/components/asset/img/HistoryStudent.png";

function HistoryStudent() {
  return (
    <div className="historyStudent">
      <div className="historyStudent__background">
        <img src={bgHistory} />
      </div>
      <div className="historyStudent__title">
        <h1>Lịch sử</h1>
      </div>
      <div className="historyStudent__content">
        <div className="historyStudent__content--list">
          {/* course 1 */}
          <div className="historyStudent__content--list__item shadow">
            <div className="historyStudent__content--list__item--title">
              Homeworks
            </div>
            <div className="historyStudent__content--list__item--body">
              <div className="historyStudent__content--list__item--body__row">
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__left">
                  <div className="historyStudent__content--list__item--body__row--col__left--ques">30 questions</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--time">Time</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--score">Score</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--playdate">Play date</div>
                </div>
                </div>
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__right">
                  <div className="historyStudent__content--list__item--body__row--col__right--player">6 plays</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--time">15 minutes</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--score">70</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--playdate">1 week ago</div>
                </div>
                </div>
              </div>
            </div>
            <div className="historyStudent__content--list__item--btn">
                <button className="shadow">View</button>
            </div>
          </div>
          {/* course 2 */}
          <div className="historyStudent__content--list__item shadow">
            <div className="historyStudent__content--list__item--title">
            Practice
            </div>
            <div className="historyStudent__content--list__item--body">
              <div className="historyStudent__content--list__item--body__row">
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__left">
                  <div className="historyStudent__content--list__item--body__row--col__left--ques">45 questions</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--time">Time</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--score">Score</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--playdate">Play date</div>
                </div>
                </div>
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__right">
                  <div className="historyStudent__content--list__item--body__row--col__right--player">8 plays</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--time">45 minutes</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--score">150</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--playdate">8 days ago</div>
                </div>
                </div>
              </div>
            </div>
            <div className="historyStudent__content--list__item--btn">
                <button className="shadow">View</button>
            </div>
          </div>
          {/* course 3 */}
          <div className="historyStudent__content--list__item shadow">
            <div className="historyStudent__content--list__item--title">
            Funny game
            </div>
            <div className="historyStudent__content--list__item--body">
              <div className="historyStudent__content--list__item--body__row">
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__left">
                  <div className="historyStudent__content--list__item--body__row--col__left--ques">100 questions</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--time">Time</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--score">Score</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--playdate">Play date</div>
                </div>
                </div>
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__right">
                  <div className="historyStudent__content--list__item--body__row--col__right--player">24 plays</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--time">90 minutes</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--score">200</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--playdate">1 month ago</div>
                </div>
                </div>
              </div>
            </div>
            <div className="historyStudent__content--list__item--btn">
                <button className="shadow">View</button>
            </div>
          </div>
          {/* course 4 */}
          <div className="historyStudent__content--list__item shadow">
            <div className="historyStudent__content--list__item--title">
            Spring Test
            </div>
            <div className="historyStudent__content--list__item--body">
              <div className="historyStudent__content--list__item--body__row">
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__left">
                  <div className="historyStudent__content--list__item--body__row--col__left--ques">70 questions</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--time">Time</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--score">Score</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--playdate">Play date</div>
                </div>
                </div>
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__right">
                  <div className="historyStudent__content--list__item--body__row--col__right--player">4 plays</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--time">30 minutes</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--score">98</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--playdate">3 weeks ago</div>
                </div>
                </div>
              </div>
            </div>
            <div className="historyStudent__content--list__item--btn">
                <button className="shadow">View</button>
            </div>
          </div>
          {/* course 5 */}
          <div className="historyStudent__content--list__item shadow">
            <div className="historyStudent__content--list__item--title">
            Spring Test
            </div>
            <div className="historyStudent__content--list__item--body">
              <div className="historyStudent__content--list__item--body__row">
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__left">
                  <div className="historyStudent__content--list__item--body__row--col__left--ques">70 questions</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--time">Time</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--score">Score</div>
                  <div className="historyStudent__content--list__item--body__row--col__left--playdate">Play date</div>
                </div>
                </div>
                <div className="historyStudent__content--list__item--body__row--col">
                <div className="historyStudent__content--list__item--body__row--col__right">
                  <div className="historyStudent__content--list__item--body__row--col__right--player">4 plays</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--time">30 minutes</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--score">98</div>
                  <div className="historyStudent__content--list__item--body__row--col__right--playdate">3 weeks ago</div>
                </div>
                </div>
              </div>
            </div>
            <div className="historyStudent__content--list__item--btn">
                <button className="shadow">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryStudent;