import React, { memo, ReactNode } from "react";
import Header from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
};

const HeaderLayout: React.VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});

export default HeaderLayout;
