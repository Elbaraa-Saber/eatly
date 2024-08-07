import "./style.css";

function Resturant(props) {
  return (
    <div className="resturant">
      <div
        className={`resturant__img ${
          props.type === "Healthy" ? "resturant__chicken" : "resturant__bread"
        }`}
      ></div>

      <div className="resturant__contain">
        <span
          className={`resturant__type ${
            props.type === "Healthy" && "resturant__healthy"
          } ${props.type === "Trending" && "resturant__trending"}`}
        >
          {props.type}
        </span>
        <h4>{props.title}</h4>

        <div className="resturant__foot">
          <div className="resturant__timeRate">
            <div className="resturant__min">
              {props.time}
              <span>•</span>
            </div>
            <span className="resturant__rating">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0012 15.2033C13.2131 15.8667 14.2789 15.0627 14.0471 13.6557L13.631 11.1295L15.3939 9.34042C16.3743 8.34541 15.9693 7.04163 14.6124 6.83636L12.1761 6.46778L11.092 4.1807C10.4847 2.89959 9.16615 2.88581 8.55772 4.16934L7.46819 6.46778L5.03192 6.83636C3.67698 7.04134 3.26862 8.344 4.25045 9.34042L6.01335 11.1295L5.59719 13.6557C5.36574 15.0607 6.4295 15.8676 7.64311 15.2033L9.82217 14.0106L12.0012 15.2033Z"
                  fill="#6C5FBC"
                />
                <mask
                  id="mask0_1_11085"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="3"
                  width="13"
                  height="13"
                >
                  <path
                    d="M12.0012 15.2033C13.2131 15.8667 14.2789 15.0627 14.0471 13.6557L13.631 11.1295L15.3939 9.34042C16.3743 8.34541 15.9693 7.04163 14.6124 6.83636L12.1761 6.46778L11.092 4.1807C10.4847 2.89959 9.16615 2.88581 8.55772 4.16934L7.46819 6.46778L5.03192 6.83636C3.67698 7.04134 3.26862 8.344 4.25045 9.34042L6.01335 11.1295L5.59719 13.6557C5.36574 15.0607 6.4295 15.8676 7.64311 15.2033L9.82217 14.0106L12.0012 15.2033Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1_11085)"></g>
              </svg>{" "}
              {props.rating}
            </span>
          </div>

          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14.6041" cy="14.9363" r="14.2525" fill="#DBD9EE" />
            <path
              d="M17.7264 8.27674C15.6628 7.93078 13.5449 7.93078 11.4813 8.27674C10.7274 8.40313 10.127 8.98191 9.97582 9.73235C9.28331 13.1703 9.24553 16.708 9.86445 20.16L10.1164 21.5654C10.1941 21.9988 10.7224 22.172 11.0416 21.8687L14.0832 18.9792C14.375 18.7021 14.8327 18.7021 15.1245 18.9792L18.166 21.8687C18.4852 22.172 19.0135 21.9988 19.0912 21.5654L19.3432 20.16C19.9621 16.708 19.9244 13.1703 19.2319 9.73235C19.0807 8.98191 18.4803 8.40313 17.7264 8.27674Z"
              fill="#6C5FBC"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Resturant;
