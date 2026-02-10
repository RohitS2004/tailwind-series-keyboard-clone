import type { IContainer } from "../types";

const Container = ({ children }: IContainer) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-2">
      {children}
    </div>
  );
};

export default Container;
