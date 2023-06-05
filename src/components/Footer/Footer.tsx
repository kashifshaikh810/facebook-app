interface IProps {
  navigate: Function;
}

const Footer = (props: IProps) => {
  const listOneData = [
    {
      title: "English (UK)",
      onClick: () => {},
      style: "cursor-default text-[12px] text-[#737373]",
    },
    {
      title: "اردو",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "پښتو",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "العربية",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "हिन्दी",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "বাংলা",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "ਪੰਜਾਬੀ",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "فارسی",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "ગુજરાતી",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "Deutsch",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "Español",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
  ];

  const listTwoData = [
    {
      title: "Sign Up",
      onClick: () => props?.navigate("/reg"),
      style: "cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "Log in",
      onClick: () => props?.navigate("/login"),
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "messenger",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
    {
      title: "Facebook Lite",
      onClick: () => {},
      style: "pl-[10px] cursor-pointer text-[12px] text-[#737373]",
    },
  ];

  return (
    <div>
      <div>
        <div className="w-auto m-[40px]">
          <ul className="flex flex-wrap items-center">
            {listOneData.map((item, index) => {
              return (
                <li key={index} className={item.style}>
                  {item.title}
                </li>
              );
            })}
          </ul>
          <div className="border-b-[1px] border-[#dddfe2] text-[1px] h-[8px] mb-[8px]"></div>
          <div>
            <ul className="flex flex-wrap items-center">
              {listTwoData.map((item, index) => {
                return (
                  <li key={index} className={item.style} onClick={item.onClick}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
