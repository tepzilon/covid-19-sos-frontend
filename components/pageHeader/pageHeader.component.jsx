const PageHeader = ({ label }) => (
  <>
    <div className="container-center">
      <img
        src="cu_eng_meticuly.png"
        alt="chula engineering and meticuly logo"
      />
    </div>
    <h1>{label}</h1>
    <style jsx>
      {`
        img {
          width: 120px;
          height: 120px;
          margin-bottom: 24px;
        }
        h1 {
          text-align: center;
          font-weight: bold;
          font-size: 29px;
          line-height: 40px;
        }
      `}
    </style>
  </>
);

export default PageHeader;
