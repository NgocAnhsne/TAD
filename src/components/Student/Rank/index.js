import "./style.scss";

function RankServe() {
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const [lessionData, setLessionData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/rank/all");
      setLessionData(result.data.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };
  var moment = require("moment");
  return (
    <div className="rank__content--box">
      <div className="rank__content--box--list">
        {lessionData.length > 0 ? (
          lessionData.map((item, i) => (
            <div className="rank__content--box--list__item">
              <div className="rank__content--box--list__item--left">
                <div className="rank__content--box--list__item--left__name">
                <div className="rank__content--box--list__item--left__name--text">
                    {item.name}
                    </div>
                </div>
              </div>
              <hr></hr>
              <div className="rankServe__container--content__right">
                <div className="rank__content--box--list__item--right__score">
                  {item.score}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default RankServe;
