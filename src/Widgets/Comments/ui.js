import { StarIcon } from "../../Shared/Icons/StarIcon";
import photo from "../../Shared/imgs/image134.png";
import "./style.css";

function Customer() {
  return (
    <div className="comments">
      <div className="container comments__container">
        <h2 className="headOfComp">
          Customer <span>Say</span>
        </h2>
        <div className="comments__boxes">
          <div className="comments__box comments__box-one">
            <div className="comments__title">
              <div className="comments__profile">
                <img src={photo} alt="" />
                <div>
                  <h4 className="comments__name">Alexander R.</h4>
                  <p>01 Year With Us </p>
                </div>
              </div>
              <svg
                width="59"
                height="45"
                viewBox="0 0 59 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36.797 44.2511C33.6916 38.2474 32.139 31.7262 32.139 24.6874C32.139 17.5452 34.0281 11.645 37.8062 6.98701C41.5844 2.32901 47.4586 0 55.429 0V9.78182C52.6342 9.78182 50.5898 10.4029 49.2959 11.645C48.002 12.8872 47.3551 15.2679 47.3551 18.7873V20.34H58.6896V44.2511H36.797ZM4.65799 44.2513C1.55267 38.2477 0 31.7264 0 24.6877C0 17.5454 1.88908 11.6452 5.66723 6.98723C9.44538 2.32923 15.3196 0.000219731 23.29 0.000219731V9.78204C20.4952 9.78204 18.4508 10.4031 17.157 11.6452C15.8631 12.8874 15.2161 15.2681 15.2161 18.7875V20.3402H26.5506V44.2513H4.65799Z"
                  fill="#DADADA"
                />
              </svg>
            </div>
            <div className="comments__desc">
              “ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”
            </div>
            <div className="comments__stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <div className="comments__group">
            <div className="comments__box comments__box-two">
              <div className="desc">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </div>
              <div className="comments__stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="comments__box comments__box-three">
              <div className="desc">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
              </div>
              <div className="comments__stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="comments__progress">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Customer;
