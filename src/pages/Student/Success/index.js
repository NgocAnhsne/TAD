import "./style.scss";
import successImg from '~/components/asset/img/image 27.png'

    function SuccessStudent() {
        return (
            <div className="successStudent">
                <div className="successStudent__content">
                    <div className="successStudent__content--img">
                    <img src={successImg} />
                    </div>
                    <div className="successStudent__content--info">
                        <div className="successStudent__content--info__title">
                        Hoàn thành bài học!
                        </div>
                        <div className="successStudent__content--info__box">
                            <div className="successStudent__content--info__box--score">
                                <h2>
                                Tổng điểm
                                </h2>
                                <div className="successStudent__content--info__box--score__content">
                                    20
                                </div>
                            </div>
                            <div className="successStudent__content--info__box--accuracy">
                                <h2>
                                Chính xác
                                </h2>
                                <div className="successStudent__content--info__box--accuracy__content">
                                    30%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

export default SuccessStudent;