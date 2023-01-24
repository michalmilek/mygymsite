import React from "react";

type Props = {};

const width = "w-[350px]";

const Sponsors = (props: Props) => {
  return (
    <div className="bg-secondary1 h-[400px] flex gap-16">
      <img
        src="https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_618/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2022/3/8/yckignqlwm2l3krd0kvr/basement-logo"
        alt="redbull"
        className={width}
      />
      <img
        src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png"
        alt="nike"
        className={width}
      />

      <img
        src="https://dsn.group/image/cache/catalog/Logo/realpharm%20logo-auto_width_500.jpg"
        alt="realpharm"
        className={width}
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Kia-logo.png"
        alt="kia"
        className={width}
      />
    </div>
  );
};

export default Sponsors;
